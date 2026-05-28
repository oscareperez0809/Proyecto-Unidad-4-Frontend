// PRENSA

const containerPress =
document.getElementById("slide-container-press");

const slidesPress =
document.querySelectorAll(".press-slide");

const dotsPress =
document.querySelectorAll(".press-dot");

let indexPress = 0;

// RESPONSIVE
let slidesPerView =
window.innerWidth <= 430 ? 1 : 3;

// TOTAL GRUPOS
let totalSlides =
Math.ceil(slidesPress.length / slidesPerView);

function moverPress() {

    indexPress++;

    if(indexPress >= totalSlides){
        indexPress = 0;
    }

    containerPress.style.transform =
    `translateX(-${indexPress * 100}%)`;

    // INDICADORES
    dotsPress.forEach(dot => {
        dot.classList.remove("active");
    });

    // SOLO SI EXISTE
    if(dotsPress[indexPress]){
        dotsPress[indexPress]
        .classList.add("active");
    }

}

setInterval(moverPress, 3000);

// RESPONSIVE REAL
window.addEventListener("resize", () => {

    slidesPerView =
    window.innerWidth <= 430 ? 1 : 3;

    totalSlides =
    Math.ceil(
        slidesPress.length / slidesPerView
    );

});