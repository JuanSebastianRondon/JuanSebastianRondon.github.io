async function navigateTo(archivo) {
    const zonaContenido = document.getElementById('content-area');
    const barraNavegacion = document.getElementById('main-nav');

    // Animación de salida
    zonaContenido.classList.add('fade-out');

    setTimeout(async () => {
        try {
            // Funcion para Ocultar el menú al entrar al portafolio
            barraNavegacion.classList.add('oculto');
            
            const respuesta = await fetch(archivo);
            if (!respuesta.ok) throw new Error("No se pudo cargar el archivo");
            const nuevoHtml = await respuesta.text();
            
            zonaContenido.innerHTML = nuevoHtml;
        } catch (error) {
            console.error(error);
            zonaContenido.innerHTML = "<h1>Error</h1><p>No se pudo cargar el portafolio.</p>";
            // Si hay error, mostramos el menú de nuevo para que el usuario pueda reintentar
            barraNavegacion.classList.remove('oculto');
        } finally {
            zonaContenido.classList.remove('fade-out');
            zonaContenido.classList.add('animate-in');

            setTimeout(() => {
                zonaContenido.classList.remove('animate-in');
            }, 600);
        }
    }, 400);
}