import { useState } from 'react'

const inicial = { nombre: '', correo: '', motivo: '', mensaje: '' }
const campo = 'w-full rounded-xl border border-nexo-border bg-nexo-bg px-4 py-3 text-sm text-nexo-text outline-none placeholder:text-nexo-muted focus:border-nexo-primary'

export default function Contacto() {
  const [formulario, setFormulario] = useState(inicial)
  const [error, setError] = useState('')
  const [enviado, setEnviado] = useState(false)

  const actualizar = (evento) => {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value })
    setError('')
    setEnviado(false)
  }

  const enviar = (evento) => {
    evento.preventDefault()
    if (Object.values(formulario).some((valor) => !valor.trim())) {
      setError('Completa todos los campos antes de continuar.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)) {
      setError('Ingresa un correo electrónico válido.')
      return
    }
    if (formulario.mensaje.trim().length < 10) {
      setError('El mensaje debe tener al menos 10 caracteres.')
      return
    }
    setEnviado(true)
    setError('')
    setFormulario(inicial)
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-nexo-primary">Contacto</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Hablemos de tu próximo setup.</h1>
        <p className="mt-6 max-w-md leading-8 text-nexo-muted">¿Tienes alguna consulta sobre nuestros accesorios? Completa el formulario y te mostraremos una confirmación.</p>
        <p className="mt-8 rounded-xl border border-nexo-border bg-nexo-surface p-5 text-sm leading-7 text-nexo-muted">Esta es una demostración académica. Los mensajes no se envían ni almacenan en un servidor.</p>
      </div>
      <form onSubmit={enviar} noValidate className="space-y-5 rounded-2xl border border-nexo-border bg-nexo-surface p-6 sm:p-8">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm font-semibold">Nombre</label>
          <input id="nombre" name="nombre" value={formulario.nombre} onChange={actualizar} placeholder="Tu nombre" className={campo} />
        </div>
        <div>
          <label htmlFor="correo" className="mb-2 block text-sm font-semibold">Correo electrónico</label>
          <input id="correo" name="correo" type="email" value={formulario.correo} onChange={actualizar} placeholder="tu@correo.com" className={campo} />
        </div>
        <div>
          <label htmlFor="motivo" className="mb-2 block text-sm font-semibold">Motivo</label>
          <select id="motivo" name="motivo" value={formulario.motivo} onChange={actualizar} className={campo}>
            <option value="">Selecciona una opción</option>
            <option value="Productos">Consulta de productos</option>
            <option value="Disponibilidad">Disponibilidad</option>
            <option value="Otro">Otro motivo</option>
          </select>
        </div>
        <div>
          <label htmlFor="mensaje" className="mb-2 block text-sm font-semibold">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" value={formulario.mensaje} onChange={actualizar} placeholder="Cuéntanos tu consulta..." className={campo} />
        </div>
        {error && <p role="alert" className="text-sm text-nexo-danger">{error}</p>}
        {enviado && <p role="status" className="rounded-lg border border-nexo-success/30 bg-nexo-success/10 p-3 text-sm text-nexo-success">Formulario validado correctamente. Esta es una confirmación simulada.</p>}
        <button type="submit" className="w-full rounded-xl bg-nexo-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-nexo-primary-hover">Enviar consulta</button>
      </form>
    </section>
  )
}
