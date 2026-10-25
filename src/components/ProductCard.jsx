import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatoPrecio, precioFinal } from '../services/productService'

export default function ProductCard({ producto }) {
  const { addToCart } = useStore()
  const [added, setAdded] = useState(false)
  const discounted = producto.oferta && producto.descuento > 0
  const empty = producto.stock === 0
  const add = () => {
    if (addToCart(producto)) { setAdded(true); window.setTimeout(() => setAdded(false), 1300) }
  }
  return <article className="nexo-card group flex h-full flex-col overflow-hidden">
    <Link to={`/productos/${producto.id}`} className="relative block aspect-square overflow-hidden bg-nexo-surface-alt">
      <img src={producto.imagen} alt={producto.nombre} loading="lazy" className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05] ${empty ? 'opacity-50' : ''}`} />
      {discounted && <span className="absolute left-3 top-3 rounded-lg bg-nexo-primary px-3 py-1 text-xs font-bold text-nexo-on-primary">-{producto.descuento}%</span>}
      {empty && <span className="absolute right-3 top-3 rounded-lg bg-nexo-danger px-3 py-1 text-xs font-bold text-white">Agotado</span>}
    </Link>
    <div className="flex flex-1 flex-col p-5">
      <span className="spec-label">{producto.categoria}</span>
      <Link to={`/productos/${producto.id}`} className="mt-2 text-lg font-bold leading-6 hover:text-nexo-primary">{producto.nombre}</Link>
      <p className="mt-2 line-clamp-2 text-sm text-nexo-muted">{producto.descripcion}</p>
      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-xl text-nexo-text">{formatoPrecio(precioFinal(producto))}</strong>
          {discounted && <span className="text-xs text-nexo-muted line-through">{formatoPrecio(producto.precio)}</span>}
        </div>
        <p className={`mt-2 text-xs font-semibold ${empty ? 'text-nexo-danger' : producto.stock <= 5 ? 'text-nexo-warning' : 'text-nexo-success'}`}>
          {empty ? 'Sin stock' : producto.stock <= 5 ? `Últimas ${producto.stock} unidades` : `En stock: ${producto.stock}`}
        </p>
        <button type="button" className="btn-primary mt-4 w-full" disabled={empty} onClick={add}>{empty ? 'Sin stock' : added ? '✓ Agregado' : '＋ Agregar al carrito'}</button>
        <Link className="mt-3 block text-center text-xs font-bold text-nexo-primary hover:underline" to={`/productos/${producto.id}`}>Ver producto →</Link>
      </div>
    </div>
  </article>
}
