// --- 1. FUNCIONALIDAD DEL BOLETO DORADO PERSONALIZADO ---

const ticket = document.querySelector('.golden-ticket-img');
const modal = document.getElementById('goldenTicketModal');
const closeButton = document.querySelector('.close-button');
const okButton = document.querySelector('.modal-ok-button');

// Verificamos que el ticket exista en la página
if (ticket) {
    // 1. Hacemos que el cursor cambie a "mano" para indicar que es clicable
    ticket.style.cursor = "pointer";

    // 2. Añadimos el "oyente" de evento 'click' al boleto
    ticket.addEventListener('click', () => {
        // Desactivamos temporalmente el clic para evitar múltiples activaciones
        ticket.style.pointerEvents = 'none';

        // Efecto visual: hacemos que el ticket rote y crezca
        ticket.style.transition = "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)"; // Transición con "rebote"
        ticket.style.transform = "rotate(360deg) scale(1.1)";

        // Después de que la animación termine (1 segundo), mostramos el modal
        setTimeout(() => {
            modal.classList.add('active'); // Agregamos la clase 'active' para mostrar el modal con CSS
            ticket.style.transform = "rotate(0deg) scale(1)"; // Devolvemos el ticket a su estado original
            ticket.style.transition = ""; // Quitamos la transición para que los futuros hovers sean normales
        }, 1000); // Espera 1 segundo para que la animación de giro se complete
    });
}

// 3. Funcionalidad para cerrar el modal
function closeModal() {
    modal.classList.remove('active'); // Quitamos la clase 'active' para ocultar el modal
    // Volvemos a habilitar el clic en el ticket una vez que se cierra el modal
    if (ticket) {
        ticket.style.pointerEvents = 'auto';
    }
}

// Oyentes para cerrar el modal:
if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}
if (okButton) {
    okButton.addEventListener('click', closeModal);
}
// También cerramos el modal si se hace clic fuera del contenido del modal
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Si el clic fue directamente en el fondo del modal
            closeModal();
        }
    });
}


// --- 2. EFECTO HOVER EN TARJETAS DE PERSONAJES ---
// Seleccionamos TODAS las tarjetas que tengan la clase .character-card
const cards = document.querySelectorAll('.character-card');

// Recorremos la lista de tarjetas 
cards.forEach(card => {

    // Cuando el mouse entra en la tarjeta
    card.addEventListener('mouseenter', () => {
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        card.style.transform = "translateY(-10px)"; // Sube 10px
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)"; // Sombra más grande
    });

    // Cuando el mouse sale de la tarjeta
    card.addEventListener('mouseleave', () => {
        // Puedes poner la sombra original que ya tenías en tu CSS si lo prefieres
        card.style.transform = "translateY(0)"; // Vuelve a su sitio
        card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.5)"; // Vuelve a la sombra original
    });
});