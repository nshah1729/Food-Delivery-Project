const btn = document.querySelector('.btn-mobile-nav')
const header = document.querySelector('.header')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
  header.classList.toggle('nav-open')
})
header.addEventListener('click', () => {
  if (header.classList.contains('nav-open')) {
    header.classList.remove('nav-open')
  }
})

