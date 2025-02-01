import { renderProducts, toggleViewMore } from "./products.js";

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
    types: ["Redmi", "Oppo", "Samsung", "Techno"],
  },
  {
    category: "laptops",
    types: ["Mac", "Lenovo", "Hp", "Dell"],
  },
];

let dropdownHTML = "";
dropdown.forEach(({ category, types }) => {
  dropdownHTML += `
    <div class="column">
      <h3>${category}</h3>
      ${types.map((type) => `<a href="#" data-brand="${type}">${type}</a>`).join("")}
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

document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".menus");
  
  if (menuIcon) {
      menuIcon.addEventListener("click", function () {
          sidebar.classList.toggle("active");
      });
  }

  // Dropdown Toggle
  const dropdownTrigger = document.querySelector(".category-dropdown");
  const dropdownMenu = document.querySelector(".category-menus");

  if (dropdownTrigger && dropdownMenu) {
      dropdownTrigger.addEventListener("click", function () {
          dropdownMenu.classList.toggle("show");
      });
  }

  // Cart Bounce Animation
  const cartIcon = document.querySelector(".cart-icon");
  function animateCart() {
      if (cartIcon) {
          cartIcon.classList.add("bounce");
          setTimeout(() => cartIcon.classList.remove("bounce"), 500);
      }
  }

  // Simulate Cart Update (for testing)
  setTimeout(animateCart, 2000);
});