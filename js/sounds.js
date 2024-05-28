import state from './state.js'

const btnPress = new Audio('./audio/button-press.wav')
const kitchenTimer = new Audio ('./audio/kitchen-timer.mp3')
const cafeteria = new Audio ('./audio/Cafeteria.wav')
const chuva = new Audio ('./audio/Chuva.wav')
const floresta = new Audio ('./audio/Floresta.wav')
const lareira = new Audio ('./audio/Lareira.wav')

cafeteria.loop = true
chuva.loop = true
floresta.loop = true
lareira.loop = true

export {btnPress, kitchenTimer}

const btnFloresta = document.querySelector('.ph-tree')
const btnChuva = document.querySelector('.ph-cloud-rain')
const btnCafeteria = document.querySelector('.ph-coffee')
const btnLareira = document.querySelector('.ph-fire')

btnFloresta.addEventListener('click', function() {
    btnFloresta.classList.toggle('music-on')
    btnChuva.classList.remove('music-on')
    btnCafeteria.classList.remove('music-on')
    btnLareira.classList.remove('music-on')
    if(btnFloresta.classList.contains('music-on')) {
        floresta.play()
        chuva.pause()
        cafeteria.pause()
        lareira.pause()
        state.isMute = false
    } else {
        floresta.pause()
        state.isMute = true
    }
})

btnChuva.addEventListener('click', function() {
    btnChuva.classList.toggle('music-on')
    btnFloresta.classList.remove('music-on')
    btnCafeteria.classList.remove('music-on')
    btnLareira.classList.remove('music-on')
    if(btnChuva.classList.contains('music-on')) {
        chuva.play()
        floresta.pause()
        cafeteria.pause()
        lareira.pause()
        state.isMute = false
    } else {
        chuva.pause()
        state.isMute = true
    }
})

btnCafeteria.addEventListener('click', function() {
    btnCafeteria.classList.toggle('music-on') 
    btnFloresta.classList.remove('music-on')
    btnChuva.classList.remove('music-on')
    btnLareira.classList.remove('music-on')
    if(btnCafeteria.classList.contains('music-on')) {
        cafeteria.play()
        chuva.pause()
        floresta.pause()
        lareira.pause()
        state.isMute = false
    } else {
        cafeteria.pause()
        state.isMute = true
    }
})

btnLareira.addEventListener('click', function() {
    btnLareira.classList.toggle('music-on')
    btnFloresta.classList.remove('music-on')
    btnChuva.classList.remove('music-on')
    btnCafeteria.classList.remove('music-on')
    if(btnLareira.classList.contains('music-on')) {
        lareira.play()
        chuva.pause()
        cafeteria.pause()
        floresta.pause()
        state.isMute = false
    } else {
        lareira.pause()
        state.isMute = true
    }
})