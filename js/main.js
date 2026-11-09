import { profile } from '../data/projects.js';
import { renderSkills, renderProjects } from './render.js';
import { initReveal, initActiveNav } from './reveal.js';
import { copyToClipboard } from './clipboard.js';

renderProjects(document.getElementById('projects-root'));
renderSkills(document.getElementById('skills-root'));
initReveal();
initActiveNav();

const btn = document.getElementById('copy-email');
const label = btn.textContent;
let timer;
btn.addEventListener('click', async () => {
  const ok = await copyToClipboard(profile.email);
  btn.textContent = ok ? 'Correo copiado' : 'No se pudo copiar, selecciona el texto';
  clearTimeout(timer);
  timer = setTimeout(() => { btn.textContent = label; }, 2000);
});