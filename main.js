const cart = []

const products = [
    {id: 1, title: 'Retén 22', price: 220},
    {id: 2, title: 'Retén 25', price: 270},
    {id: 3, title: 'Ruleman SFK 6201', price: 580},
    {id: 4, title: 'Ruleman SFK 6202', price: 630},
    {id: 5, title: 'Ruleman SFK 6203', price: 630},
    {id: 6, title: 'Ruleman SFK 6204', price: 970},
    {id: 7, title: 'Soporte Drean 03 04', price: 4570}
]

function addToCart(product){
    cart.push(product)
    console.log('Se agregó ' + product.title + ': $' + product.price + ' al carrito')
    alert('Agregaste ' + product.title + ': $' + product.price + ' al carrito. Productos en carrito: ' + cart.length)
}

function deleteFromCart(productId) {
    const index = cart.findIndex((product) => product.id === productId)
    if(index != -1){
        cart.splice(index,1)
        console.log('Se eliminó el producto del carrito')
        alert('Eliminaste el producto del carrito. Productos en carrito: ' + cart.length)
    }
}

function search(){
    let search = prompt('Buscar productos')
    const searchResult = products.filter((product) => product.title.includes(search))
    console.log(searchResult)
} 

console.log('Cantidad de productos en carrito: ' + cart.length)
console.log(cart)

products.forEach((product) =>{
    document.getElementById('productsCatalogue').innerHTML +=
    `<div class='productCard'>
    <p>${product.title}</p>
    <p>$${product.price}</p>
    <button>Agregar al Carrito</button>
    </div>`
    }
)

document.getElementById('navBar').innerHTML = `<input placeholder="Buscar productos"> </input> <button>Buscar</button>`