# NEXO Cosplay — PC3 Avance N.º 1

**Universidad:** UTP · JavaScript Avanzado · **Tecnologías:** React + Vite + Tailwind CSS.

Sitio web académico de una **comunidad cosplay ficticia** para mostrar creadores, ideas, eventos y contenido visual. Mantiene la marca **NEXO**, pero no reutiliza el negocio e-commerce de la versión Angular.

## Ejecutar

```bash
npm install
npm run dev
```

Para generar el build de producción:

```bash
npm run build
npm run preview
```

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Home con Header, Navbar, Hero, comunidad, eventos, CTA y Footer |
| `/comunidad` | Perfiles de muestra, búsqueda, filtros, likes y perfil emergente |
| `/eventos` | Agenda ficticia y guardado local de eventos |
| `/galeria` | Muestra visual de diseños cosplay originales |
| `/nosotros` | Propósito y valores de NEXO |
| `/contacto` | Formulario con validaciones y confirmación simulada |
| cualquier otra | 404 personalizada |

## Componentes reutilizables

`Header`, `Navbar`, `Hero`, `Footer`, `CreatorCard`, `EventCard`, `SectionHeading`, `JoinModal` y `ScrollToTop`.

Se usan `Props`, `useState`, `useEffect`, `map()`, eventos, condicionales, enrutamiento con React Router y estilos responsivos con Tailwind CSS.

## Importante

- Los perfiles, nombres, encuentros y fechas son **datos demostrativos inventados para esta actividad**, no información real.
- Las ilustraciones vectoriales incluidas son originales y no reproducen personajes de franquicias.
- **No existe backend ni autenticación real**. El registro demo, los me gusta y la agenda se guardan en el LocalStorage del navegador.
- El alcance entregado corresponde al **Avance 1**, no a una entrega final con JSON Server o servicios REST.

## Documentación del avance

- [`docs/PC3_AVANCE_01.md`](docs/PC3_AVANCE_01.md): respuestas a las cinco preguntas.
- [`docs/MAPA_CUMPLIMIENTO.md`](docs/MAPA_CUMPLIMIENTO.md): comprobación de requisitos.
- [`docs/FIGMA_INSTRUCCIONES.md`](docs/FIGMA_INSTRUCCIONES.md): incorporación de diseño en Figma.
- [`design/figma/`](design/figma/): guía visual y wireframes de escritorio y móvil, listos para importar como SVG.

## Vercel

Se incluye `vercel.json` para que las rutas internas funcionen al actualizar directamente una URL. Importar el repositorio a Vercel, Framework Preset **Vite**, comando de build `npm run build`, salida `dist`.

## Rama recomendada

El repositorio de tienda puede conservarse en su rama original. Crea otra rama antes de reemplazar archivos:

```bash
git switch -c feature/nexo-cosplay-pc3
```

Luego incorpora el contenido de este ZIP, ejecuta `npm install`, prueba, confirma y haz push:

```bash
git add -A
git commit -m "feat: implement NEXO cosplay PC3 avance 1"
git push -u origin feature/nexo-cosplay-pc3
```

**Nota de Vercel:** para que el proyecto publicado muestre esta rama, usa una implementación Preview de la rama o configúrala como rama de producción. No necesitas sobrescribir `main`.
