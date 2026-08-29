// 1. Initialize EmailJS - use YOUR public key
(function() {
  emailjs.init("-TDTPVcZLgj_roJcZ"); // <-- go to EmailJS > Account > API Keys and paste it here
})();

// 2. Get form and button
const form = document.querySelector("form");
const btn = document.getElementById("submit");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // 3. Get values from your HTML ids
  const templateParams = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("Email").value, // note capital E in your HTML
    subject: document.getElementById("subject").value,
    message: document.getElementById("hjk").value
  };

  // 4. Send email
  btn.innerText = "Sending..."; // show loading
  
  emailjs.send("service_76igk3f", "template_ehzzm0i", templateParams)
  .then(function(response) {
    if(response.status === 200){
      Swal.fire({
        title: "Sent!",
        text: "Your message has been sent successfully!",
        icon: "success"
      });
      form.reset(); // clear form
      btn.innerText = "Submit";
    }
  }, function(error) {
    Swal.fire({
      title: "Error",
      text: "Failed to send. Try again.",
      icon: "error"
    });
    console.log("FAILED...", error);
    btn.innerText = "Submit";
  });
});
