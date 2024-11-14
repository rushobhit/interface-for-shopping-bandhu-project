// payment.js

document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    const totalPrice = sessionStorage.getItem("totalPrice");
  
    const billingItems = document.getElementById("billing-items");
    cart.forEach(item => {
      billingItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    });
    document.getElementById("billing-total-price").textContent = totalPrice;
  });
  
  function processPayment(method) {
    alert(`Payment of $${sessionStorage.getItem("totalPrice")} completed with ${method}.`);
    // Simulate sending a bill via email/SMS
    alert("Bill sent to your registered contact.");
    window.location.href = "abandhulogin.html";  // Redirect to login or thank-you page
  }
  