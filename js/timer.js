import state from "./state.js"
import * as sounds from "./sounds.js"

const displayMinutes = document.getElementById('minutes')
const displaySeconds = document.getElementById('seconds')

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
           //se for null pega do state
    seconds = seconds ?? state.seconds

    displayMinutes.textContent = String(minutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
}

export function countdown(){

    clearTimeout(state.countdownId)

    if(!state.isRunning){
        return
    }

    let minutes = Number(displayMinutes.textContent)
    let seconds = Number(displaySeconds.textContent)

    seconds--
    if(seconds < 0){
        seconds = 59
        minutes--
    }
    if(minutes < 0) {
        state.isRunning = false
        document.documentElement.classList.remove('running')
        updateDisplay()
        sounds.kitchenTimer.play()
        return
    }
    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
}