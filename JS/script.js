////////////////////////////////////////////
//Mobile Navigation
const btnEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const body = document.querySelector('body')

btnEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open')
})
////////////////////////////////////////////
//Set Current Year
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////
//Sticky Navigation
const sectionHero = document.querySelector('.section-hero')
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    document.body.classList.add('sticky');
  }
  else {
    document.body.classList.remove('sticky');
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px"
});
obs.observe(sectionHero);