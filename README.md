# NEXO Setup — React (AP3)

Migración académica de NEXO Angular a React con Tailwind CSS, React Router DOM, Fetch API y JSON Server.

## Iniciar

```bash
npm install
npm run dev
```

**Backend local alternativo** (otro terminal):

```bash
npx json-server --watch db.json --port 3000
```

Por defecto el frontend usa la API pública existente `https://nexo-setup.onrender.com`. Para usar el backend local, cree un archivo `.env.local` con `VITE_API_URL=http://localhost:3000` y reinicie Vite. Los datos iniciales del backend se encuentran en `db.json`.

## Rutas

- `/` Inicio
- `/nosotros` Información de NEXO
- `/productos` Catálogo y filtros
- `/productos/:id` Detalle de producto
- `/ofertas` Descuentos
- `/tienda` Colecciones
- `/contacto` Formulario con validaciones
- `/login` Login simulado
- `/mi-cuenta` Datos de sesión
- `/dashboard` Estadísticas y CRUD simulado
- `/carrito` Carrito y compra simulada
- `*` 404

**Demo login:** `admin@nexosetup.pe` / `nexo123`

## Restricciones de la simulación

No existe autenticación real ni pasarela de pagos. Los cambios CRUD, la sesión y el carrito se conservan solamente en el LocalStorage del navegador. El servicio REST expone el catálogo original desde JSON Server.

## Importante: imágenes

Los 12 archivos JPG deben estar en `public/assets/products/` manteniendo los nombres referidos por `db.json`. Esta entrega de código no incluye las imágenes binarias.

## AP3: evidencia

- Componentes funcionales y props: `src/components/ProductCard.jsx`
- React Router DOM: `src/App.jsx`
- `useState`, `useEffect` y Fetch: `src/context/StoreContext.jsx` y `src/services/productService.js`
- `map()` y renderizado condicional: `src/pages/Productos.jsx`
- Formulario y eventos: `src/pages/Contacto.jsx`, `src/pages/Login.jsx`, `src/pages/Dashboard.jsx`
- Tailwind CSS y responsive: `src/index.css`, componentes y páginas
- API simulada: `db.json`

## Publicación

```bash
npm run build
```

Publicar `dist/` en un servicio con rewrite SPA hacia `index.html` para rutas directas. Verificar acceso público a JSON Server y habilitación CORS. Completar aquí los enlaces reales del despliegue, GitHub e integrantes del grupo.
