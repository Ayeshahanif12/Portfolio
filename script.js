// Theme Toggle (already in your code)
const btn = document.getElementById("theme-toggle");
const body = document.body;
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle hamburger icon (bars <-> x)
  const icon = hamburger.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


// Page Load Animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Book Open/Close
document.querySelectorAll(".book").forEach(book => {
  book.addEventListener("click", () => {
    book.classList.toggle("open");
  });
});

// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

