let darkMode = true;
const toggle = document.getElementById('toggle-mode')

toggle.addEventListener('click', function(event){
    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'light' : 'dark'
    
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})