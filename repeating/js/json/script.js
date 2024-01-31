async function getElements(number) {
    let promise = await fetch(`https://dummyjson.com/products/${number}`)
    if (promise.ok) {
        return await promise.json()
    }
}

document.getElementById('getElem').addEventListener('click', async () => {
    let data = await getElements(Math.floor(Math.random() * 100))
    let span = document.createElement('span')
    span.textContent = data.title
    document.body.appendChild(span)
})

function log(value) {
    console.log(value)
}

log('start')

setTimeout(() => {
    log('timeout')
}, 3000)

log('end')