# NEXO! — Cosplay Club

Prototipo universitario para **PC3, Avance N.º 1** de JavaScript Avanzado (UTP).

**Idea:** comunidad cosplay para aprender técnicas, buscar colaboradores, mostrar procesos y descubrir actividades. No es un e-commerce.

## Tecnologías

React 19 · Vite 7 · Tailwind CSS 4 · React Router DOM · Lucide React.

## Ejecutar

```bash
npm install
npm run dev
```

Verificar el build:

```bash
npm run build
```

## Páginas

- `/` Inicio
- `/comunidad` Creadores y buscador
- `/comunidad/:id` Ficha de creador
- `/colaboraciones` Tablón y publicación local
- `/eventos` Agenda y guardados
- `/proyectos` Procesos creativos
- `/proyectos/:id` Detalle de proceso
- `/recursos` Guías
- `/nosotros` Propósito del proyecto
- `/contacto` Formulario simulado
- `*` 404

## Imágenes por reemplazar

Por ahora **todas son etiquetas `<img>` con marcadores visibles** en `public/assets/placeholders/`:

- `hero.svg`: imagen principal.
- `persona.svg`: perfiles de creadores.
- `proyecto.svg`: procesos y proyectos.
- `evento.svg`: agenda.

Se utilizan mediante el componente `src/components/ImageSlot.jsx`. Para incorporar fotos más adelante, coloca tus imágenes autorizadas en `public/assets/images/` y cambia la propiedad `imagen` en `src/data/content.js` o el `src` del componente Hero.

## Datos de demostración

Los perfiles, eventos, proyectos y propuestas iniciales son ficticios. Las funciones de tarjeta, guardados y nuevas propuestas utilizan **LocalStorage únicamente**. No existe autenticación ni mensajería real.

## Diseño

Identidad editorial y vivaz basada en fanzines: crema `#FFF8ED`, tinta `#223348`, coral `#FF644D`, amarillo `#FFD34E` y menta `#70D9C4`. Titulares Bricolage Grotesque; cuerpo DM Sans. Implementado con Tailwind CSS y estilos base en `src/index.css`.

## Entregables académicos

- `docs/PC3_AVANCE_01.md`: respuestas a las cinco preguntas.
- `docs/COMPROBACION_AP3.md`: checklist de requisitos y pruebas.
- `docs/FIGMA_INSTRUCCIONES.md`: importación a Figma.
- `design/figma/`: guía de estilos y wireframes desktop/mobile, en SVG.

**Pendiente del equipo:** importar los SVG en Figma, compartir un enlace real y completar los nombres de integrantes.

## Usarlo en una rama del repositorio actual

Antes de sobrescribir archivos del proyecto anterior, crea una rama desde un árbol de Git limpio:

```bash
git switch -c feature/nexo-cosplay-vivo
```

Copia el contenido de este ZIP en la raíz de esa rama, eliminando los componentes antiguos que ya no sean usados. Luego instala, prueba y realiza un commit. No copies `node_modules` ni `dist`.
