// Script para página de políticas de privacidad
// Esperar a que todo cargue
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize AOS si está disponible
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100
            });
        }
        
        // Smooth scroll para enlaces
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    } catch (error) {
        console.error('Error inicializando scripts:', error);
    }
});

