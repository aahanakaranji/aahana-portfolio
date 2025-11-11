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
      direction: "none",
      rate: { delay: 0.2, quantity: 4 },
      position: { x: 60, y: 70 },
      life: {
        count: 30,
        duration: 0.1,
      },
    },
    {
      direction: "none",
      rate: { delay: 0.25, quantity: 4 },
      position: { x: 70, y: 70 },
      life: {
        count: 30,
        duration: 0.1,
      },
    },
    {
      direction: "none",
      rate: { delay: 0.2, quantity: 4 },
      position: { x: 80, y: 70 },
      life: {
        count: 30,
        duration: 0.1,
      },
    },
  ],
});
