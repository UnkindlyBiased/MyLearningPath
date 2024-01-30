let button = document.getElementById('btn')
let timer = null
button.addEventListener('click', () => {
    timer = setTimeout(() => {
        alert('Work is done')
    }, 3000)
})

let cancelButton = document.getElementById('cancel')
cancelButton.addEventListener('click', () => {
    if (timer !== null) {
        clearTimeout(timer)
    }
})

let intervalButton = document.getElementById('interval')
let counter = 0
let intervalTimer = null

intervalButton.addEventListener('click', () => {
    intervalTimer = setInterval(() => {
        let span = document.createElement('span')
        span.textContent = ++counter
        document.body.appendChild(span)
    }, 1000)
})

let clearButton = document.getElementById('clearInterval')
clearButton.addEventListener('click', () => {
    clearInterval(intervalTimer)
    alert("Interval has been cleared")
})