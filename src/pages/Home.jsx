import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import ProductCard from '../components/ProductCard'
import DataState from '../components/DataState'
import { formatoPrecio, precioFinal, categorias } from '../services/productService'
const categoryIcons = ['⌨','◉','♫','▤','⌁','☀']
export default function Home() {
  const { products, loading, error } = useStore()
  const hero = products.find(p => p.id === 1) ?? products[0]
  const featured = products.filter(p => p.destacado).slice(0, 4)
  return <>
    <section className="mx-auto max-w-7xl px-5 pt-9 lg:px-8 lg:pt-12">
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="relative grid min-h-[420px] overflow-hidden rounded-[28px] bg-nexo-hero text-nexo-hero-text md:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center px-8 py-12 md:px-10">
            <span className="spec-tag !border-nexo-hero-text/20 !text-nexo-hero-text">⌨ Setup · Accesorios</span>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl">Tu espacio.<br/><span className="text-nexo-primary-dark">Tu ritmo.</span></h1>
            <p className="mt-5 max-w-md leading-7 opacity-80">Accesorios para trabajar, estudiar y crear un setup que se sienta realmente tuyo.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/productos" className="rounded-xl bg-nexo-hero-text px-5 py-3 text-sm font-bold text-nexo-hero">Explorar productos →</Link><Link to="/tienda" className="rounded-xl border border-current/30 px-5 py-3 text-sm font-bold">Conocer NEXO</Link></div>
          </div>
          <div className="relative flex min-h-56 items-end justify-center p-6 md:min-h-0 md:items-center">
            <div className="absolute inset-8 rounded-full bg-white/20 blur-[70px]" />
            {hero ? <><img src={hero.imagen} alt={hero.nombre} className="relative z-10 aspect-square max-h-80 w-full rounded-3xl object-cover shadow-2xl md:-rotate-6"/><span className="absolute bottom-7 right-7 z-20 rounded-lg bg-nexo-surface px-3 py-2 text-xs font-semibold text-nexo-text">{hero.nombre} · {formatoPrecio(precioFinal(hero))}</span></> : <div className="relative grid h-56 w-56 place-items-center rounded-3xl bg-nexo-surface/20 text-4xl">NEXO</div>}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex flex-col justify-between rounded-[26px] bg-nexo-yellow p-7 text-[#282015]"><span className="text-xs font-bold uppercase tracking-widest">Catálogo</span><div><p className="text-5xl font-black">06</p><p className="mt-2 text-lg font-bold">Categorías para encontrar tu estilo</p></div><Link to="/productos" className="mt-3 font-semibold underline underline-offset-4">Explorar categorías →</Link></div>
          <div className="flex flex-col justify-between rounded-[26px] bg-nexo-pink p-7 text-[#281d23]"><span className="text-xs font-bold uppercase tracking-widest">NEXO Deals</span><div><p className="mt-4 text-2xl font-black">Actualiza tu espacio, no tu presupuesto.</p><p className="mt-2 text-sm">Encuentra descuentos en accesorios seleccionados.</p></div><Link to="/ofertas" className="mt-4 font-bold underline underline-offset-4">Ver ofertas →</Link></div>
        </div>
      </div>
    </section>
    <div className="mt-9 overflow-hidden border-y border-nexo-border bg-nexo-surface py-3 text-center text-xs font-extrabold tracking-[0.22em] text-nexo-primary">TECLADOS ✦ MOUSE ✦ AUDIO ✦ ESCRITORIO ✦ CONECTIVIDAD ✦ ILUMINACIÓN</div>
    <section className="section-wrap"><div className="section-heading"><div><span className="section-label">EXPLORA</span><h2>Todo para tu setup.</h2></div><Link to="/productos" className="link-accent">Ver catálogo →</Link></div><div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{categorias.map((categoria,i) => <Link key={categoria} to={`/productos?categoria=${encodeURIComponent(categoria)}`} className="nexo-card flex min-h-32 flex-col items-center justify-center gap-3 p-4 text-center transition-transform hover:-translate-y-1"><span className="text-4xl text-nexo-primary">{categoryIcons[i]}</span><strong className="text-sm">{categoria}</strong></Link>)}</div></section>
    <section className="section-wrap pt-4"><div className="section-heading"><div><span className="section-label">DESTACADOS</span><h2>Elegidos para mejorar tu espacio.</h2></div></div>{(loading || error) ? <DataState /> : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{featured.map(p => <ProductCard key={p.id} producto={p} />)}</div>}</section>
    <section className="section-wrap"><div className="flex flex-col items-start justify-between gap-6 rounded-[26px] bg-nexo-feature p-8 text-nexo-feature-text md:flex-row md:items-center md:p-12"><div><span className="text-xs font-black tracking-widest">NEXO DEALS</span><h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">Dale un upgrade a tu setup sin pagar de más.</h2><p className="mt-3 opacity-80">Productos seleccionados con descuentos especiales.</p></div><Link to="/ofertas" className="shrink-0 rounded-xl bg-nexo-yellow px-6 py-3 text-sm font-bold text-[#261f13]">Ver ofertas →</Link></div></section>
    <section className="section-wrap grid gap-4 pt-0 md:grid-cols-3">{[['✦','Productos seleccionados','Accesorios pensados para espacios cómodos y funcionales.'],['▤','Todo en un solo lugar','Tecnología y escritorio, sin complicaciones.'],['◎','Diseño que suma','Funcionalidad sin descuidar la estética.']].map(([icon,title,desc]) => <div key={title} className="nexo-card flex gap-4 p-6"><span className="text-3xl text-nexo-primary">{icon}</span><div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-nexo-muted">{desc}</p></div></div>)}</section>
  </>
}
