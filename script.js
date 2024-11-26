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

////////////////////////////////////////////////////////

//RANDOM LOGO FLICK
const logo = document.getElementById("logo");
logo.classList.add("glow");

function randomFlicker() {
  // Probabilità del 10% che si verifichi un flicker
  if (Math.random() < 0.8) {
    // Rimuove il bagliore
    logo.classList.remove("glow");
    logo.classList.add("flicker");

    // Durata casuale del flicker tra 50 e 200 milliseconds
    const flickerDuration = Math.random() * 150 + 50;

    setTimeout(() => {
      // Ripristina il bagliore
      logo.classList.remove("flicker");
      logo.classList.add("glow");
    }, flickerDuration);
  }

  // Controlla ogni 100-300ms per un possibile flicker
  const nextCheck = Math.random() * 200 + 100;
  setTimeout(randomFlicker, nextCheck);
}

randomFlicker();
