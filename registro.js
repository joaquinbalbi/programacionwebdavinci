document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var numero = document.getElementById("numero").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Número:", numero);
    console.log("Email:", email);
    console.log("Contraseña:", password);

    
    var successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");

    
    document.getElementById("registroForm").classList.add("hidden");

    
    setTimeout(function() {
        window.location.href = "login.html";
    }, 3000);
});