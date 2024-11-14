// cart.js

let cart = [];
let totalPrice = 0;

function scanBarcode(barcode) {
  // Simulated API call for item details
  const item = {
    id: barcode,
    name: `Item ${barcode}`,
    price: Math.floor(5 + Math.random() * 20)
  };
  
  addToCart(item);
}

function addToCart(item) {
  cart.push(item);
  totalPrice += item.price;

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function proceedToPayment() {
  sessionStorage.setItem("cart", JSON.stringify(cart));
  sessionStorage.setItem("totalPrice", totalPrice);
  window.location.href = "abandhupayment.html";
}
