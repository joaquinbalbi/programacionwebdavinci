function cargarDestinos() {
    
    var destinos = [
        { nombre: "Destino 1", imagen: "/images/images(9).jpg" },
        { nombre: "Destino 2", imagen: "/images/images(7).jpg" },
        { nombre: "Destino 3", imagen: "/images/images(8).jpg" },
        { nombre: "Destino 4", imagen: "/images/images(4).jpg" },
        { nombre: "Destino 5", imagen: "/images/images(5).jpg" },
    ];

    mostrarDestinos(destinos);
}

function mostrarDestinos(destinos) {
    var listaDestinos = document.querySelector("main ul");

    listaDestinos.innerHTML = ""; 
    destinos.forEach(function(destino) {
        var elementoLista = document.createElement("li");

        
        var imagenDestino = document.createElement("img");
        imagenDestino.src = destino.imagen;
        imagenDestino.alt = destino.nombre; 
        elementoLista.appendChild(imagenDestino);

        
        var enlaceDestino = document.createElement("a");
        enlaceDestino.textContent = destino.nombre;
        enlaceDestino.href = "#"; 
        elementoLista.appendChild(enlaceDestino);

       
        listaDestinos.appendChild(elementoLista);
    });
}


window.onload = function() {
    cargarDestinos();
};