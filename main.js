const frases = ['Falta um pouco mais...', 'Um pouco mais...', 'Só um pouquinho...', 'Pra você se ligar que eu te amo pra caralho!', 'E esse amor não tem fim...', 'Se liga fia, eu te amo po.', 'Sério mesmo!', 'Por que você ainda tá descendo?', 'Não vai acabar!', 'Tô te falando, toninha...', 'Cansei kkkkkk', 'Clica nesse link aí embaixo.']

let index = 0

function verifyScrollEnd() {
  if ((window.innerHeight + window.scrollY + 50) >= document.body.offsetHeight) {
    const arrowElement = document.createElement('span')
    arrowElement.className = 'arrow'
    arrowElement.innerHTML = '&downarrow;'

    document.body.append(arrowElement)

    const phraseElement = document.createElement('q')
    if (index < frases.length) {
      phraseElement.textContent = frases[index]  
      index += 1
    } else {
      phraseElement.innerHTML = '<a href="./pedido">Clica aqui, meu amor.</a>'
    }

    document.body.append(phraseElement)
  }
}

addEventListener('scroll', verifyScrollEnd)