// ========== SCRIPT GENERAL DEL PROYECTO ==========

// Efecto básico de fade-in cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    console.log("app_dic: JavaScript cargado correctamente.");

    // Animación de entrada para todo el contenido
    const elementos = document.querySelectorAll(".fade-in");

    elementos.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 150 * index); // animación escalonada
    });

    // Mensaje para ver si estás en una vista específica
    const pagina = document.body.getAttribute("data-page");
    if (pagina) {
        console.log("Vista actual:", pagina);
    }
});

// Función para botón de interacción
function mostrarAlerta() {
    alert("Interacción exitosa: ¡JS funcionando correctamente!");
}
