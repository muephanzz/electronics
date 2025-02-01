// Products data
const products = {
  smartphones: [
    {
      ref: "Redmi",
      image: "smartphones/oppoA18.jpg",
      name: "Redmi A1",
      description: "4GB RAM, 64GB Storage",
      price: 2999,
      top: "Top Sale",
    },{
      ref: "Oppo",
      image: "smartphones/oppoA18.jpg",
      name: "Oppo A18",
      description: "4GB RAM, 64GB Storage",
      price: 2999,
      top: "New Arrival",
    },{
      ref: "Samsung",
      image: "smartphones/oppoA18.jpg",
      name: "Samsung Galaxy",
      description: "6GB RAM, 128GB Storage",
      price: 5999,
      top: "Top Sale",
    },{
      ref: "Oppo",
      image: "smartphones/oppoA18.jpg",
      name: "Oppo A18",
      description: "4GB RAM, 64GB Storage",
      price: 2999,
      top: "New Arrival",
    },{
      ref: "Oppo",
      image: "smartphones/oppoA18.jpg",
      name: "Oppo A18",
      description: "4GB RAM, 64GB Storage",
      price: 2999,
      top: "New Arrival",
    },{
      ref: "Oppo",
      image: "smartphones/oppoA18.jpg",
      name: "Oppo A18",
      description: "4GB RAM, 64GB Storage",
      price: 2999,
      top: "New Arrival",
    },{
      ref: "Oppo",
      image: "smartphones/oppoA18.jpg",
      name: "Oppo A18",
      description: "4GB RAM, 64GB Storage",
      price: 2999,
      top: "New Arrival",
    },{
      ref: "Oppo",
      image: "smartphones/oppoA18.jpg",
      name: "Oppo A18",
      description: "4GB RAM, 64GB Storage",
      price: 2999,
      top: "New Arrival",
    },
  ],
  laptops: [
    {
      ref: "Mac",
      image: "smartphones/oppoA18.jpg",
      name: "MacBook Pro",
      description: "16GB RAM, 1TB SSD",
      price: 129999,
      top: "Top Sale",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },
  ],
  woofer: [
    {
      ref: "Mac",
      image: "smartphones/oppoA18.jpg",
      name: "MacBook Pro",
      description: "16GB RAM, 1TB SSD",
      price: 129999,
      top: "Top Sale",
    },
    {
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },
  ],
  amplifier: [
    {
      ref: "Mac",
      image: "smartphones/oppoA18.jpg",
      name: "MacBook Pro",
      description: "16GB RAM, 1TB SSD",
      price: 129999,
      top: "Top Sale",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },{
      ref: "Dell",
      image: "smartphones/oppoA18.jpg",
      name: "Dell Inspiron",
      description: "8GB RAM, 512GB SSD",
      price: 79999,
      top: "New Arrival",
    },
  ],
};

// Function to render products
export const renderProducts = (filterBrand = null) => {
  let productsHTML = "";

  // Iterate through each category of products
  Object.values(products).forEach((category) => {
    // Filter products that match the selected brand
    category
      .filter((product) => !filterBrand || product.ref === filterBrand)
      .forEach((product) => {
        productsHTML += `
          <div class="product">
            <span class="sale">${product.top}</span>
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="info-box">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <div class="price">Ksh ${product.price}</div>
            </div>
            <button class="buy-now">Add to Cart 🛒</button>
          </div>
        `;
      });
  });

  // Inject the filtered products into the container
  document.querySelector(".js-products").innerHTML = productsHTML;
};
