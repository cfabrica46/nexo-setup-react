import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import DataState from '../components/DataState'
import { useStore } from '../context/StoreContext'
export default function Ofertas() {
  const { products, loading, error } = useStore()
  const deals = products.filter(p => p.oferta && (p.descuento || 0) > 0)
  return <section className="section-wrap"><div className="rounded-[26px] bg-nexo-pink p-8 text-[#2d1b23] sm:p-12"><span className="text-xs font-black tracking-widest">NEXO DEALS</span><h1 className="mt-3 text-4xl font-black sm:text-6xl">Ofertas para tu próximo upgrade.</h1><p className="mt-4 max-w-xl">Los mismos accesorios que te gustan, a precios especiales. Aprovecha antes de que vuelen.</p></div><div className="section-heading mt-10"><div><span className="section-label">PROMOCIONES</span><h2>Selección con descuento</h2></div><Link to="/productos" className="link-accent">Todo el catálogo →</Link></div>{loading || error ? <DataState count={4}/> : deals.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{deals.map(p => <ProductCard key={p.id} producto={p}/>)}</div> : <p className="nexo-card p-10">No hay ofertas disponibles por ahora.</p>}</section>
}
