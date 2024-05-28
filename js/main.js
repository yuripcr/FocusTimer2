import './toggle-mode.js'
import * as FocusTimer from './focus-timer.js'
import state from './state.js'

FocusTimer.start(state.minutes, state.seconds)