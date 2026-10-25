import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import ProductCard from '../components/ProductCard'
import DataState from '../components/DataState'
import { categorias } from '../services/productService'
export default function Productos() {
  const { products, loading, error } = useStore()
  const [search, setSearch] = useState('')
  const [params, setParams] = useSearchParams()
  const category = params.get('categoria') || 'Todos'
  const filtered = useMemo(() => products.filter(p => (category === 'Todos' || p.categoria === category) && `${p.nombre} ${p.categoria} ${p.descripcion}`.toLowerCase().includes(search.trim().toLowerCase())), [products, category, search])
  return <section className="section-wrap"><span className="section-label">CATÁLOGO</span><h1 className="page-title">Todo para tu setup.</h1><p className="page-subtitle">Encuentra el accesorio que encaje contigo. Explora nuestra selección y construye tu espacio ideal.</p>
    <div className="nexo-card mt-8 p-5"><label htmlFor="buscar" className="block text-sm font-bold">Buscar productos</label><input id="buscar" type="search" value={search} onChange={e => setSearch(e.target.value)} className="input-nexo mt-2" placeholder="Teclado, mouse, audio..."/><div className="mt-5 flex flex-wrap gap-2">{['Todos', ...categorias].map(c => <button key={c} onClick={() => setParams(c === 'Todos' ? {} : { categoria: c })} className={`rounded-lg border px-4 py-2 text-sm font-bold transition-colors ${c === category ? 'border-nexo-primary bg-nexo-primary text-nexo-on-primary' : 'border-nexo-border text-nexo-muted hover:border-nexo-primary'}`}>{c}</button>)}</div></div>
    <div className="mt-7 flex items-center justify-between text-sm text-nexo-muted"><span>{filtered.length} productos</span><Link to="/ofertas" className="link-accent">Ver ofertas →</Link></div>
    <div className="mt-5">{loading || error ? <DataState count={8}/> : filtered.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filtered.map(p => <ProductCard key={p.id} producto={p}/>)}</div> : <div className="nexo-card p-12 text-center">No encontramos productos para esa búsqueda.</div>}</div>
  </section>
}
