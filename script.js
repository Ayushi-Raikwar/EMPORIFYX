document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Elephant showcase', price: 2999, image: 'product1.jpg' },
        { id: 2, name: 'Pen Holder', price: 4999, image: 'product2.jpg' },
        { id: 3, name: 'wall self', price: 1999, image: 'product3.jpg' },
        { id: 4, name: 'Waterfall showcase ', price: 3999, image: 'product4.jpg' },
    ];

    const productGrid = document.getElementById('product-grid');
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productElement);
    });

    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        cartCount.textContent = cart.length;
        alert(`${product.name} has been added to your cart.`);
    };
});
