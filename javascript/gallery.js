const buttons = document.querySelectorAll("[data-carousel-button]")
//Utiliza document.querySelectorAll para seleccionar todos los elementos con el atributo data-carousel-button.

buttons.forEach(button => {
    button.addEventListener("click", () =>{
//Añade un evento de clic a cada botón seleccionado.
        const offset = button.dataset.carouselButton === "next" ? 1: -1
// Determina la dirección del desplazamiento (siguiente o anterior) según el valor del atributo data-carousel-button del botón.
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
//Encuentra el contenedor de diapositivas más cercano al botón y luego encuentra el contenedor de todas las diapositivas dentro de ese contenedor.
        const activeSlide = slides.querySelector("[data-active]")
////Encuentra la diapositiva activa actual dentro del contenedor de diapositivas.
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
//Calcula el índice de la nueva diapositiva en base al índice actual de la diapositiva activa y el desplazamiento.
        if (newIndex < 0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex = 0
//Asegura que el nuevo índice esté dentro de los límites válidos.
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
//Establece la nueva diapositiva como activa y elimina la activación de la diapositiva actual.
    })
})