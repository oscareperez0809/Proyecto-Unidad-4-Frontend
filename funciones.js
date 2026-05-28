
  $(function () {
    $(".rslides").responsiveSlides({
      auto: true,
      speed: 800,
      timeout: 4000,
      nav: true,
      pager: true

    });

  });


// PRENSA
const containerPress = document.getElementById("slide-container-press");
const dotsPress = document.querySelectorAll(".press-dot");

let indexPress = 0;

// 3 grupos:
// 1-3
// 4-6
// 7-9
const totalSlides = 3;

function moverPress() {

  indexPress++;

  if(indexPress >= totalSlides){
    indexPress = 0;
  }

  // mover grupos completos
  containerPress.style.transform =
    `translateX(-${indexPress * 100}%)`;

  // quitar active
  dotsPress.forEach(dot => {
    dot.classList.remove("active");
  });

  // activar indicador correcto
  dotsPress[indexPress].classList.add("active");
}
setInterval(moverPress, 3000);

//FORMULARIO
const form = document.getElementById("formulario");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let asunto = document.getElementById("asunto").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        // VALIDAR NOMBRE
        if(nombre === ""){
            alert("Enter your name");
            return;
        }

        const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

        if(!regexNombre.test(nombre)){
            alert("Invalid name");
            return;
        }

        // VALIDAR CORREO
        if(correo === ""){
            alert("Enter your email");
            return;
        }

        const regexCorreo =
        /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/;

        if(!regexCorreo.test(correo)){
            alert("Invalid email");
            return;
        }

        // VALIDAR ASUNTO
        if(asunto === ""){
            alert("Enter the subject");
            return;
        }

        // VALIDAR MENSAJE
        if(mensaje === ""){
            alert("Enter your message");
            return;
        }

        alert("Form sent successfully");

        form.reset();

    });

}

// MODAL

const modal = document.getElementById("modal");
const abrir = document.getElementById("abrirModal");
const cerrar = document.getElementById("cerrarModal");

if(modal && abrir && cerrar){

    // ABRIR MANUAL
    abrir.addEventListener("click", function () {

        modal.classList.add("show");

        // cerrar automático después de 5 segundos
        setTimeout(function(){

            modal.classList.remove("show");

        }, 5000);

    });

    // CERRAR SOLO CON X
    cerrar.addEventListener("click", function () {

        modal.classList.remove("show");

    });

    // ABRIR AUTOMÁTICO
    setTimeout(function(){

        modal.classList.add("show");

        // CERRAR AUTOMÁTICO
        setTimeout(function(){

            modal.classList.remove("show");

        }, 5000);

    }, 3000);

}

//sandwich movil

const hamburguesa = document.querySelector(".hamburguesa");
const opciones = document.querySelector(".opciones");

if(hamburguesa && opciones){

    hamburguesa.addEventListener("click", function(){

        opciones.classList.toggle("show");

    });

}

//animaciones WOW
$(function () {
  new WOW().init();
});

//parallax con jaula
window.addEventListener("scroll", () => {
  const img = document.querySelector(".formas");
  const section = document.querySelector(".jaula");

  if (!img || !section) return;

  const rect = section.getBoundingClientRect();

  // solo cuando está en pantalla
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const speed = 0.2;

    img.style.transform = `translateY(${rect.top * speed}px)`;
  }
});

//acordeon 
$(document).ready(function(){

  $(".lista-valores li").click(function(){

    // quitar activo
    $(".lista-valores li").removeClass("activo");

    // activar actual
    $(this).addClass("activo");

    // obtener info
    let texto = $(this).data("info");

    // cambiar contenido derecha
    $(".contenido-valor")
      .hide()
      .html(texto)
      .fadeIn(400);

  });

});