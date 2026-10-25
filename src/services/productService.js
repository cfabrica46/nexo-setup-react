const API_URL = (import.meta.env.VITE_API_URL || 'https://nexo-setup.onrender.com').replace(/\/$/, '')

export async function obtenerProductos(signal) {
  const res = await fetch(`${API_URL}/productos`, { signal })
  if (!res.ok) throw new Error(`Error REST: ${res.status}`)
  const json = await res.json()
  if (!Array.isArray(json)) throw new Error('La respuesta no contiene una lista')
  return json
}

export function precioFinal(producto) {
  return producto.oferta ? producto.precio * (1 - (producto.descuento || 0) / 100) : producto.precio
}

export const formatoPrecio = (n) => new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(n)
export const categorias = ['Teclados', 'Mouse', 'Audio', 'Escritorio', 'Conectividad', 'Iluminación']
export const imagenes = ['keyboard-01','keyboard-02','mouse-01','mouse-02','audio-01','audio-02','desk-01','desk-02','connectivity-01','connectivity-02','light-01','light-02'].map(n => `/assets/products/${n}.jpg`)
