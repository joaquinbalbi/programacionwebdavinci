function compararPreciosVuelos() {
    var preciosVuelos = [
        { origen: "Nueva York", destino: "París", precio: "$500" },
        { origen: "Londres", destino: "Roma", precio: "$400" },
        { origen: "Los Ángeles", destino: "Tokio", precio: "$700" }
    ];
    var vuelosHTML = "";
    preciosVuelos.forEach(function(vuelo) {
        vuelosHTML += "<li>Origen: " + vuelo.origen + ", Destino: " + vuelo.destino + ", Precio: " + vuelo.precio + "</li>";
    });
    document.getElementById("preciosVuelos").innerHTML = vuelosHTML;
}

function compararPreciosAlojamientos() {
    var preciosAlojamientos = [
        { destino: "París", tipo: "Hotel", precio: "$200/noche" },
        { destino: "Roma", tipo: "Apartamento", precio: "$150/noche" },
        { destino: "Tokio", tipo: "Hostal", precio: "$100/noche" }
        
    ];
    var alojamientosHTML = "";
    preciosAlojamientos.forEach(function(alojamiento) {
        alojamientosHTML += "<li>Destino: " + alojamiento.destino + ", Tipo: " + alojamiento.tipo + ", Precio: " + alojamiento.precio + "</li>";
    });
    document.getElementById("preciosAlojamientos").innerHTML = alojamientosHTML;
}
window.onload = function() {
    compararPreciosVuelos();
    compararPreciosAlojamientos();
};