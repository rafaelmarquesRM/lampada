let poweronoff = document.querySelector('#poweronoff')
let lampada = document.querySelector('#lampada')
let ligaDesliga = false

const date = new Date()
let year = date.getFullYear()
let signature = document.querySelector("#signatureCredit")
signature.innerHTML = "&copy;Rafael Marques - " + year


poweronoff.addEventListener('click', () => {
  if(ligaDesliga == false) {
    lampada.src="./assets/lampada-on.jpg"
    ligaDesliga = true
    poweronoff.innerHTML = 'Desligar'
  }
  else if(ligaDesliga == true) {
    lampada.src="./assets/lampada-apagada.jpg"
    ligaDesliga = false
    poweronoff.innerHTML = 'Ligar'
  }
})