// mbb.js

// 1. Initialize EmailJS with your Public Key
(function() {
  emailjs.init("-TDTPVcZLgj_roJcZ"); 
})();

let generatedCode = ""; // store the code

// 2. Function to generate 6 digit code
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

window.onload = function() {
  const form = document.querySelector("form");

  // 3. Send Code Button
  document.getElementById("sendCodeBtn").addEventListener("click", function() {
    const userEmail = document.getElementById("mail").value;
    if (!userEmail) {
      alert("Please enter your email first");
      return;
    }

    generatedCode = generateCode();

    const codeParams = {
      to_email: userEmail,
      passcode: generatedCode
    };

    // Use a separate EmailJS template to send the code
    emailjs.send("service_76igk3f", "template_juprsho", codeParams)
      .then(function() {
        alert("Verification code sent to " + userEmail);
      }, function(error) {
        alert("Failed to send code");
        console.error(error);
      });
  });

  // 4. Form Submit with verification check
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const enteredCode = document.getElementById("verifyCode").value;

    if (enteredCode !== generatedCode) {
      alert("Invalid verification code. Please check your email.");
      return;
    }

    // 5. Get selected gender radio button
    const gender = document.querySelector('input[name="gender"]:checked');

    // 6. Collect all form data
    const templateParams = {
      full_name: document.querySelector('input[placeholder="Enter your name"]').value,
      username: document.querySelector('input[placeholder="Enter your username"]').value,
      email: document.querySelector('input[placeholder="Enter your email"]').value,
      phone: document.querySelector('input[placeholder="Enter your number"]').value,
      whatsapp: document.querySelector('input[placeholder="Enter your Whatsapp No."]').value,
      gender: gender ? gender.nextElementSibling.innerText : ""
    };

    // 7. Send registration email
    emailjs.send("service_76igk3f", "template_juprsho", templateParams)
      .then(function(response) {
        alert("Registration submitted successfully!");
        form.reset(); 
        generatedCode = ""; // reset code
      }, function(error) {
        alert("Failed to submit. Check console for details.");
        console.error("FAILED...", error);
      });
  });
};
