// login.js

let generatedOTP;

function sendOTP() {
  const loginInput = document.getElementById("login-input").value;
  if (!loginInput) {
    alert("Please enter your mobile number or email.");
    return;
  }
  
  // Generate a 6-digit OTP
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  alert(`OTP sent: ${generatedOTP}`); // Replace this with actual OTP sending logic via SMS/Email API
}

function verifyOTP() {
  const enteredOTP = document.getElementById("otp-input").value;
  
  if (enteredOTP === generatedOTP) {
    alert("Login successful!");
    window.location.href = "abandhucart.html";
  } else {
    alert("Incorrect OTP. Please try again.");
  }
}
