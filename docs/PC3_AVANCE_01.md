# PC3 — Avance N.º 1: NEXO Cosplay Club

**Curso:** JavaScript Avanzado — UTP 2026-2  
**Proyecto:** NEXO Cosplay Club  
**Tecnologías iniciales:** React, Vite y Tailwind CSS  
**Integrantes:** [Completar con el equipo]  
**Estado:** Prototipo académico. Perfiles, proyectos, convocatorias y actividades ficticios.

## Pregunta 1 — Definición del proyecto y objetivos

### Nombre del proyecto

**NEXO Cosplay Club** — *No lo hagas solo. Hazlo con tu crew.*

### Descripción y propósito

NEXO es una propuesta de comunidad digital para personas interesadas en el cosplay: quienes están creando su primer traje, quienes cosen, fabrican accesorios, maquillan, toman fotografías o buscan amigos con esa misma afición. En lugar de enfocarse en vender productos, el sitio busca apoyar la parte social y creativa del hobby.

Un visitante puede consultar perfiles por especialidad y ciudad, encontrar propuestas para colaborar, revisar el proceso de proyectos y explorar una agenda de actividades. También cuenta con guías sencillas para empezar. Este primer avance muestra datos ficticios para probar la navegación y la interacción; todavía no existe una comunidad online real.

### Público objetivo

Principalmente estudiantes, jóvenes y adultos interesados en el cosplay, tanto principiantes como creadores con experiencia, que desean aprender, encontrar colaboradores y conocer actividades de su comunidad.

### Necesidad a satisfacer

La información sobre cosplay suele estar repartida entre perfiles, publicaciones y grupos. Alguien que recién empieza puede tener dificultades para encontrar consejos, conocer personas de su ciudad o pedir ayuda para un proyecto concreto. NEXO plantea reunir esos caminos de forma clara.

### Objetivo general

Diseñar e implementar un prototipo web responsive de comunidad cosplay que facilite la exploración de creadores, colaboraciones y actividades, utilizando React, Vite y Tailwind CSS.

### Tres objetivos específicos

1. Organizar las secciones de creadores, colaboraciones, agenda, proyectos y recursos mediante una navegación clara.
2. Implementar una página de inicio atractiva y componentes reutilizables que funcionen en escritorio y móvil.
3. Demostrar interacciones básicas con React: búsqueda y filtros, formularios validados, publicación local de propuestas y guardado local de contenidos.

## Pregunta 2 — Requisitos funcionales y no funcionales

### Requisitos funcionales

| Código | Descripción | Prioridad |
|---|---|---|
| RF-01 | Navegar mediante un menú responsive entre las principales secciones del club. | Alta |
| RF-02 | Explorar perfiles de creadores por oficio y ciudad, con vista de ficha individual. | Alta |
| RF-03 | Consultar propuestas de colaboración y filtrarlas por categoría. | Alta |
| RF-04 | Crear una propuesta de colaboración de prueba que se guarda solo en el navegador. | Media |
| RF-05 | Visualizar una agenda de actividades ficticias y guardar actividades localmente. | Alta |
| RF-06 | Consultar proyectos con sus pasos y estado de avance. | Media |
| RF-07 | Consultar guías básicas con pasos desplegables. | Media |
| RF-08 | Crear una tarjeta local con alias, ciudad y especialidad. | Media |
| RF-09 | Enviar un formulario de contacto simulado con validaciones. | Media |

### Requisitos no funcionales

| Código | Descripción | Prioridad |
|---|---|---|
| RNF-01 | Adaptarse a pantallas de escritorio y móvil sin desplazamiento horizontal innecesario. | Alta |
| RNF-02 | Mantener consistencia en colores, tipografía, navegación, botones y tarjetas mediante Tailwind y estilos base. | Alta |
| RNF-03 | Contar con estructura modular en componentes, páginas, datos y hooks. | Alta |
| RNF-04 | Mostrar etiquetas para controles, alternativas de texto en imágenes, estados de foco y mensajes de error comprensibles. | Alta |
| RNF-05 | Permitir la demostración inicial sin servidor propio, indicando claramente qué información es local o ficticia. | Alta |

## Pregunta 3 — Arquitectura de información y navegación

### Menú principal

**Inicio · Creadores · Colabora · Agenda · Proyectos · Guías**. El botón «Crear mi tarjeta» abre un formulario local. «Nosotros» y «Contacto» se incluyen en el pie de página para no saturar el menú principal.

Se propone este orden porque responde a las preguntas del usuario: ¿qué es NEXO?, ¿quiénes participan?, ¿qué puedo hacer con otras personas?, ¿qué actividades existen?, ¿qué puedo aprender?

### Sitemap

```text
NEXO Cosplay Club
├── Inicio (/)
│   ├── Header y navegación
│   ├── Hero / propuesta de valor
│   ├── Cómo funciona el club
│   ├── Colaboraciones destacadas
│   ├── Creadores destacados
│   ├── Proyectos y procesos
│   ├── Próximas actividades
│   ├── CTA / crear tarjeta
│   └── Footer
├── Creadores (/comunidad)
│   ├── Buscador y filtros por especialidad / ciudad
│   ├── Tarjeta local del visitante
│   └── Ficha de creador (/comunidad/:id)
├── Colabora (/colaboraciones)
│   ├── Filtros de propuestas
│   ├── Lista y guardados locales
│   └── Nueva propuesta local
├── Agenda (/eventos)
│   ├── Actividades de ejemplo
│   └── Mi agenda local
├── Proyectos (/proyectos)
│   ├── Filtro por estado
│   └── Detalle del proceso (/proyectos/:id)
├── Guías (/recursos)
│   └── Guías con pasos desplegables
├── Nosotros (/nosotros)
├── Contacto (/contacto)
└── No encontrada (404)
```

## Pregunta 4 — Línea gráfica e identidad visual

### Concepto

La identidad es **editorial, alegre y artesanal**, inspirada en fanzines, stickers de convenciones y talleres creativos. No imitamos marcas o personajes de franquicias conocidas. Buscamos una experiencia fácil de reconocer, amigable y accesible.

### Paleta de colores

| Rol | Color | Hex |
|---|---|---|
| Fondo principal | Crema cálido | `#FFF8ED` |
| Texto y trazos | Azul tinta | `#223348` |
| Acción primaria | Coral | `#FF644D` |
| Acento energético | Amarillo sol | `#FFD34E` |
| Acento de comunidad | Menta | `#70D9C4` |
| Acento informativo | Azul cielo | `#99D4FA` |
| Acento editorial | Rosa | `#FFACC2` |
| Texto secundario | Gris azulado | `#667582` |

### Tipografías

- **Bricolage Grotesque:** títulos, marca y encabezados. Tiene personalidad informal sin comprometer la lectura.
- **DM Sans:** navegación, textos largos, botones y formularios.

### Botones, iconos e imágenes

- **Botón primario:** coral con borde azul tinta, texto blanco y sombra desplazada.
- **Botón secundario:** blanco o tinta, esquinas redondeadas y contorno visible.
- **Iconografía:** Lucide, con trazo claro y tamaño coherente.
- **Imágenes:** espacios `<img>` con SVG de marcador visible. No hay fotografías reales ni personajes protegidos; se reemplazarán por imágenes propias o autorizadas.
- **Componentes:** cards blancas con borde y sombra tipo sticker, etiquetas de colores, filtros redondeados y bloques editoriales.

### Moodboard / Figma

Se incluyen guías y wireframes en `design/figma/` en formatos desktop y mobile. Los SVG pueden importarse a Figma. El equipo deberá crear el archivo Figma y compartir su enlace para la entrega.

## Pregunta 5 — Home e implementación inicial

### Wireframe

Archivos `wireframe-home-desktop.svg` y `wireframe-home-mobile.svg` incluidos en el paquete para importación a Figma.

### Estructura del Home

1. **Header + Navbar:** marca NEXO, navegación responsive y botón para crear la tarjeta local.
2. **Hero:** mensaje «No lo hagas solo. Hazlo con tu crew», fotografía reservada y dos acciones.
3. **Contenido principal:** tres beneficios, tablero de colaboración, creadores, proyecto destacado y agenda.
4. **CTA:** invitación a explorar guías o crear una tarjeta NEXO.
5. **Footer:** enlaces secundarios, información y carácter académico del proyecto.

### Componentes React implementados

`Header`, `Navbar`, `Hero`, `Footer`, `SectionHeading`, `ImageSlot`, `CreatorCard`, `CollabCard`, `EventCard`, `ProjectCard`, `JoinModal` y `PageIntro`.

La navegación se implementa con React Router DOM. Las interacciones usan componentes funcionales, Props, `useState` y `useEffect` mediante el hook `useLocalStorage`. El diseño utiliza Tailwind CSS 4 y estilos base reutilizables.

### Sustentación sugerida

Demostrar: menú móvil, ficha de un creador, búsqueda, crear y borrar una propuesta local, guardar un evento, abrir una guía y validar el formulario. Recalcar que estas interacciones son prototipos y que las fotografías aún son etiquetas de imagen.
