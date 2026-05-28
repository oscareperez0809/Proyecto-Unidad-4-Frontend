function autoplayCarousel() {

  const carouselEl = document.getElementById("carousel");
  const slideContainerEl = document.getElementById("slide-container");
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".slide-indicator");

  // ❌ seguridad: evita romper si no existe nada
  if (!slideContainerEl || slides.length === 0) return;

  let currentIndex = 0;

  // MOSTRAR 2 CARDS POR VEZ
  const slidesPerView = 2;

  // TOTAL DE GRUPOS
  const totalGroups = Math.ceil(slides.length / slidesPerView);

  // ANCHO DE UN SLIDE
  let slideWidth = slides[0].offsetWidth;

  // FUNCIÓN DE NAVEGACIÓN
  function navigate(groupIndex) {

    currentIndex = groupIndex;

    slideContainerEl.scrollLeft =
      groupIndex * (slideWidth * slidesPerView);

    // ACTIVAR INDICADORES CON SEGURIDAD
    indicators.forEach(ind => ind.classList.remove("active"));

    if (indicators[groupIndex]) {
      indicators[groupIndex].classList.add("active");
    }
  }

  // CLICK EN INDICADORES
  indicators.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(index);
    });
  });

  // AUTOPLAY
  function autoplay() {

    currentIndex++;

    if (currentIndex >= totalGroups) {
      currentIndex = 0;
    }

    navigate(currentIndex);
  }

  let interval = setInterval(autoplay, 3000);

  // PAUSAR EN HOVER
  slideContainerEl.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  // REANUDAR
  slideContainerEl.addEventListener("mouseleave", () => {
    interval = setInterval(autoplay, 3000);
  });

  // RESPONSIVE
  window.addEventListener("resize", () => {
    slideWidth = slides[0].offsetWidth;
  });

}

autoplayCarousel();


/*BOTÓN IR ARRIBA*/

const btnTop = document.getElementById("btnTop");

if (btnTop) {

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}
