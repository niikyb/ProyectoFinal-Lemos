const cart = JSON.parse(localStorage.getItem('cart')) || []
document.getElementById('cart-total').innerHTML = cart.length

document.getElementById('show-cart').addEventListener('click', () => {
    cart.length === 0 ? (document.getElementById('cards-modal').innerHTML =
        `<div>
        El carrito está vacío
        </div>`) :
    document.getElementById('cards-modal').innerHTML = ''
    cart.forEach((product) => {
        document.getElementById('cards-modal').innerHTML += `<div>
            ${product.title} - $${product.price}
            </div>`
    })
})

let products = [
    {id: 1, title: 'Reten 22', price: 220},
    {id: 2, title: 'Reten 25', price: 270},
    {id: 3, title: 'Ruleman SFK 6201', price: 580},
    {id: 4, title: 'Ruleman SFK 6202', price: 630},
    {id: 5, title: 'Ruleman SFK 6203', price: 630},
    {id: 6, title: 'Ruleman SFK 6204', price: 970},
    {id: 7, title: 'Soporte Drean 03 04', price: 4570}
]

products.forEach((product) =>{
    let buttonId = `addToCart${product.id}`
    document.getElementById('productsCatalogue').innerHTML +=
    `<div class='productCard'>
    <p>${product.title}</p>
    <p>$${product.price}</p>
    <button type="button" id="${buttonId}" class="btn btn-primary">Agregar al Carrito</button>
    </div>`
})

products.forEach((product) => {
    let buttonId = `addToCart${product.id}`
    document.getElementById(buttonId).addEventListener('click', () => {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        document.getElementById('cart-total').innerHTML = cart.length
        console.log('Se agregó ' + product.title + ': $' + product.price + ' al carrito. Productos en carrito: ' + cart.length)
    })
})