window.addEventListener("DOMContentLoaded", () => {
  const retangulo = document.querySelector(".retangulo");
  const banner1 = document.querySelector(".banner1");

  // Altura combinada do retângulo + banner
  const bannerEnd = banner1.offsetTop + banner1.offsetHeight;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Começa a fadear só depois que passar do fim do banner
    if (scrollY < bannerEnd) {
      retangulo.style.opacity = 1;
      banner1.style.opacity = 1;
    } else {
      const fadeStart = bannerEnd;         // ponto onde começa o fade
      const fadeRange = 200;               // distância em que o fade acontece
      const fadeProgress = Math.min((scrollY - fadeStart) / fadeRange, 1);
      const opacity = 1 - fadeProgress;

      retangulo.style.opacity = opacity;
      banner1.style.opacity = opacity;
    }
  });
});
