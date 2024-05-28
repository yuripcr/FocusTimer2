import state from './state.js'
import * as sounds from "./sounds.js"
import * as timer from './timer.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sounds.btnPress.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.btnPress.play()
}

const displayMinutes = document.getElementById('minutes')
const displaySeconds = document.getElementById('seconds')

export function maisMinutos(){
    let minutes = Number(displayMinutes.textContent)
    let seconds = Number(displaySeconds.textContent)
    minutes += 5
    if (minutes > 60) {
        minutes = 60
        seconds = 0
    }
    timer.updateDisplay(minutes, seconds)
    sounds.btnPress.play()
}

export function menosMinutos(){
    let minutes = Number(displayMinutes.textContent)
    let seconds = Number(displaySeconds.textContent)
    minutes -= 5
    sounds.btnPress.play()
    if (minutes < 1) {
        minutes = 1
    }
    timer.updateDisplay(minutes, seconds)
}