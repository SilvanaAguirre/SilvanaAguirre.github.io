document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma normal
    const email = document.getElementById("email").value;

    // Muestra el popup
    document.getElementById("popupMessage").innerText = `Tu correo ${email} ha sido agregado.`;
    document.getElementById("popup").style.display = "block";

    // Aquí podrías agregar el código para enviar el correo a tu servidor si es necesario
});

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Cierra el popup
}