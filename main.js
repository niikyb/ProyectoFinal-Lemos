let cartTotal = document.getElementById('cart-total')
let productsContainer = document.getElementById('productsCatalogue')
let cartModal = document.getElementById('cards-modal')
let totalCartPrice = document.getElementById('subtotal-cart')
let showCart = document.getElementById('show-cart')
let restartCart = document.getElementById('empty-cart')
let checkout = document.getElementById('checkout')

let subtotalCart = JSON.parse(localStorage.getItem('cartTotal')) || 0

let products = []

const cart = JSON.parse(localStorage.getItem('cart')) || []
cartTotal.innerHTML = cart.length

const renderCards = async () => {
    const response = await fetch ('./products.json')
    const data = await response.json ()
    data.forEach((product) =>{
        let buttonId = `addToCart${product.id}`
        productsContainer.innerHTML +=
        `<div class='productCard'>
        <img src="${product.img}" class= "product__img">
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
            }).showToast()
        })
    })
}

renderCards ()

function addToCart (product){
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    cartTotal.innerHTML = cart.length
    console.log('Se agregó ' + product.title + ': $' + product.price + ' al carrito. Productos en carrito: ' + cart.length)
    subtotalCart = subtotalCart + product.price
    localStorage.setItem('cartTotal', JSON.stringify(subtotalCart))
}

function renderCart (){
    if (cart.length === 0){
        cartModal.innerHTML =
        `<div>
        El carrito está vacío
        </div>`
    } else {
        cartModal.innerHTML = ''
        cart.forEach((product) => {
            cartModal.innerHTML += `<div>
            ${product.title} - $${product.price}
            </div>`
        })
    }
    totalCartPrice.innerHTML = `<div>
        Total: $${subtotalCart}
        </div>`
}

showCart.addEventListener('click', () => {
    renderCart()
})

function emptyCart (){
    cart.length = []
    localStorage.setItem('cart', JSON.stringify(cart))
    cartTotal.innerHTML = cart.length
    subtotalCart = 0
    localStorage.setItem('cartTotal', JSON.stringify(subtotalCart))
    console.log ('Se vació el carrito')
}

function alertEmptyCart () {
    Toastify({
        text: '¡El carrito está vacío!',
        offset: {
            y: 50
        },
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
        }
    }).showToast()
}

restartCart.addEventListener('click', () => {
    if (cart.length === 0){
        alertEmptyCart()
    } else {
        Toastify({
            text: 'Vaciaste el carrito.',
            offset: {
                y: 50
            },
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c93d)',
            }
        }).showToast()
        emptyCart()
        renderCart()
    }
})

checkout.addEventListener('click', () => {
    if (cart.length === 0){
        alertEmptyCart()
    } else {
        Toastify({
            text: '¡Gracias por su compra!',
            offset: {
                y: 50
            },
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c93d)',
            }
        }).showToast()
        cartModal.innerHTML =
        `<div>
        ¡Gracias por su compra!
        </div>`
        emptyCart()
    }
})