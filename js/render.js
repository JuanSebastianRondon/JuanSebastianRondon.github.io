import { projects, skills } from '../data/projects.js';

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
};

function link(href, text, cls) {
  const a = el('a', cls, text);
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  return a;
}

export function renderSkills(root) {
  skills.forEach(s => {
    const item = el('div', 'skill-item');
    item.append(el('div', 'skill-bracket', `[${s.tag}]`), el('div', 'skill-name', s.name), el('div', 'skill-cat', s.cat));
    root.append(item);
  });
}

export function renderProjects(root) {
  projects.forEach(p => {
    const card = el('article', 'project-card reveal');

    const top = el('div', 'project-top');
    const path = el('div', 'project-path', p.path);
    if (p.badge) path.append(' ', el('span', 'project-badge', p.badge));
    const links = el('div', 'project-links');
    links.append(link(p.repo, 'GitHub ↗'));
    if (p.demo) links.append(link(p.demo, 'Demo ↗'));
    top.append(path, links);

    card.append(top, el('h3', 'project-title', p.title), el('p', 'project-desc', p.desc));

    if (p.image) {
      const img = el('img', 'project-preview');
      img.src = p.image;
      img.alt = p.imageAlt || p.title;
      img.loading = 'lazy';
      img.width = 1200; img.height = 675;
      card.append(img);
    }

    const tags = el('div', 'project-tags');
    p.tags.forEach(t => tags.append(el('span', 'tag', t)));
    card.append(tags);
    root.append(card);
  });
}