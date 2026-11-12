const defaults = {
  hero: '/assets/placeholders/hero.svg',
  persona: '/assets/placeholders/persona.svg',
  proyecto: '/assets/placeholders/proyecto.svg',
  evento: '/assets/placeholders/evento.svg',
}

export default function ImageSlot({ tipo = 'proyecto', src, alt = '', className = '', label = 'FOTO POR DEFINIR', loading = 'lazy' }) {
  return (
    <div className={`image-frame ${className}`}>
      <img src={src || defaults[tipo]} alt={alt} loading={loading} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = defaults[tipo] }} />
      <span className="image-label">{label}</span>
    </div>
  )
}
