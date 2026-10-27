# RREM Creaciones en Madera — versión 1

Web comercial estática en español, preparada para mostrar trabajos reales y recibir solicitudes de cotización por WhatsApp.

## Abrir la página

Abre index.html con doble clic. También puedes servir esta carpeta con cualquier servidor web estático. La versión revisada durante el desarrollo se encuentra en http://127.0.0.1:8765/ mientras la vista previa esté activa.

## Subir a GitHub y Vercel

1. Crea un repositorio en GitHub y sube **el contenido** de esta carpeta: index.html debe quedar en la raíz del repositorio, junto a styles.css, script.js y assets.
2. En Vercel, importa ese repositorio.
3. Selecciona el tipo de proyecto **Other / Otro**. La web no necesita instalar dependencias ni ejecutar una compilación. El directorio de salida es la raíz del proyecto (.).
4. Publica y abre la dirección HTTPS que entregue Vercel.

No se ha creado un repositorio ni publicado la página en una cuenta externa: la entrega queda local para que puedas hacerlo tú, como solicitaste.

## Contenido

- index.html: contenido, estructura, catálogo, metadatos y datos de la marca.
- styles.css: diseño adaptable y animaciones.
- script.js: filtros, fichas, carrusel automático y cotizador.
- assets/: fotografías finales, logo, favicon y tipografías locales, sin subcarpetas.
- brief-marca.md: investigación, fuentes por proyecto y decisiones de contenido.
- vercel.json: configuración de archivos estáticos.
- robots.txt: acceso para buscadores.

## WhatsApp y formulario

El número de la empresa es **+56 9 3377 7245**, confirmado por la captura aportada por el usuario. Todos los accesos utilizan 56933777245. El formulario prepara un mensaje con tipo de proyecto, referencia elegida, descripción, medidas opcionales, nombre, comuna y plazo deseado.

La web abre WhatsApp con el mensaje preparado. El visitante debe pulsar Enviar dentro de WhatsApp. La página no envía mensajes automáticamente, no cobra, no tiene carrito, no calcula precios y no almacena datos personales.

## Imágenes

Las imágenes corresponden a trabajos publicados por RREM en su Instagram. Las versiones mejoradas se realizaron con la herramienta integrada de edición de imágenes, usando cada foto real como referencia: limpieza de los sellos diagonales, mejora de iluminación y fondo o encuadre. No se incorporaron productos de otros fabricantes ni fotos de clientes inventados.

Los logotipos y textos que forman parte física de un mueble se conservan. Las fotografías originales sin editar y las capturas de investigación se mantienen fuera de la carpeta pública. La ficha de cada trabajo enlaza a su publicación de origen.

Las fotos muestran proyectos ya realizados; no equivalen a existencias, precio, plazo, certificación ni disponibilidad actual. Las sillas en el proyecto de la mesa de comedor se presentan como ambientación: no se atribuye su fabricación a RREM.

## Editar

Los textos visibles están en index.html. Los datos de las fichas están en el arreglo projects de script.js. Si agregas o cambias un trabajo, actualiza su tarjeta en HTML y su ficha en JavaScript. Mantén las rutas ./assets/nombre-del-archivo.webp.

Para cambiar el número de WhatsApp hay que actualizar WHATSAPP_NUMBER en script.js y los enlaces de respaldo y el teléfono en index.html.

## Dominio y buscadores

Se incluyen título, descripción, idioma, Open Graph, favicon, robots y datos estructurados de Organization. No se ha inventado un dominio ni dirección de taller. Cuando se conozca el dominio definitivo:

- Añade su URL HTTPS absoluta como canonical en el head de index.html.
- Añade og:url y cambia og:image a la URL absoluta de assets/compartir-rrem.webp para que las redes puedan leerla sin JavaScript.
- Crea sitemap.xml con la URL pública y enlázalo desde robots.txt.
- Registra el dominio en Google Search Console si se desea seguimiento de indexación.

Como respaldo, JavaScript configura canonical y Open Graph con la dirección HTTPS en la que se abra la web. Los rastreadores que no ejecutan JavaScript necesitan el ajuste estático anterior.

## Accesibilidad y rendimiento

Navegación por teclado, foco visible, diálogo nativo con cierre por Escape, imágenes con texto alternativo, tamaños estables, carga diferida, tipografías locales y respeto de movimiento reducido. El carrusel cambia cada 4,5 segundos, con controles manuales y botón de pausa. En movimiento reducido el cambio se hace sin transición animada. Los productos se muestran completos con ajuste proporcional, también en celular.

## Datos no inventados

No se publican precios, plazos garantizados, años de experiencia, garantías, certificaciones ni reseñas inventadas. No se publica una dirección de visita porque no fue confirmada. La entrega fuera de Copiapó se consulta con el fabricante.

El único testimonio procede del comentario público de Apart Hotel Pedro de Valdivia, enlazado desde la página. La cobertura y condiciones se confirman por WhatsApp.
