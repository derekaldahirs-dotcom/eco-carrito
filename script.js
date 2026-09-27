const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const participarBtn = document.getElementById("participarBtn");
const mensaje = document.getElementById("mensaje");


/* =========================
   MENÚ ACCESIBLE
========================= */

menuBtn.addEventListener("click", function () {

    const abierto = menu.classList.toggle("open");

    menuBtn.setAttribute(
        "aria-expanded",
        abierto
    );

});


/* Cerrar menú al seleccionar una opción */

const enlaces = menu.querySelectorAll("a");

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        menu.classList.remove("open");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================
   BOTÓN PARTICIPAR
========================= */

participarBtn.addEventListener("click", function () {

    mensaje.textContent =
        "¡Gracias por tu interés en Eco-Carrito Urbano! Tu participación puede ayudar a promover espacios públicos más limpios.";

});