// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (name && email && message) {
    status.innerHTML = "✅ Thank you, " + name + "! Your message has been sent.";
    status.style.color = "green";
    this.reset();
  } else {
    status.innerHTML = "⚠️ Please fill out all fields.";
    status.style.color = "red";
  }
});