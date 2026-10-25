import { Link } from 'react-router-dom'

export default function Nosotros() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="text-xs font-bold uppercase tracking-widest text-nexo-primary">Sobre NEXO</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Tu espacio debería sentirse tan único como tú.</h1>
      <p className="mt-7 max-w-3xl text-base leading-8 text-nexo-muted">NEXO Setup es una tienda ficticia de accesorios tecnológicos pensada para quienes estudian, programan, trabajan desde casa o disfrutan de su escritorio. Nuestra propuesta reúne productos útiles con una estética moderna, sin complicaciones.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          ['Productividad', 'Herramientas que hacen más cómoda tu jornada.'],
          ['Estilo', 'Accesorios que se integran visualmente a tu espacio.'],
          ['Versatilidad', 'Opciones para estudiar, crear y jugar de forma casual.'],
        ].map(([titulo, descripcion]) => (
          <article key={titulo} className="rounded-2xl border border-nexo-border bg-nexo-surface p-7">
            <div className="mb-5 h-1 w-12 rounded bg-nexo-primary" />
            <h2 className="text-xl font-bold">{titulo}</h2>
            <p className="mt-3 text-sm leading-7 text-nexo-muted">{descripcion}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-nexo-border bg-nexo-surface p-8 sm:flex sm:items-center sm:justify-between sm:gap-5">
        <div><h2 className="text-2xl font-bold">¿Listo para mejorar tu setup?</h2><p className="mt-2 text-nexo-muted">Descubre nuestra selección de accesorios.</p></div>
        <Link to="/productos" className="mt-5 inline-block rounded-xl bg-nexo-primary px-6 py-3 text-sm font-semibold text-white hover:bg-nexo-primary-hover sm:mt-0">Explorar catálogo</Link>
      </div>
    </div>
  )
}
