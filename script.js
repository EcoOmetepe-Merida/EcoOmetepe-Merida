
// Esperar a que todo el documento HTML esté cargado en el navegador
document.addEventListener("DOMContentLoaded", () => {
    
    console.log("¡EcoOmetepe Web cargado correctamente! Archivos JS vinculados.");

    // 1. Manejo estético de las pestañas (Tabs) de Login y Registro
    const tabLogin = document.getElementById('tab-login');
    const tabRegistro = document.getElementById('tab-registro');

    if(tabLogin && tabRegistro) {
        tabLogin.addEventListener('click', () => {
            tabLogin.classList.add('text-success');
            tabLogin.classList.remove('text-secondary');
            tabRegistro.classList.remove('text-success');
            tabRegistro.classList.add('text-secondary');
        });

        tabRegistro.addEventListener('click', () => {
            tabRegistro.classList.add('text-success');
            tabRegistro.classList.remove('text-secondary');
            tabLogin.classList.remove('text-success');
            tabLogin.classList.add('text-secondary');
        });
    }

    // 2. Simulación de envío del formulario de Login (Inicio de Sesión)
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página entera
            alert("¡Sesión iniciada correctamente en EcoOmetepe Web!");
            
            // Cerrar la ventana flotante automáticamente
            const modalElement = document.getElementById('modalLogin');
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();
        });
    }

    // 3. Simulación de envío del formulario de Registro
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página entera
            alert("¡Registro exitoso! Bienvenido a la comunidad de Guardianes de Ometepe.");
            
            // Cerrar la ventana flotante automáticamente
            const modalElement = document.getElementById('modalLogin');
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();
        });
    }

});