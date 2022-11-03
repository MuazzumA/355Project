const search = document.querySelector('.contact-us-search')
const btn = document.querySelector('.contact-us-btn')
const input = document.querySelector('.contact-us-input')


const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()






})

const labels = document.querySelectorAll('.form-control placeholder')


labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => '<span>${letter}</span>')
    .join('')

})