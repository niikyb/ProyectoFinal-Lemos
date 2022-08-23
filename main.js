let subtotalCart = JSON.parse(localStorage.getItem('cartTotal')) || 0

const cart = JSON.parse(localStorage.getItem('cart')) || []
document.getElementById('cart-total').innerHTML = cart.length

function renderCart (){
    if (cart.length === 0){
        (document.getElementById('cards-modal').innerHTML =
        `<div>
        El carrito está vacío
        </div>`)
    } else {
        document.getElementById('cards-modal').innerHTML = ''
        cart.forEach((product) => {
            document.getElementById('cards-modal').innerHTML += `<div>
            ${product.title} - $${product.price}
            </div>`
        })
    }
    document.getElementById('subtotal-cart').innerHTML = `<div>
        Total: $${subtotalCart}
        </div>`
}

document.getElementById('show-cart').addEventListener('click', () => {
    renderCart()
})

const renderCards = async () => {
    const response = await fetch ('./products.json')
    const data = await response.json ()

    data.forEach((product) =>{
        let buttonId = `addToCart${product.id}`
        document.getElementById('productsCatalogue').innerHTML +=
        `<div class='productCard'>
        <p>${product.title}</p>
        <p>$${product.price}</p>
        <button type="button" id="${buttonId}" class="btn btn-primary">Agregar al Carrito</button>
        </div>`
        products.push (product)
    })
    data.forEach((product) => {
        let buttonId = `addToCart${product.id}`
        document.getElementById(buttonId).addEventListener('click', () => {
            addToCart(product)
            Toastify({
                text: 'Agregaste ' + product.title + ' al carrito.',
                offset: {
                    y: 50
                },
                style: {
                    background: 'linear-gradient(to right, #00b09b, #96c93d)',
                }
                }).showToast();
        })
    })
}

renderCards ()

function addToCart (product){
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    document.getElementById('cart-total').innerHTML = cart.length
    console.log('Se agregó ' + product.title + ': $' + product.price + ' al carrito. Productos en carrito: ' + cart.length)
    subtotalCart = subtotalCart + product.price
    localStorage.setItem('cartTotal', JSON.stringify(subtotalCart))
}