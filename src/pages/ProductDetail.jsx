import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatoPrecio, precioFinal } from '../services/productService'
export default function ProductDetail() {
  const { id } = useParams()
  const { products, loading, error, reload, addToCart } = useStore()
  const [added, setAdded] = useState(false)
  const product = products.find(p => p.id === Number(id))
  if (loading) return <div className="section-wrap text-nexo-muted">Cargando producto...</div>
  if (error) return <div className="section-wrap"><p className="text-nexo-danger">{error}</p><button className="btn-primary mt-4" onClick={reload}>Reintentar</button></div>
  if (!product) return <div className="section-wrap"><h1 className="page-title">Producto no encontrado.</h1><Link to="/productos" className="link-accent mt-5 inline-block">Volver al catálogo →</Link></div>
  const add = () => { if (addToCart(product)) { setAdded(true); setTimeout(() => setAdded(false),1400) } }
  return <section className="section-wrap"><nav className="mb-7 text-sm text-nexo-muted"><Link to="/">Inicio</Link> / <Link to="/productos">Productos</Link> / {product.nombre}</nav><div className="grid gap-10 lg:grid-cols-2"><div className="nexo-card relative overflow-hidden"><img src={product.imagen} alt={product.nombre} className="aspect-square w-full object-cover"/>{product.oferta && <span className="absolute left-5 top-5 rounded-lg bg-nexo-primary px-4 py-2 font-extrabold text-nexo-on-primary">-{product.descuento}%</span>}</div><div className="flex flex-col justify-center"><span className="section-label">{product.categoria}</span><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{product.nombre}</h1><p className="mt-6 text-lg leading-8 text-nexo-muted">{product.descripcion}</p><div className="mt-8 flex items-end gap-4"><strong className="text-4xl font-black">{formatoPrecio(precioFinal(product))}</strong>{product.oferta && <span className="pb-1 text-lg text-nexo-muted line-through">{formatoPrecio(product.precio)}</span>}</div><p className={`mt-5 font-semibold ${product.stock === 0 ? 'text-nexo-danger' : product.stock <= 5 ? 'text-nexo-warning' : 'text-nexo-success'}`}>{product.stock === 0 ? 'Sin stock' : `${product.stock} unidades disponibles`}</p><button className="btn-primary mt-8 max-w-sm" disabled={product.stock === 0} onClick={add}>{product.stock === 0 ? 'Sin stock' : added ? '✓ Agregado al carrito' : '＋ Agregar al carrito'}</button><p className="mt-5 text-sm text-nexo-muted">NEXO Setup es una demostración académica. No se realizan pagos reales.</p></div></div></section>
}
