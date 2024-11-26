//HOMEPAGE SCROLL
document.querySelectorAll("#vertical-nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Scrolla alla sezione selezionata
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

//////////////////////////////////////////////////////

//SECTION COLOR CHANGE
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("#vertical-nav ul li a");
const progressBar = document.getElementById("progress-bar");

// Aggiorna la barra laterale in base alla sezione attiva
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 50; // Offset per header fisso
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      // Aggiungi classe "active" al link corrispondente
      links.forEach((link) => link.classList.remove("active"));
      links[index].classList.add("active");
    }
  });
});

//ANIMAZIONE HOMEPAGE
document.addEventListener("DOMContentLoaded", () => {
  // Seleziona il contenuto principale
  const homeContent = document.querySelector(".home-content");

  // Animazione con GSAP
  gsap.to(homeContent, {
    opacity: 1, // Appare gradualmente
    duration: 3, // Durata dell'animazione
    ease: "power2.out", // Rallenta dolcemente alla fine
  });
});
