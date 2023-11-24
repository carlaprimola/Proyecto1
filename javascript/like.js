// DARLE LIKE AL CORAZON
console.log('conectado')
document.addEventListener('DOMContentLoaded', function() { //Para asegurarnos que el script se ejecuta despues de cargar el DOM
    const heartIcon = document.getElementById('heartIcon');
    const heartIcon2 = document.getElementById('heartIcon2');
    
// Forma 1
    heartIcon.addEventListener('click', function () {
        if (!heartIcon.classList.contains('red')){ 
    // Si !heartIcon.classList.contains('red') es 'true' se ejecuta el if
            heartIcon.classList.add('red');
        }else{
    //Si es 'false' la clase 'red' se elimina
            heartIcon.classList.remove('red');
        }
    });


    
//Forma 2
    heartIcon2.addEventListener('click', function () {
        heartIcon2.classList.toggle('red');
    });
});