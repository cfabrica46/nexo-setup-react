import { Link } from 'react-router-dom'
export default function Footer() {
  return <footer className="mt-16 border-t border-nexo-border bg-nexo-surface">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8">
      <div><div className="text-2xl font-black tracking-tight">NEXO <span className="text-nexo-primary">SETUP</span></div><p className="mt-4 max-w-xs text-sm leading-7 text-nexo-muted">Tu espacio. Tu ritmo. Accesorios para crear un setup que se sienta tuyo.</p></div>
      <div><h3 className="font-bold">Explorar</h3><nav className="mt-4 grid gap-3 text-sm text-nexo-muted"><Link to="/productos">Productos</Link><Link to="/ofertas">Ofertas</Link><Link to="/tienda">Tienda</Link><Link to="/nosotros">Nosotros</Link></nav></div>
      <div><h3 className="font-bold">Estamos aquí</h3><p className="mt-4 text-sm leading-7 text-nexo-muted">Lima, Perú<br/>contacto@nexosetup.pe<br/>Lunes a sábado</p><Link to="/contacto" className="mt-3 inline-block text-sm font-semibold text-nexo-primary">Contáctanos →</Link></div>
    </div>
    <div className="border-t border-nexo-border px-5 py-4 text-center text-xs text-nexo-muted">© {new Date().getFullYear()} NEXO Setup · Proyecto universitario · Compra y autenticación simuladas</div>
  </footer>
}
