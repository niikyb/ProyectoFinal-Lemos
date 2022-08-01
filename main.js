const cart = []
let subtotalCart = 0

let products = [
    {id: 1, title: 'Reten 22', price: 220},
    {id: 2, title: 'Reten 25', price: 270},
    {id: 3, title: 'Ruleman SFK 6201', price: 580},
    {id: 4, title: 'Ruleman SFK 6202', price: 630},
    {id: 5, title: 'Ruleman SFK 6203', price: 630},
    {id: 6, title: 'Ruleman SFK 6204', price: 970},
    {id: 7, title: 'Soporte Drean 03 04', price: 4570}
]

function deleteFromCart(productId) {
    const index = cart.findIndex((product) => product.id === productId)
    if(index != -1){
        cart.splice(index,1)
        console.log('Se eliminó el producto del carrito')
        alert('Eliminaste el producto del carrito. Productos en carrito: ' + cart.length)
    }
}

products.forEach((product) =>{
    let buttonId = `addToCart${product.id}`
    document.getElementById('productsCatalogue').innerHTML +=
    `<div class='productCard'>
    <p>${product.title}</p>
    <p>$${product.price}</p>
    <button type="button" id="${buttonId}" class="btn btn-primary">Agregar al Carrito</button>
    </div>`
}
)

products.forEach((product) => {
    let buttonId = `addToCart${product.id}`
    document.getElementById(buttonId).addEventListener('click', () => {
        subtotalCart = subtotalCart + product.price
        cart.push(product)
        console.log('Se agregó ' + product.title + ': $' + product.price + ' al carrito. Productos en carrito: ' + cart.length)
        console.log('Total del carrito: $' + subtotalCart)
    })
})

let search = document.getElementById('searchInput')

search.addEventListener("input", e => {
    let value = e.target.value.toLowerCase()
    let searchResult = products.filter((product) => product.title.toLowerCase().includes(value))
    console.log(value)
    console.log(searchResult)
})