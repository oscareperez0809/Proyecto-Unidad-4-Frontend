//carussel movil

const carouselSlides =
document.querySelectorAll(".carousel-slide");

const indicators =
document.querySelectorAll(".slide-indicator");

if(carouselSlides.length > 0){

    // SI ES MOVIL
    if(window.innerWidth <= 430){

        carouselSlides.forEach(slide => {

            slide.style.minWidth = "100%";

        });
    }
}
