// --- SCROLL REVEAL EFFECT ---
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();



// --- BEFORE / AFTER SLIDER LOGIC ---
const beforeBtn = document.getElementById("beforeBtn");
const afterBtn = document.getElementById("afterBtn");
const beforeImg = document.getElementById("beforeImg");
const afterImg = document.getElementById("afterImg");

beforeBtn.addEventListener("click", () => {
  beforeImg.style.opacity = 1;
  afterImg.style.opacity = 0;
});

afterBtn.addEventListener("click", () => {
  beforeImg.style.opacity = 0;
  afterImg.style.opacity = 1;
});



// --- SMOOTH SCROLL FOR NAV LINKS ---
const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});



// --- HERO TEXT FADE-IN ---
window.onload = () => {
  document.querySelector(".hero-title").classList.add("show");
  document.querySelector(".hero-subtitle").classList.add("show");
};
