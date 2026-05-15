document.querySelectorAll('a[href="mailto:jrondongarces@gmail.com"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('jrondongarces@gmail.com');
    const original = el.querySelector('.contact-value')?.textContent || el.textContent;
    const target = el.querySelector('.contact-value') || el;
    target.textContent = '¡Copiado!';
    setTimeout(() => target.textContent = original, 2000);
  });
});