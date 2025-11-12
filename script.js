function showForm() {
  const dialog = document.getElementById("signupDialog");
  if (dialog) {
    dialog.showModal();
  }
}

function closeForm() {
  const dialog = document.getElementById("signupDialog");
  if (dialog) {
    dialog.close();
  }
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");

  const expanded = hamburger.classList.contains("open");
  hamburger.setAttribute("aria-expanded", expanded);
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".curtain-left", {
  x: "-100%",
  duration: 1.5,
  ease: "power2.inOut",
});

gsap.to(".curtain-right", {
  x: "100%",
  duration: 1.5,
  ease: "power2.inOut",
});
