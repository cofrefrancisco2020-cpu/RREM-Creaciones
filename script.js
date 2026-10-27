'use strict';
const projects = [{"id":"tipi","title":"Cama tipi","category":"infantil","label":"Línea infantil","index":24,"image":"cama-tipi.webp","desc":"Una cama con estructura de madera natural y diseño tipi, fabricada para acompañar el espacio de los más pequeños.","features":["Estructura de madera con barandas","Puntas blancas y terminación natural","Proyecto publicado de 1 plaza y media"],"url":"https://www.instagram.com/rremcreacionesrv/p/DHwr8hmAZ9D/"},{"id":"cocina","title":"Cocina modular","category":"hogar","label":"Para tu hogar","index":21,"image":"cocina-modular.webp","desc":"Muebles modulares pensados para aprovechar el espacio, con tonos y terminaciones elegidos para combinar con el ambiente.","features":["Módulos superiores e inferiores","Distribución adaptada al espacio","Terminaciones coordinadas con el ambiente"],"url":"https://www.instagram.com/rremcreacionesrv/p/DLx2K8NRlAN/"},{"id":"carro","title":"Carro para emprendimientos","category":"negocios","label":"Negocios y eventos","index":2,"image":"carro-emprendimiento.webp","desc":"Un carro de exhibición diseñado para presentar productos, guardar materiales y acompañar un emprendimiento.","features":["Diseño funcional y desmontable","Compartimientos con llave","Exhibidores y ruedas para traslado"],"url":"https://www.instagram.com/rremcreacionesrv/p/DdPVbQPEuwb/"},{"id":"mcqueen","title":"Cama Rayo McQueen","category":"infantil","label":"Línea infantil","index":20,"image":"cama-mcqueen.webp","desc":"Una cama temática de 1 plaza y media, fabricada por encargo con el diseño rojo y los detalles de Rayo McQueen.","features":["Proyecto temático de 1 plaza y media","Estructura interior de madera","Diseño personalizado para dormitorio infantil"],"url":"https://www.instagram.com/rremcreacionesrv/p/DLyJ1xoRyt8/"},{"id":"comedor","title":"Mesa de comedor en pino Oregón","category":"hogar","label":"Para tu hogar","index":12,"image":"mesa-comedor.webp","desc":"Madera de pino Oregón reutilizada, una base de gran presencia y una cubierta de vidrio que deja ver el trabajo de la madera.","features":["Pino Oregón reutilizado","Base de madera en forma de X","Cubierta de vidrio; sillas como ambientación"],"url":"https://www.instagram.com/rremcreacionesrv/p/DS0C7qakji5/"},{"id":"barra","title":"Barra para eventos","category":"negocios","label":"Negocios y eventos","index":9,"image":"barra-eventos.webp","desc":"Una estación de servicio con frente de listones y presencia de marca, creada para Eccobass Producciones.","features":["Frente de listones de madera","Cubierta oscura y logotipo central","Diseño realizado por encargo"],"url":"https://www.instagram.com/rremcreacionesrv/p/DWmIvsLiYlT/"},{"id":"restauracion","title":"Veladores con una nueva vida","category":"restauracion","label":"Restauración","index":4,"image":"veladores-restaurados.webp","desc":"Dos veladores que recuperaron su uso con una renovación de color y terminaciones, conservando su historia.","features":["Proyecto de restauración realizado","Nuevo color y terminaciones","Evaluación de cada mueble por separado"],"url":"https://www.instagram.com/rremcreacionesrv/p/DaY78koCS22/","original":"velador-antes.webp"},{"id":"recepcion","title":"Recepción Apart Hotel","category":"negocios","label":"Negocios y eventos","index":5,"image":"recepcion-hotel.webp","desc":"Mobiliario de recepción para Apart Hotel Pedro de Valdivia, con logotipo de corte láser e iluminación LED.","features":["Mueble diseñado para recepción","Logotipo de corte láser","Iluminación LED en profundidad"],"url":"https://www.instagram.com/rremcreacionesrv/p/DX2CY6tDNpV/"},{"id":"bodega","title":"Bodega para patio y terraza","category":"hogar","label":"Para tu hogar","index":0,"image":"bodega-exterior.webp","desc":"Una solución de almacenamiento de madera para ordenar herramientas y artículos de exterior.","features":["Diseño desmontable","Proyecto para patios y terrazas","Consulta medidas y protección para tu espacio"],"url":"https://www.instagram.com/rremcreacionesrv/p/DeVr5j3FQx3/"},{"id":"tocador","title":"Tocador modular 3 en 1","category":"hogar","label":"Para tu hogar","index":26,"image":"tocador-modular.webp","desc":"Tocador con luces LED, organizador y zapatero en módulos independientes que permiten ordenar el dormitorio.","features":["Tocador con iluminación LED","Módulos independientes","Almacenamiento y organización"],"url":"https://www.instagram.com/rremcreacionesrv/p/DGoJ3BHy9_L/"},{"id":"nube","title":"Mesa nube y sillas mariposa","category":"infantil","label":"Línea infantil","index":19,"image":"mesa-nube.webp","desc":"Un conjunto de mesa y sillas con formas lúdicas, creado para los momentos de juego y aprendizaje.","features":["Mesa de silueta nube","Sillas con respaldo mariposa","Proyecto infantil personalizado"],"url":"https://www.instagram.com/rremcreacionesrv/p/DO1vYWcEn2l/"},{"id":"juego","title":"Cocina de juego","category":"infantil","label":"Línea infantil","index":13,"image":"cocina-juego.webp","desc":"Una cocina infantil hecha por encargo, con compartimientos y pequeños detalles para imaginar grandes historias.","features":["Diseño y colores personalizados","Puertas y compartimientos","Proyecto realizado por encargo"],"url":"https://www.instagram.com/rremcreacionesrv/p/DSyPdVlkrSv/"},{"id":"camarote","title":"Camarote de madera","category":"infantil","label":"Línea infantil","index":23,"image":"camarote-madera.webp","desc":"Un camarote de madera de 1 plaza y media, con bordes redondeados y detalles cuidados para el dormitorio.","features":["Proyecto de 1 plaza y media","Bordes redondeados","Diseño adaptado al dormitorio"],"url":"https://www.instagram.com/rremcreacionesrv/p/DH1YG1VvJXm/"},{"id":"comoda","title":"Cómoda de líneas simples","category":"hogar","label":"Para tu hogar","index":25,"image":"comoda-moderna.webp","desc":"Una cómoda de estilo moderno, con cajones amplios y un frente limpio sin manillas.","features":["Frente sin manillas","Cajones amplios","Diseño y fabricación por encargo"],"url":"https://www.instagram.com/rremcreacionesrv/p/DG5pdq9N5Ao/"},{"id":"avion","title":"Avión de madera","category":"infantil","label":"Línea infantil","index":11,"image":"avion-madera.webp","desc":"Un juguete de madera con ruedas y hélice, creado para que la imaginación encuentre su propio camino.","features":["Juguete de madera","Ruedas y hélice","Proyecto infantil realizado"],"url":"https://www.instagram.com/rremcreacionesrv/p/DS2qUBwkmVf/"},{"id":"plegable","title":"Mesa plegable con ruedas","category":"hogar","label":"Para tu hogar","index":1,"image":"mesa-plegable.webp","desc":"Una mesa con estructura metálica y cubierta en tono madera, pensada para plegarse y ocupar menos espacio.","features":["Estructura metálica","Diseño plegable","Ruedas para moverla"],"url":"https://www.instagram.com/rremcreacionesrv/p/DeFrcB1GU7e/"},{"id":"tocador-infantil","title":"Tocador Hollywood infantil","category":"infantil","label":"Línea infantil","index":22,"image":"tocador-infantil.webp","desc":"Un pequeño tocador rosa y blanco con luces LED y silla a juego, diseñado para un dormitorio infantil.","features":["Espejo con luces LED","Combinación rosa y blanco","Silla a juego con respaldo curvo"],"url":"https://www.instagram.com/rremcreacionesrv/p/DJdMtWNx-Qo/"},{"id":"montessori","title":"Cama casita Montessori","category":"infantil","label":"Línea infantil","index":8,"image":"cama-casita.webp","desc":"Una cama baja con silueta de casita, barandas y una entrada lateral, realizada según las características solicitadas por la familia.","features":["Diseño bajo con entrada lateral","Barandas y estructura de madera","Proyecto personalizado para el dormitorio"],"url":"https://www.instagram.com/rremcreacionesrv/p/DWrMWYUicFr/"},{"id":"cama-jardin","title":"Camas para jardín infantil","category":"infantil","label":"Línea infantil","index":7,"image":"cama-jardin.webp","desc":"Camas bajas de madera y base clara, parte de un encargo de cinco unidades realizado para Jardín Infantil Rayun.","features":["Proyecto de cinco camas para jardín infantil","Base baja y cabeceras redondeadas","Mobiliario creado por encargo"],"url":"https://www.instagram.com/rremcreacionesrv/p/DXUQ_ipErHY/"},{"id":"barra-blanca","title":"Estación de servicio blanca","category":"negocios","label":"Negocios y eventos","index":3,"image":"estacion-servicio.webp","desc":"Un mueble de servicio para Producciones M&C, con cubierta amplia, bandejas metálicas y frente decorativo blanco.","features":["Espacio de trabajo en la cubierta","Bandejas metálicas integradas","Ruedas y frente con molduras"],"url":"https://www.instagram.com/rremcreacionesrv/p/DdPNBwBj-up/"},{"id":"corazon","title":"Corazón iluminado para eventos","category":"negocios","label":"Negocios y eventos","index":16,"image":"corazon-eventos.webp","desc":"Una estructura de corazón y mesa metálica realizada para celebraciones en Las Bugambilias Copiapó.","features":["Estructura blanca con iluminación","Mesa metálica con detalle de corazón","Proyecto realizado para celebraciones"],"url":"https://www.instagram.com/rremcreacionesrv/p/DSASbeajCBT/"},{"id":"love","title":"Mobiliario LOVE para eventos","category":"negocios","label":"Negocios y eventos","index":17,"image":"love-eventos.webp","desc":"Una creación para ambientar celebraciones y eventos de Producciones M&C, con letras LOVE iluminadas.","features":["Letras LOVE de gran formato","Iluminación decorativa","Proyecto realizado para eventos"],"url":"https://www.instagram.com/rremcreacionesrv/p/DR8EW5fEnrr/"},{"id":"banco","title":"Mobiliario para instituciones","category":"negocios","label":"Negocios y eventos","index":18,"image":"mobiliario-colegio.webp","desc":"Un proyecto en madera realizado para la generación 2025 del Colegio San Agustín de Atacama.","features":["Proyecto para una comunidad escolar","Diseño y fabricación por encargo","Estructura y terminación en madera"],"url":"https://www.instagram.com/rremcreacionesrv/p/DRsrOCJDDEf/"},{"id":"tortero","title":"Tortero de gran formato","category":"negocios","label":"Negocios y eventos","index":28,"image":"tortero-eventos.webp","desc":"Un tortero blanco de tres niveles creado para acompañar montajes y decoraciones de eventos.","features":["Tres niveles circulares","Terminación blanca","Pieza para montajes decorativos"],"url":"https://www.instagram.com/rremcreacionesrv/p/DGHesmUOri1/"},{"id":"cocina-morada","title":"Cocina de juego morada","category":"infantil","label":"Línea infantil","index":14,"image":"cocina-morada.webp","desc":"Otra versión de cocina infantil, con muebles blancos y frentes morados, creada como regalo para jugar e imaginar.","features":["Frentes morados y estructura clara","Compartimientos y piezas de juego","Fabricación personalizada por encargo"],"url":"https://www.instagram.com/rremcreacionesrv/p/DSu2EQGEmUl/"}];
const WHATSAPP_NUMBER = '56933777245';
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const asset = name => './assets/' + name;
const waURL = message => 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Menú accesible y enlaces internos.
const nav = $('#navigation');
const menu = $('.menu-toggle');
function closeMenu() { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menú'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('is-open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
$$('a[href^="#"]', nav).forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
window.addEventListener('resize', () => { if (innerWidth > 900) closeMenu(); });
$$('[data-wa]').forEach(a => a.href = waURL('Hola RREM, quiero conversar sobre un proyecto a medida.'));

// La galería conserva todo su contenido en HTML para buscadores y sin JavaScript.
const cards = $$('.project-card');
const showMore = $('#show-projects');
let activeFilter = 'todos', expanded = false;
function filterProjects(category) {
  activeFilter = category;
  const matching = cards.filter(card => category === 'todos' || card.dataset.category === category);
  cards.forEach(card => { const match = matching.includes(card); const index = matching.indexOf(card); card.hidden = !match || (category === 'todos' && !expanded && index > 8); });
  $$('.filter').forEach(button => { const active = button.dataset.filter === category; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
  showMore.hidden = category !== 'todos' || expanded;
  $('#filter-status').textContent = matching.length + (matching.length === 1 ? ' proyecto en esta selección' : ' proyectos en esta selección') + (category === 'todos' && !expanded ? '. Se muestran los primeros 9.' : '.');
  cards.filter(card => !card.hidden).forEach(card => card.classList.add('is-visible'));
}
$$('.filter').forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
$$('[data-category-link]').forEach(a => a.addEventListener('click', () => filterProjects(a.dataset.categoryLink)));
showMore.addEventListener('click', () => { expanded = true; filterProjects(activeFilter); const next = cards[9]; if (next) next.querySelector('button').focus({preventScroll: true}); });
filterProjects('todos');

// Fotografías destacadas. Con movimiento reducido cambian sin transición animada.
const slideButtons = $$('[data-slide]');
const heroData = [["tipi","Cama tipi · Línea infantil"],["cocina","Cocina modular · Hogar"],["carro","Carro para emprendimientos"],["mcqueen","Cama McQueen · Línea infantil"],["comedor","Mesa de comedor · Hogar"],["barra","Barra para eventos · Negocios"]];
let currentSlide = 0, heroTimer = null, userPaused = false;
function setSlide(index) { currentSlide = index; $$('.hero-slide').forEach((img, i) => img.classList.toggle('is-active', i === index)); slideButtons.forEach((button, i) => { button.classList.toggle('is-active', i === index); button.setAttribute('aria-pressed', String(i === index)); }); const label = $('#hero-project'); label.dataset.open = heroData[index][0]; label.firstChild.textContent = heroData[index][1] + ' '; }
function stopHero() { if (heroTimer) clearInterval(heroTimer); heroTimer = null; }
function startHero() { stopHero(); if (!document.hidden && !userPaused) heroTimer = setInterval(() => setSlide((currentSlide + 1) % heroData.length), 4500); }
slideButtons.forEach(button => button.addEventListener('click', () => { setSlide(Number(button.dataset.slide)); startHero(); }));
const heroVisual = $('.hero-visual');
$('#pause-hero').addEventListener('click', () => { userPaused = !userPaused; $('#pause-hero').setAttribute('aria-pressed',String(userPaused)); $('#pause-hero').setAttribute('aria-label',userPaused ? 'Reanudar carrusel automático' : 'Pausar carrusel automático'); $('#pause-hero').firstElementChild.textContent = userPaused ? '▶' : 'Ⅱ'; startHero(); });
document.addEventListener('visibilitychange', startHero);
reducedMotion.addEventListener('change', startHero);
startHero();

// Fichas de proyectos, fotografía original y regreso al control que las abrió.
const dialog = $('#project-dialog');
let dialogProject = null, showingOriginal = false;
function openProject(id) {
  const project = projects.find(p => p.id === id); if (!project) return;
  dialogProject = project; showingOriginal = false;
  $('#dialog-title').textContent = project.title;
  $('#dialog-category').textContent = project.label;
  $('#dialog-description').textContent = project.desc;
  $('#dialog-image').src = asset(project.image);
  $('#dialog-image').alt = project.title + ', proyecto de RREM Creaciones en Madera';
  $('#dialog-features').replaceChildren(...project.features.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  $('#dialog-source').href = project.url;
  $('#dialog-quote').dataset.quote = id;
  $('#original-toggle').hidden = !project.original;
  $('#original-toggle').textContent = project.category === 'restauracion' ? 'Ver antes de restaurar' : 'Ver fotografía original';
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open');
}
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
$('#original-toggle').addEventListener('click', () => { if (!dialogProject?.original) return; showingOriginal = !showingOriginal; $('#dialog-image').src = asset(showingOriginal ? dialogProject.original : dialogProject.image); $('#original-toggle').textContent = dialogProject.category === 'restauracion' ? (showingOriginal ? 'Ver restauración terminada' : 'Ver antes de restaurar') : (showingOriginal ? 'Ver presentación mejorada' : 'Ver fotografía original'); });
document.addEventListener('click', event => { const control = event.target.closest('[data-open]'); if (control) openProject(control.dataset.open); });

// Cotización guiada: validación por paso y mensaje preparado para WhatsApp.
const form = $('#quote-form');
const typeNames = {hogar:'Mueble para el hogar', infantil:'Mobiliario infantil', negocios:'Mobiliario para negocio o evento', restauracion:'Restauración de un mueble'};
let currentStep = 1, selectedProject = null;
function displayStep(step, moveFocus = true) {
  currentStep = step;
  $$('.form-step').forEach(panel => panel.hidden = Number(panel.dataset.step) !== step);
  $('#step-label').textContent = 'Paso ' + step + ' de 3';
  $('#step-progress').style.width = step / 3 * 100 + '%';
  $('#next-step').hidden = step === 3;
  $('#send-quote').hidden = step !== 3;
  $('#back-step').hidden = step === 1;
  $('#form-feedback').textContent = '';
  if (step === 3) updatePreview();
  if (moveFocus) { const legend = $('.form-step[data-step="' + step + '"] legend'); legend.setAttribute('tabindex','-1'); legend.focus({preventScroll:true}); }
}
function validateStep() {
  const fields = $$('input,textarea,select', $('.form-step[data-step="' + currentStep + '"]'));
  for (const input of fields) {
    if (input.required && input.type !== 'radio') input.setCustomValidity(input.value.trim() ? '' : 'Completa este campo para continuar.');
    if (!input.reportValidity()) return false;
  }
  return true;
}
$('#next-step').addEventListener('click', () => { if (validateStep()) displayStep(currentStep + 1); });
$('#back-step').addEventListener('click', () => displayStep(currentStep - 1));
form.addEventListener('keydown', event => { if (event.key === 'Enter' && event.target.tagName === 'INPUT' && currentStep < 3) { event.preventDefault(); if (validateStep()) displayStep(currentStep + 1); } });
function createMessage() {
  const data = new FormData(form), clean = key => String(data.get(key) || '').trim();
  const parts = ['Hola RREM, me gustaría cotizar un proyecto.', '', 'Nombre: ' + clean('nombre'), 'Ciudad o comuna: ' + clean('comuna'), 'Tipo: ' + (typeNames[clean('tipo')] || '')];
  if (selectedProject) parts.push('Proyecto de referencia: ' + selectedProject.title);
  parts.push('', 'Mi idea: ' + clean('detalles'));
  const dims = [['largo','Largo'], ['ancho','Ancho'], ['alto','Alto']].filter(([key]) => clean(key)).map(([key,label]) => label + ': ' + clean(key) + ' cm');
  if (dims.length) parts.push('Medidas aproximadas: ' + dims.join(' · '));
  parts.push('Plazo deseado: ' + clean('plazo'));
  if (selectedProject) parts.push('', 'Referencia: ' + selectedProject.url);
  parts.push('', '¿Podemos conversar sobre materiales, opciones y valor?');
  return parts.join('\n');
}
function updatePreview() { $('#message-preview').textContent = createMessage(); }
form.addEventListener('input', event => { if (event.target.setCustomValidity) event.target.setCustomValidity(''); updatePreview(); });
form.addEventListener('change', event => { if (event.target.name === 'tipo' && selectedProject && event.target.value !== selectedProject.category) { selectedProject = null; $('#selected-project-note').textContent = 'Una idea general es suficiente para comenzar.'; } updatePreview(); });
function selectReference(id) {
  const p = projects.find(project => project.id === id); if (!p) return;
  selectedProject = p;
  $('input[name="tipo"][value="' + p.category + '"]').checked = true;
  $('#details').value = 'Me gustaría cotizar un proyecto similar a: ' + p.title + '.';
  $('#details').setCustomValidity('');
  $('#selected-project-note').textContent = 'Tu referencia: ' + p.title + '. Cuéntanos qué te gustaría adaptar.';
  if (dialog.open) dialog.close();
  displayStep(2, false);
  updatePreview();
}
document.addEventListener('click', event => { const quote = event.target.closest('[data-quote]'); if (quote) selectReference(quote.dataset.quote); });
form.addEventListener('submit', event => {
  event.preventDefault();
  if (currentStep < 3) { if (validateStep()) displayStep(currentStep + 1); return; }
  if (!validateStep()) return;
  const target = waURL(createMessage());
  const opened = window.open(target, '_blank', 'noopener,noreferrer');
  const feedback = $('#form-feedback'); feedback.textContent = '';
  const fallback = document.createElement('a'); fallback.href = target; fallback.target = '_blank'; fallback.rel = 'noopener'; fallback.textContent = 'Abrir mi cotización en WhatsApp'; fallback.className = 'text-link'; feedback.append('Tu mensaje está listo. Si WhatsApp no se abrió, ',fallback,'.');
});
displayStep(1, false);

// Animaciones progresivas: el contenido es visible si el navegador no admite la API.
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, {threshold:.08,rootMargin:'0px 0px -15px 0px'});
  $$('.reveal').forEach(element => observer.observe(element));
}
$('#year').textContent = String(new Date().getFullYear());

// El dominio definitivo se establece al abrir la web publicada. No se inventa un dominio.
if (location.protocol === 'https:' && !['localhost','127.0.0.1'].includes(location.hostname)) {
  const canonicalURL = new URL('./', location.href).href;
  const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalURL; document.head.append(link);
  [['og:url',canonicalURL],['og:image',new URL('./assets/compartir-rrem.webp',canonicalURL).href]].forEach(([property,content]) => { let meta = document.head.querySelector('meta[property="'+property+'"]'); if (!meta) { meta = document.createElement('meta'); meta.setAttribute('property',property); document.head.append(meta); } meta.content = content; });
}
