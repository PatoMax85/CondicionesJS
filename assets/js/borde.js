
  let imagen = document.querySelector(".imagen_futuro")

    imagen.addEventListener("click", function() {
        if (imagen.style.border == 'none'){
            imagen.style.border = 'red solid 2px';
        } else {
            imagen.style.border = 'none';
        }
    })