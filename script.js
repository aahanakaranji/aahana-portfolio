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

tsParticles.load("fireworks-container", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 0 },
    color: { value: ["#a00808", "#0000ff", "#333", "#a00808", "#2a2a2a"] },
    shape: { type: "circle" },
    opacity: {
      value: 1,
      animation: { enable: true, minimumValue: 0, speed: 3, sync: false },
    },
    size: {
      value: { min: 2, max: 5 },
    },
    move: {
      enable: true,
      gravity: { enable: true, acceleration: 9.81 },
      speed: { min: 10, max: 25 },
      decay: 0.05,
      direction: "none",
      outModes: { default: "destroy" },
    },
  },
  emitters: [
    {
      direction: "top",
      rate: { delay: 0.2, quantity: 4 },
      position: { x: 25, y: 100 },
    },
    {
      direction: "top",
      rate: { delay: 0.25, quantity: 4 },
      position: { x: 50, y: 100 },
    },
    {
      direction: "top",
      rate: { delay: 0.2, quantity: 4 },
      position: { x: 75, y: 100 },
    },
  ],
});
