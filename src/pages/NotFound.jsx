import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-8xl font-black text-nexo-primary">404</p>
      <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Parece que este setup no existe.</h1>
      <p className="mt-4 text-nexo-muted">La página que buscas no está disponible.</p>
      <Link to="/" className="mt-8 rounded-xl bg-nexo-primary px-6 py-3 text-sm font-semibold text-white hover:bg-nexo-primary-hover">Volver al inicio</Link>
    </section>
  )
}
