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

gsap.from("#hero h1", {
  duration: 1.5,
  y: -30,
  opacity: 0,
  ease: "power2.out",
  delay: 0.6,
});

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

window.addEventListener("load", function () {
  gsap.utils.toArray("section h2").forEach((heading) => {
    gsap.from(heading, {
      duration: 1,
      scrambleText: {
        text: heading.parentElement.querySelector("h2").textContent,
        chars: "AAHANA KARANJI",
        revealDelay: 0.5,
        speed: 0.3,
      },
      scrollTrigger: {
        trigger: heading,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });
  });
  gsap.from("#about strong", {
    duration: 2,
    y: -40,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart none restart none",
    },
  });
});

setInterval(() => {
  const logo = document.querySelector(".logo");
  gsap.to(logo, {
    duration: 0.8,
    scrambleText: {
      text: "AAHANA KARANJI",
      chars: "AAHANA KARANJI",
    },
  });
}, 8000);
