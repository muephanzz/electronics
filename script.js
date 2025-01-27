import { products, productsHTML } from "./products.js";

const slideshow = [
    {
      image: 'smartphones/home1.webp',
      description: 'Big Sale on Smartphones! Up to 30% Off',
      button: 'Shop Now'
    },
    {
      image: 'smartphones/home2.webp',
      description: 'Limited Time Offer: Buy Laptops and Save More!',
      button: 'Shop Now'
    },
    {
      image: 'smartphones/home1.webp',
      description: 'Exclusive Deals on Smart Home Devices!',
      button: 'Shop Now'
    }];
  
let slideshowHTML = '';
  
  slideshow.forEach((slide) => {
    slideshowHTML += `
        <div class="slider-item">
          <img src="${slide.image}" alt="Featured Product 1">
          <p>${slide.description}</p>
        </div>
    `;
  });
  
  document.querySelector('.hero-slider').innerHTML = slideshowHTML;
  
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slider-item');
  
function showSlide(index) {
    const totalSlides = slides.length;
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000);


const dropdown = [{
    category: "smartphones",
    image: "smartphones/oppoA18.jpg",
    type1: "Redmi",
    type2: "Oppo",
    type3: "Samsung",
    type4: "Techno"
  },{
    category: "Laptop",
    image: "smartphones/oppoA18.jpg",
    type1: "Mac",
    type2: "Lenovo",
    type3: "Hp",
    type4: "Dell" 
  },{
    category: "Television",
    image: "smartphones/oppoA18.jpg",
    type1: "Samsung",
    type2: "Hisense",
    type3: "Vitron",
    type4: "LG" 
  },{
    category: "Amplifiers",
    image: "smartphones/oppoA18.jpg",
    type1: "Amtec",
    type2: "Vitron",
    type3: "Nunix",
    type4: "Neon" 
  },{
    category: "Woofer",
    image: "smartphones/oppoA18.jpg",
    type1: "Amtec",
    type2: "Vitron",
    type3: "Nunix",
    type4: "Neon" 
  },{
    category: "Home",
    image: "smartphones/oppoA18.jpg",
    type1: "Amtec",
    type2: "Vitron",
    type3: "Nunix",
    type4: "Neon" 
  }
]

let dropdownHTML = '';

dropdown.forEach((category) => {
  dropdownHTML += `
      <div class="column">
      <h3>${category.category}</h3>
      <a href="#${category.type1}">${category.type1}</a>
      <a href="#">${category.type2}</a>
      <a href="#">${category.type3}</a>
      <a href="#">${category.type4}</a>
      </div>
  `;
})


const cmenu = document.querySelector('.menu-icon');
const menu = document.querySelector('.dropbtn');
const categoryMenus = document.querySelector('.category-menus');

document.querySelector('.js-dropdown').
innerHTML = dropdownHTML;



cmenu.addEventListener('click', () => {
    categoryMenus.classList.toggle('show');
  });
  menu.addEventListener('click', () => {
    categoryMenus.classList.toggle('show');
  });