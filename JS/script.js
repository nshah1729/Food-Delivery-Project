////////////////////////////////////////////
//Mobile Navigation
const btnEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open')
})
////////////////////////////////////////////
//Set Current Year
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

