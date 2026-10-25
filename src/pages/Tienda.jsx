import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import DataState from '../components/DataState'
import { useStore } from '../context/StoreContext'
import { categorias } from '../services/productService'
export default function Tienda() {
  const { products, loading, error } = useStore()
  const essentials = products.filter(p => [1,7,9].includes(p.id))
  const recommend = products.filter(p => p.destacado).slice(0,4)
  return <>
    <section className="section-wrap"><div className="rounded-[28px] bg-nexo-feature px-8 py-14 text-nexo-feature-text sm:px-14"><span className="text-xs font-black tracking-widest">NEXO STORE</span><h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">Tu próxima gran idea empieza en tu escritorio.</h1><p className="mt-5 max-w-xl leading-7">Una selección para trabajar, crear y disfrutar cada momento frente a la pantalla.</p><Link className="mt-8 inline-block rounded-xl bg-nexo-yellow px-6 py-3 font-bold text-[#241e12]" to="/productos">Explorar colección →</Link></div></section>
    <section className="section-wrap pt-2"><div className="section-heading"><div><span className="section-label">CATEGORÍAS</span><h2>Encuentra tu próximo upgrade.</h2></div></div><div className="grid grid-cols-2 gap-3 md:grid-cols-3">{categorias.map((c,i) => <Link key={c} to={`/productos?categoria=${encodeURIComponent(c)}`} className="nexo-card group flex min-h-28 items-center justify-between p-6"><strong className="text-lg">{c}</strong><span className="text-2xl text-nexo-primary transition-transform group-hover:translate-x-1">↗</span></Link>)}</div></section>
    <section className="section-wrap pt-2"><div className="section-heading"><div><span className="section-label">SETUP ESENCIAL</span><h2>Tres piezas para empezar bien.</h2></div></div>{loading || error ? <DataState count={3}/> : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{essentials.map(p => <ProductCard key={p.id} producto={p}/>)}</div>}</section>
    <section className="section-wrap pt-2"><div className="section-heading"><div><span className="section-label">RECOMENDADOS</span><h2>Lo que destaca en NEXO.</h2></div><Link to="/productos" className="link-accent">Ver productos →</Link></div>{loading || error ? <DataState/> : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{recommend.map(p => <ProductCard key={p.id} producto={p}/>)}</div>}</section>
  </>
}
