const mobileMenu = document.getElementById("mobile-menu");
const slideBtn = document.getElementById("slide-btn");

slideBtn.addEventListener("click", (event) => {
  mobileMenu.classList.toggle("ml-[0%]");
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  const isOpen = mobileMenu.classList.contains("ml-[0%]");

  if (isOpen && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.remove("ml-[0%]");
  }
});

const topSellers = [
  { name: "Premium Basmati", price: 1500, img: "basmati.png" },
  { name: "Organic Cumin", price: 800, img: "cummin.png" },
  { name: "Red Lentils", price: 600, img: "lentis.png" },
  { name: "Fresh Goat", price: 2500, img: "goat.png" },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart(index) {
  cart.push(topSellers[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

const grid = document.getElementById("product-grid");

function renderProducts() {
  grid.innerHTML = "";

  topSellers.forEach((product, index) => {
    grid.innerHTML += `
   <div class="bg-white p-4 rounded-xl shadow-md ">
     <img src="./image/${product.img}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg mb-4 ">
     <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
     <p class="text-green-600 font-bold mb-4">₹${product.price}</p>
     <button onclick="addCart(${index})" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">Add to Cart</button>
   </div>
 `;
  });
}

function updateCartCount() {
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    // It reads the length of the array we got from localStorage at the top
    countElement.innerText = cart.length;
  }
}

// Run these when the page first opens
renderProducts();
updateCartCount();


