// Hero background carousel
(function () {
  const images = [
    "src/images/kely3.jpg",
    "src/images/acupuntura.png",
    "src/images/kelyEdt1.jpg",
  ];
  let idx = 0;
  const bgDiv = document.querySelector(".hero-bg-carousel");

  function setBg() {
    bgDiv.style.backgroundImage = `url('${images[idx]}')`;
  }

  setBg(); // Inicializa com a primeira imagem

  setInterval(() => {
    idx = (idx + 1) % images.length;
    setBg(); // Troca diretamente, sem efeito
  }, 5000); // A cada 5 segundos
})();

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Fechar menu ao clicar em link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarToggler = document.getElementById("navbar-toggler");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!navbarToggler.classList.contains("collapsed")) {
      navbarToggler.click();
    }
  });
});

// Fechar menu ao clicar fora dele
document.addEventListener("click", function (event) {
  const navbarCollapse = document.querySelector("#navbarNav");
  const navbarToggler = document.querySelector("#navbar-toggler");

  if (navbarCollapse.classList.contains("show")) {
    if (
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Form submission (example)
document.querySelector("form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  this.reset();
});
