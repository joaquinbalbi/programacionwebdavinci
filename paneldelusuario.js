
function cargarDatosUsuario() {
    
    var datosUsuario = {
        nombre: "Usuario",
        email: "usuario@gmail.com",
        numero: "12345678934",
        reservas: [
            { destino: "París", fecha: "2024-07-15", tipo: "Hotel" },
            { destino: "Nueva York", fecha: "2024-08-20", tipo: "Vuelo" }
            
        ],
        preferenciasViaje: {
            destinoPreferido: "Tokio",
            duracionPreferida: "1 semana",
            tipoAlojamiento: "Hotel de lujo"
            
        }
    };

    document.getElementById("nombreUsuario").innerText = datosUsuario.nombre;
    document.getElementById("emailUsuario").innerText = datosUsuario.email;
    document.getElementById("numeroUsuario").innerText = datosUsuario.numero;

    
    var reservasHTML = "";
    datosUsuario.reservas.forEach(function(reserva) {
        reservasHTML += "<li>Destino: " + reserva.destino + ", Fecha: " + reserva.fecha + ", Tipo: " + reserva.tipo + "</li>";
    });
    document.getElementById("reservasUsuario").innerHTML = reservasHTML;

    document.getElementById("destinoPreferido").innerText = datosUsuario.preferenciasViaje.destinoPreferido;
    document.getElementById("duracionPreferida").innerText = datosUsuario.preferenciasViaje.duracionPreferida;
    document.getElementById("tipoAlojamiento").innerText = datosUsuario.preferenciasViaje.tipoAlojamiento;
}


window.onload = function() {
    cargarDatosUsuario();
};