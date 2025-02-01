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
    },
    {
      ref: "Oppo",
      image: "smartphones/oppoA18.jpg",
      name: "Oppo A18",
      description: "4GB RAM, 64GB Storage",
      price: 2999,
      top: "New Arrival",
    },
    {
      ref: "Samsung",
      image: "smartphones/oppoA18.jpg",
      name: "Samsung Galaxy",
      description: "6GB RAM, 128GB Storage",
      price: 5999,
      top: "Top Sale",
    }
  ],
  laptops: [
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
    }
  ],
  woofer: [
    {
      ref: "Sony",
      image: "smartphones/oppoA18.jpg",
      name: "Sony Woofer",
      description: "500W Sound System",
      price: 19999,
      top: "Top Sale",
    }
  ],
  amplifier: [
    {
      ref: "Yamaha",
      image: "smartphones/oppoA18.jpg",
      name: "Yamaha Amplifier",
      description: "Professional Audio Amplifier",
      price: 34999,
      top: "Top Sale",
    }
  ]
};

// Function to render products
export const renderProducts = (filterBrand = null) => {
  let productsHTML = "";
  let flashSalesHTML = "";

  // Iterate through each category of products
  Object.values(products).forEach((category) => {
    category.forEach((product) => {
      const productHTML = `
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

      // Add to Flash Sales section if it's a "Top Sale" or "New Arrival"
      if (product.top === "Top Sale" || product.top === "New Arrival") {
        flashSalesHTML += productHTML;
      }

      // Add to Products list for normal products
      productsHTML += productHTML;
    });
  });

  // Inject the filtered products into the containers
  document.querySelector(".js-flash-sales").innerHTML = flashSalesHTML;
  document.querySelector(".js-products").innerHTML = productsHTML;
};

// View More and See Less functionality
let currentProductCount = 6; // Show first 6 products initially

export const toggleViewMore = () => {
  const allProducts = document.querySelectorAll(".js-products .product");
  const seeLessBtn = document.querySelector(".js-see-less");
  const viewMoreBtn = document.querySelector(".js-view-more");

  // Show more products
  if (currentProductCount === 6) {
    currentProductCount = allProducts.length;
    viewMoreBtn.style.display = "none";
    seeLessBtn.style.display = "inline-block";
  } else {
    currentProductCount = 6;
    viewMoreBtn.style.display = "inline-block";
    seeLessBtn.style.display = "none";
  }

  // Toggle visibility based on the current count
  allProducts.forEach((product, index) => {
    if (index < currentProductCount) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(); // Render all products on page load
  toggleViewMore(); // Initialize View More functionality
});
