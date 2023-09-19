const lampImg = document.getElementById('lamp')
const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')

function turnOnLamp() {
    lampImg.src = './img/ligada.jpg'
}

function turnOffLamp() {
    lampImg.src = './img/desligada.jpg'
}

function lampBroken() {
    lampImg.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click', turnOnLamp)
turnOff.addEventListener('click', turnOffLamp)
lampImg.addEventListener('dblclick',lampBroken)
lampImg.addEventListener('mouseover',turnOnLamp)
lampImg.addEventListener('mouseleave',turnOffLamp)