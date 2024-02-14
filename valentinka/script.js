const allText = document.querySelectorAll('.invisible');

console.log(allText)

allText.forEach(element => {
  element.addEventListener('click', (evt) => {
    evt.target.classList.toggle('abd')
  })
});