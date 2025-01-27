export const products = [{
    image: "smartphones/oppoA18.jpg",
    name: "Oppo A18",
    description: "4GB RAM, 64GB Storage",
    price: 2999,
    top: "Top Sale",
},{
    image: "head/head1.jpg",
    name: "Oppo A18",
    description: "4GB RAM, 64GB Storage",
    price: 2999, 
    top: "Top Sale", 
},{
    image: "ent/ent1.jpg",
    name: "Oppo A18",
    description: "4GB RAM, 64GB Storage",
    price: 2999, 
    top: "New Arrival", 
},{
    image: "smart/smart1.jpg",
    name: "Oppo A18",
    description: "4GB RAM, 64GB Storage",
    price: 2999,
    top: "Top Sale",  
},{
    image: "lapi/lapi2.jpg",
    name: "Oppo A18",
    description: "4GB RAM, 64GB Storage",
    price: 2999,
    top: "Top Sale", 
},{
    image: "lapi/lapi1.jpg",
    name: "Oppo A18",
    description: "4GB RAM, 64GB Storage",
    price: 2999,
    top: "New Arrival",  
}];

export let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
        <div class="product">
        <span class="sale">${product.top}</span>
        <a href="products.html?id=${product.id}"><button class="buy-now">Buy Now 🛒</button></a>
        <div class="product-image"><img src="${product.image}" alt=${product.name}></div>
        <div class="info-box">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">Ksh ${product.price}</div>
        </div>
    </div>
    `
});

document.querySelector('.js-products').
innerHTML = productsHTML;