'use strict';
// Make navbar transparent when it is on the top
const naver = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  //   console.log(window.scrollY);
  //   console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
  navbarMenu.classList.remove('open');
});

//Show up navmenu when you click toggle Btn
const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handdle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  scrollIntoview(link);
});

//Handle click on "contact me" button on home
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', (event) => {
  scrollIntoview('#contact');
});

function scrollIntoview(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// trasparent when you scroll

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show Arrow-up When you scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click the 'arrow up'
arrowUp.addEventListener('click', () => {
  scrollIntoview('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categorise');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  //Remove active class fome previous btn to new btn
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        console.log(project.dataset.type);
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});
