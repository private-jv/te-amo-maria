const yesButton = document.querySelector('label[for=yes]')
const noButton = document.querySelector('label[for=no]')

const formGroup = document.querySelector('.formGroup')
let Top = 0

yesButton.addEventListener('click', (event) => {
  if (Top >= 1000) {
    alert('Te amo muito <3 <3 <3')
    alert('Obrigado por ter tido a paciência!')
    window.open('https://www.youtube.com/watch?v=gxBW_mxi3wE')
  } else {
    event.preventDefault()
  
    Top += 100
    formGroup.style.top = `${Top}px`
  }
})
