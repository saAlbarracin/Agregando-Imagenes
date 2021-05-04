        const urlImg = document.getElementById("url-imagen");
        
        const urlImg2 = document.getElementById("url-imagen2");

        const inputFrase = document.getElementById("inputFrase"); 

        const botonAgregarImagen = document.getElementById("botonAgregar");
        const divContenedor = document.getElementById("contenedor");

            botonAgregarImagen.addEventListener("click", function () {
            const nuevaCaja = document.createElement("div");
            nuevaCaja.classList.add("card");
            const cajaFront = document.createElement("div");
            cajaFront.classList.add("card-side", "front");
            const cajaBack = document.createElement("div");
            cajaBack.classList.add("card-side", "back");

            const nuevaImg = document.createElement("img");
            const nuevaImg2 = document.createElement("img");
            const nuevaFrase = document.createElement("p");
            const nuevaFrase2 = document.createElement("p");


            nuevaFrase.textContent = inputFrase.value;
            nuevaFrase2.textContent = inputFrase.value;
            nuevaImg.src = urlImg.value;
            nuevaImg2.src = urlImg2.value;

            nuevaCaja.addEventListener("click", function(){
                this.classList.toggle("seleccionada");
            })
            cajaFront.appendChild(nuevaImg);
            cajaFront.appendChild(nuevaFrase);
        
            cajaBack.appendChild(nuevaImg2);
            cajaBack.appendChild(nuevaFrase2);
            
            nuevaCaja.appendChild(cajaFront);
            nuevaCaja.appendChild(cajaBack);
        
            divContenedor.appendChild(nuevaCaja);
            inputFrase.value = "";
            urlImg.value = "";
            urlImg2.value = "";
            
        });