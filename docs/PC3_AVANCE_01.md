# PC3 — Avance N.º 1: Proyecto web con React y Tailwind CSS

**Curso:** JavaScript Avanzado (UTP)  
**Nombre del proyecto:** **NEXO Cosplay**  
**Tema:** Comunidad cosplay  
**Tipo:** Prototipo académico de sitio comunitario  
**Integrantes:** [Completar con los integrantes reales]

## Pregunta 1. Definición del proyecto y objetivos

### Nombre y descripción

**NEXO Cosplay** es una página web dirigida a personas interesadas en el cosplay, especialmente jóvenes que crean o quieren comenzar a crear vestuarios, accesorios, maquillaje y fotografías. Su propuesta es reunir en un mismo espacio ejemplos de creadores, una galería de trabajos y una agenda de actividades relacionadas con esta afición.

El proyecto busca atender la necesidad de descubrir a otras personas con intereses similares, compartir ideas y conocer oportunidades para participar en la comunidad. Por tratarse del primer avance, se utilizan perfiles y eventos ficticios de demostración.

### Objetivo general

Desarrollar una página web responsive que facilite la exploración y la interacción inicial entre personas interesadas en el cosplay, utilizando React, Vite y Tailwind CSS.

### Objetivos específicos

1. Organizar información de creadores, trabajos y actividades en secciones fáciles de encontrar.
2. Implementar una interfaz atractiva y adaptable a escritorio y móviles mediante componentes reutilizables.
3. Incorporar interacciones básicas, como la navegación, búsqueda de perfiles, guardado de actividades y un formulario de contacto, para demostrar el funcionamiento de React.

## Pregunta 2. Requisitos funcionales y no funcionales

### Requisitos funcionales

| Código | Descripción | Prioridad |
|---|---|---|
| RF-01 | El usuario podrá navegar entre Inicio, Comunidad, Eventos, Galería, Nosotros y Contacto. | Alta |
| RF-02 | El usuario podrá consultar perfiles de creadores y sus especialidades. | Alta |
| RF-03 | El usuario podrá buscar y filtrar los perfiles por categoría. | Alta |
| RF-04 | El usuario podrá visualizar actividades y guardar eventos en una agenda local de demostración. | Media |
| RF-05 | El usuario podrá utilizar un formulario de contacto con validaciones de datos. | Alta |
| RF-06 | El usuario podrá marcar perfiles como favoritos (me gusta) desde las tarjetas. | Media |
| RF-07 | El usuario podrá registrarse en la experiencia de demostración con nombre y correo, almacenados localmente. | Media |

### Requisitos no funcionales

| Código | Descripción | Prioridad |
|---|---|---|
| RNF-01 | La interfaz deberá adaptarse al menos a pantallas móviles y de escritorio. | Alta |
| RNF-02 | La navegación deberá ser clara y mantener el mismo Header, Navbar y Footer entre secciones. | Alta |
| RNF-03 | Los controles y formularios deberán tener etiquetas, contraste legible y estados visibles de interacción. | Alta |
| RNF-04 | El código se organizará mediante componentes reutilizables y separación entre datos, páginas y elementos compartidos. | Alta |
| RNF-05 | Los recursos gráficos deberán ser ligeros y visualmente consistentes para facilitar una carga razonable. | Media |

## Pregunta 3. Arquitectura de información y navegación

### Menú principal

**Inicio | Comunidad | Eventos | Galería | Nosotros | Contacto** y un botón **Únete a NEXO**.

El contenido se agrupa por propósito: presentación del sitio, descubrimiento de miembros, actividades, imágenes, explicación del proyecto y contacto. Así, una persona nueva puede entender NEXO desde la Home y después entrar directamente a la sección que le interese.

### Sitemap

```text
NEXO Cosplay
├── Inicio (/)
│   ├── Header y navegación
│   ├── Hero principal
│   ├── Beneficios de la comunidad
│   ├── Creadores destacados
│   ├── Galería / historia visual
│   ├── Próximos eventos
│   └── CTA para unirse y Footer
├── Comunidad (/comunidad)
│   ├── Buscador y filtros
│   ├── Tarjetas de creadores
│   └── Vista ampliada de perfil
├── Eventos (/eventos)
│   ├── Agenda de eventos ficticios
│   └── Filtro de eventos guardados
├── Galería (/galeria)
│   └── Muestra visual cosplay
├── Nosotros (/nosotros)
│   ├── Presentación del proyecto
│   └── Valores
├── Contacto (/contacto)
│   └── Formulario de contacto
└── Página 404 (ruta inexistente)
```

## Pregunta 4. Línea gráfica e identidad visual

NEXO utilizará un estilo editorial juvenil, inspirado en la creatividad de eventos y convenciones, sin copiar personajes ni marcas existentes. Se priorizarán fondos oscuros, imágenes grandes, títulos expresivos y acentos de alto contraste.

### Paleta

| Uso | Color | Código |
|---|---|---|
| Fondo principal | Azul noche | `#151629` |
| Paneles | Índigo oscuro | `#202237` |
| Acento principal / CTA | Verde lima | `#D6FF91` |
| Acento secundario | Lila | `#B69BFF` |
| Acento decorativo | Rosa | `#FF9AB7` |
| Texto principal | Blanco cálido | `#F7F6FC` |
| Texto secundario | Gris lavanda | `#AFB0C7` |

### Tipografías

- **Space Grotesk** para titulares y marca.
- **DM Sans** para párrafos, navegación y formularios.

### Botones, iconos, imágenes y componentes

- **Botón primario:** fondo lima, texto oscuro, esquinas redondeadas y estado hover discreto.
- **Botón secundario:** fondo transparente, borde gris violáceo y texto claro.
- **Iconografía:** trazos simples y coherentes mediante `lucide-react`.
- **Imágenes:** ilustraciones vectoriales originales de cosplayers ficticios; encuadres verticales consistentes.
- **Componentes:** tarjetas con borde suave, fondos oscuros, filtros redondeados, cabeceras de sección y pie de página común.

### Material gráfico para Figma

El directorio `design/figma/` incluye una **guía de estilos en escritorio y móvil**, exportada en SVG para su importación a Figma. Se preparó como referencia editable/importable. **La importación a un archivo Figma y el enlace final deben realizarse en la cuenta del equipo.**

## Pregunta 5. Estructura del Home e implementación inicial

### Wireframes

Se incluyen dos wireframes vectoriales en `design/figma/`, uno para **desktop** y otro para **mobile**, siguiendo las secciones del Home que se implementaron en React.

### Estructura del Home

1. **Header:** franja informativa y contenedor global.
2. **Navbar:** marca, rutas de navegación y acceso a unirse. En móvil usa un botón para abrir/cerrar el menú.
3. **Hero:** propuesta de valor, texto principal, CTAs e ilustración.
4. **Contenido principal:** valores de la comunidad, creadores, galería y agenda de eventos.
5. **CTA final:** invitación a participar en NEXO.
6. **Footer:** accesos secundarios e información del proyecto académico.

### Implementación realizada

- Proyecto inicial con **React + Vite + Tailwind CSS 4**.
- Navegación SPA con **React Router DOM**, responsive y página 404.
- Componentes reutilizables `Header`, `Navbar`, `Hero`, `Footer` y tarjetas.
- Datos demostrativos organizados en `src/data/content.js`.
- Interacciones sencillas mediante Hooks, Props y eventos.

### Evidencia sugerida para la exposición

Mostrar el Home en desktop y mobile, el menú hamburguesa, una ruta desde Navbar, las tarjetas de creadores, un filtro funcionando y el formulario. Para la entrega de Figma, importar los cuatro SVG y compartir el enlace público/lectura con el profesor.
