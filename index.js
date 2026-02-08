async function navigateTo(archivo) {
    const zonaContenido = document.getElementById('content-area');
    const barraNavegacion = document.getElementById('main-nav');

    // Animación de salida
    zonaContenido.classList.add('fade-out');

    setTimeout(async () => {
        if (archivo === 'index.html') {
            barraNavegacion.classList.remove('oculto');
            zonaContenido.innerHTML = `
                <h1>Bienvenido</h1>
                <p>Explora mis proyectos y formación académica en desarrollo de software.</p>
            `;
        } else {
            barraNavegacion.classList.add('oculto');
            try {
                const respuesta = await fetch(archivo);
                const nuevoHtml = await respuesta.text();
                zonaContenido.innerHTML = nuevoHtml;
            } catch (error) {
                zonaContenido.innerHTML = "<h1>Error</h1><p>No se pudo cargar el portafolio.</p>";
            }
        }

        // Animación de entrada
        zonaContenido.classList.remove('fade-out');
        zonaContenido.classList.add('animate-in');

        setTimeout(() => {
            zonaContenido.classList.remove('animate-in');
        }, 500);
    }, 400);
}