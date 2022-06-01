const btn = document.querySelector('.btn-mobile-nav')
const header = document.querySelector('.header')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
  header.classList.toggle('nav-open')
})
body.addEventListener('click', () => {
  header.classList.toggle('nav-open')
})

