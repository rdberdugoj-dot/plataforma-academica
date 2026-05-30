// Script.js - Plataforma Académica Básica

console.log("Plataforma Académica Básica cargada");

// Función para resaltar la sección activa
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Mensaje de bienvenida en la consola
console.log("Bienvenido a la Plataforma Académica Básica");
console.log("Este proyecto demuestra el flujo básico de Git y GitHub");