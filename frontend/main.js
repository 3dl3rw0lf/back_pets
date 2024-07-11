import { menu } from './script/menu.js';

window.onload = function () {
  const header = document.getElementById('header');
  const container = document.createElement('div');
  container.innerHTML = menu();
  header.appendChild(container);

  if (window.location.pathname.endsWith('lost_pets.html')) {
    const carouselContainer = document.querySelector('.carousel');
    if (carouselContainer) {
      carouselContainer.innerHTML = carousel();
    }
  }
};

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

function toggleHamburgerIcon (hamburger) {
  hamburger.classList.toggle('open');
  const divs = hamburger.querySelectorAll('div');
  if (hamburger.classList.contains('open')) {
    divs[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    divs[1].style.opacity = '0';
    divs[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    divs[0].style.transform = 'rotate(0) translate(0, 0)';
    divs[1].style.opacity = '1';
    divs[2].style.transform = 'rotate(0) translate(0, 0)';
  }
}
