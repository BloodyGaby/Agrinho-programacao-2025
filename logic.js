const retangulo = document.querySelector(".retangulo");
const banner1 = document.querySelector(".banner1");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const fadeMax = 300; // altura máxima do fade out
  let opacity = 1 - Math.min(scrollY / fadeMax, 1);

  // Aplica opacidade suave e proporcional
  retangulo.style.opacity = opacity;
  banner1.style.opacity = opacity;
});
