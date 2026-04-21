        document.addEventListener('DOMContentLoaded', () => {
            // 1. Definimos los enlaces de descarga para cada sistema
            // NOTA: Reemplaza estos enlaces con los reales de Mac y Linux si los tienes
            const enlacesDescarga = {
                windows: "https://www.bouml.fr/files/Bouml_7.11.patch4_setup.exe",
                mac: "https://www.bouml.fr/download.html#MacIntel", /* Enlace de ejemplo */
                linux: "https://www.bouml.fr/download.html#Ubuntu" /* Enlace de ejemplo */
            };

            // 2. Función para detectar el Sistema Operativo
            function detectarSO() {
                const userAgent = window.navigator.userAgent.toLowerCase();
                if (userAgent.indexOf("win") > -1) return "windows";
                if (userAgent.indexOf("mac") > -1) return "mac";
                if (userAgent.indexOf("linux") > -1) return "linux";
                return "windows"; // Por defecto, enviamos el de Windows si no sabemos qué es
            }

            // 3. Obtenemos el sistema operativo actual y su enlace
            const sistemaActual = detectarSO();
            const enlaceCorrecto = enlacesDescarga[sistemaActual];

            // 4. Seleccionamos ambos botones de descarga
            const botonesDescarga = document.querySelectorAll('.btn-descargar-top, .btn-main-download');

            // 5. Les agregamos la función de descargar al hacer clic
            botonesDescarga.forEach(boton => {
                boton.addEventListener('click', (evento) => {
                    evento.preventDefault(); // Evita que la página recargue
                    window.location.href = enlaceCorrecto; // Redirige a la descarga
                });
            });
        });
