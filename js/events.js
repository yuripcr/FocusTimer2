import * as actions from './actions.js'

export function registerControls(){
    const controls = document.getElementById('buttons')
    //capturando eventos de click
    controls.addEventListener('click', function(event){
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function') {
            return
        }
        actions[action]()
    })
}