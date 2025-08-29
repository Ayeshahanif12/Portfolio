// Theme Toggle
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
