import { renderProducts } from "./products.js";

const slideshow = [
  {
    image: "smartphones/home1.webp",
    description: "Big Sale on Smartphones! Up to 30% Off",
    button: "Shop Now",
  },
  {
    image: "smartphones/home2.webp",
    description: "Limited Time Offer: Buy Laptops and Save More!",
    button: "Shop Now",
  },
  {
    image: "smartphones/home1.webp",
    description: "Exclusive Deals on Smart Home Devices!",
    button: "Shop Now",
  },
];

// Generate slideshow
let slideshowHTML = "";
slideshow.forEach((slide) => {
  slideshowHTML += `
    <div class="slider-item">
      <img src="${slide.image}" alt="Featured Product">
      <p>${slide.description}</p>
    </div>
  `;
});

document.querySelector(".hero-slider").innerHTML = slideshowHTML;

let currentIndex = 0;
const slides = document.querySelectorAll(".slider-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);

// Dropdown categories
const dropdown = [
  {
    category: "smartphones",
    type1: "Redmi",
    type2: "Oppo",
    type3: "Samsung",
    type4: "Techno",
  },{
    category: "laptops",
    type1: "Mac",
    type2: "Lenovo",
    type3: "Hp",
    type4: "Dell",
  },{
    category: "laptops",
    type1: "Mac",
    type2: "Lenovo",
    type3: "Hp",
    type4: "Dell",
  },{
    category: "laptops",
    type1: "Mac",
    type2: "Lenovo",
    type3: "Hp",
    type4: "Dell",
  },{
    category: "laptops",
    type1: "Mac",
    type2: "Lenovo",
    type3: "Hp",
    type4: "Dell",
  },{
    category: "laptops",
    type1: "Mac",
    type2: "Lenovo",
    type3: "Hp",
    type4: "Dell",
  }
];

let dropdownHTML = "";
dropdown.forEach((category) => {
  dropdownHTML += `
    <div class="column">
      <h3>${category.category}</h3>
      <a href="#" data-brand="${category.type1}">${category.type1}</a>
      <a href="#" data-brand="${category.type2}">${category.type2}</a>
      <a href="#" data-brand="${category.type3}">${category.type3}</a>
      <a href="#" data-brand="${category.type4}">${category.type4}</a>
    </div>
  `;
});

document.querySelector(".js-dropdown").innerHTML = dropdownHTML;

// Toggle dropdown menu
const cmenu = document.querySelector(".menu-icon");
const menu = document.querySelector(".dropbtn");
const categoryMenus = document.querySelector(".category-menus");

cmenu.addEventListener("click", () => {
  categoryMenus.classList.toggle("show");
});
menu.addEventListener("click", () => {
  categoryMenus.classList.toggle("show");
});

// Add event listeners to dropdown links
document.querySelectorAll(".js-dropdown a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const brand = event.target.getAttribute("data-brand");
    renderProducts(brand);
  });
});

// Render all products by default
renderProducts();
