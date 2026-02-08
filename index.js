async function navigateTo(archivo) {
    const zonaContenido = document.getElementById('content-area');
    const barraNavegacion = document.querySelector('nav'); // Seleccionamos la barra

    // 1. Animación de salida del contenido actual
    zonaContenido.classList.add('fade-out');

    setTimeout(async () => {
        
        // --- LOGICA DE VISIBILIDAD DEL MENÚ ---
        if (archivo === 'index.html') {
            // Si vamos al inicio, mostramos el menú de nuevo
            barraNavegacion.classList.remove('oculto');
            
            // Y restauramos el mensaje de bienvenida manualmente
            zonaContenido.innerHTML = `
                <h1>Bienvenido</h1>
                <p>Haz clic en los botones para navegar con animaciones.</p>
            `;
        } else {
            // Si vamos a cualquier otra página (ej: muestras.html), OCULTAMOS el menú
            barraNavegacion.classList.add('oculto');
            
            // Y cargamos el archivo externo
            try {
                const respuesta = await fetch(archivo);
                const nuevoHtml = await respuesta.text();
                zonaContenido.innerHTML = nuevoHtml;
            } catch (error) {
                zonaContenido.innerHTML = "<p>Error al cargar el contenido.</p>";
            }
        }
        // ---------------------------------------

        // 3. Animación de entrada
        zonaContenido.classList.remove('fade-out');
        zonaContenido.classList.add('animate-in');

        setTimeout(() => {
            zonaContenido.classList.remove('animate-in');
        }, 600);

    }, 500);
}