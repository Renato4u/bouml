document.addEventListener("DOMContentLoaded", () => {
    // 1. LÓGICA DEL MENÚ MÓVIL (Funciona para las 3 páginas)
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // 2. LÓGICA DE TRADUCCIÓN (Conectando tus banderas con Google)
    const flags = document.querySelectorAll('.flags img');
    
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.alt; // Lee el "alt" de tus banderas: "Reino Unido" o "Francia"
            let googleLang = "";

            if (lang === "Reino Unido") googleLang = "en";
            else if (lang === "Francia") googleLang = "fr";
            else googleLang = "es"; // Por si pones una de España o similar

            // Buscamos el selector oculto de Google
            const googleSelect = document.querySelector('.goog-te-combo');
            
            if (googleSelect) {
                googleSelect.value = googleLang;
                // Disparamos el evento para que Google se entere del cambio
                googleSelect.dispatchEvent(new Event('change'));
            } else {
                console.log("El widget de Google aún no carga o no hay internet.");
            }
        });
    });
});