// Init AOS
AOS.init({
  duration: 1000,
  once: true
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// ===== SCROLL PROGRESS =====
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progressBar").style.width = (scrollTop / height) * 100 + "%";
});

// ===== TYPING EFFECT =====
const words = ["Java Developer", "Creative Coder"];
let i = 0, j = 0, current = "", deleting = false;

function typeEffect() {
  current = words[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!deleting && j < current.length) {
    j++;
  } else if (deleting && j > 0) {
    j--;
  } else {
    deleting = !deleting;
    if (!deleting) i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, deleting ?  150 : 120);
}
typeEffect();

// ===== BACK TO TOP =====
const btn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ===== PRELOADER =====
window.addEventListener("load", () => {
  document.getElementById("preloader").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 500);
});


// ===== MAGNETIC BUTTON EFFECT =====
document.querySelectorAll(".btn-glow").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "flex" : "none";
});

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
});

