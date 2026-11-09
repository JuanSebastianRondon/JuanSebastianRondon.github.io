<div align="center">

# Portafolio personal
### Juan Sebastián Rondón Garcés

Sitio estático en [GitHub Pages](https://pages.github.com/) con mis proyectos, habilidades y contacto.

**[Ver sitio ↗](https://juansebastianrondon.github.io)**

</div>

## Cómo está hecho

HTML, CSS y JavaScript puros, sin frameworks ni build. El contenido vive en `data/projects.js` y las tarjetas se generan desde ahí. Para agregar un proyecto basta con añadir un objeto a ese archivo.

## Estructura

```
index.html
index.css
data/projects.js    proyectos, habilidades y datos de contacto
js/main.js          arranque
js/render.js        genera tarjetas y habilidades
js/reveal.js        IntersectionObserver: animaciones y nav activo
js/clipboard.js     copiar al portapapeles con fallback
images/             icon.png, og.png y capturas
assets/cv.pdf       CV (agregar)
```

