// mbb.js

// 1. Initialize EmailJS with your Public Key
(function() {
  emailjs.init("-TDTPVcZLgj_roJcZ"); // <-- replace with your EmailJS public key
})();

// 2. Attach event listener to the form
window.onload = function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    // 3. Get selected gender radio button
    const gender = document.querySelector('input[name="gender"]:checked');

    // 4. Collect all form data
    const templateParams = {
      full_name: document.querySelector('input[placeholder="Enter your name"]').value,
      username: document.querySelector('input[placeholder="Enter your username"]').value,
      email: document.querySelector('input[placeholder="Enter your email"]').value,
      phone: document.querySelector('input[placeholder="Enter your number"]').value,
      whatsapp: document.querySelector('input[placeholder="Enter your Whatsapp No."]').value, // <-- FIXED
      gender: gender ? gender.nextElementSibling.innerText : "" // gets "Male", "Female", "Prefer not to say"
    };

    // 5. Send email using EmailJS
      emailjs.send("service_76igk3f", "template_juprsho", templateParams);
      .then(function(response) {
        alert("Registration submitted successfully!");
        form.reset(); // clear form
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("Failed to submit. Check console for details.");
        console.error("FAILED...", error);
      });
  });
};
