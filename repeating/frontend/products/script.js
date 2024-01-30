async function getProducts() {
    let data = null
    const promise = await fetch('https://dummyjson.com/products?limit=15')
    if (promise.ok) {
        data = await promise.json()
    }
    return data
}

function drawProduct(product) {
    let div = document.createElement('div')
    div.classList.add('product-item')

    let img = document.createElement('img')
    img.src = product.thumbnail

    let title = document.createElement('span')
    title.classList.add('title')
    title.textContent = product.title

    let descritpion = document.createElement('span')
    descritpion.classList.add('description')
    descritpion.textContent = product.description

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(descritpion)

    document.querySelector('.products').appendChild(div)
}

getProducts().then((data) => {
    console.log(data)
    data.products.forEach(element => {
        drawProduct(element)
    });
})