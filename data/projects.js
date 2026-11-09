export const profile = {
  email: 'jrondongarces@gmail.com',
  linkedin: 'https://linkedin.com/in/juan-sebasti%C3%A1n-rond%C3%B3n-garc%C3%A9s-a432581a8',
  github: 'https://github.com/JuanSebastianRondon'
};

// Agrega un objeto aqui y la tarjeta aparece sola.
export const projects = [
  {
    path: '~/reporte-semanal',
    title: 'Reporte Semanal de Productividad',
    badge: 'en uso',
    desc: 'App de escritorio para Windows que registra en segundo plano cuanto tiempo usas cada programa. Cada lunes genera un PDF con las aplicaciones mas usadas y lo envia al correo del usuario.',
    tags: ['NestJS', 'TypeScript', 'pdfkit', 'nodemailer', 'PowerShell', 'Inno Setup', 'C#'],
    repo: 'https://github.com/JuanSebastianRondon/Reporte-Semanal',
    demo: null,       // ej: enlace al release con el instalador
    image: null       // ej: 'images/reporte-pdf.png'
  },
  {
    path: '~/rentwash',
    title: 'RentWash',
    badge: 'proyecto academico',
    desc: 'Sistema de gestion para el alquiler de lavadoras. Frontend en React, backend en Node.js y base de datos MySQL.',
    tags: ['React.js', 'Node.js', 'MySQL', 'JavaScript'],
    repo: 'https://github.com/JuanSebastianRondon/RentWash',
    demo: null,
    image: 'images/image.jpg',
    imageAlt: 'Vista previa de RentWash'
  },
  {
    path: '~/portafolio',
    title: 'Este portafolio',
    badge: null,
    desc: 'Sitio estatico en GitHub Pages, sin frameworks ni build. Contenido separado de la presentacion y modulos ES.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    repo: 'https://github.com/JuanSebastianRondon/JuanSebastianRondon.github.io',
    demo: null,
    image: null
  }
];

export const skills = [
  { tag: 'srv',  name: 'NestJS',      cat: 'Backend' },
  { tag: 'srv',  name: 'Node.js',     cat: 'Backend' },
  { tag: 'lang', name: 'TypeScript',  cat: 'Lenguaje' },
  { tag: 'lang', name: 'JavaScript',  cat: 'Lenguaje' },
  { tag: 'lang', name: 'C#',          cat: 'Lenguaje' },
  { tag: 'db',   name: 'MySQL',       cat: 'Base de datos' },
  { tag: 'ops',  name: 'Git / GitHub',cat: 'Control de versiones' },
  { tag: 'web',  name: 'React',       cat: 'Frontend' },
  { tag: 'web',  name: 'HTML / CSS',  cat: 'Frontend' }
  // C++ y Unity: agregalos de vuelta cuando haya un repo que los respalde.
];