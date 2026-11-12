import { Bookmark, MapPin, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageSlot from './ImageSlot.jsx'
export default function CreatorCard({ creator, saved = false, onToggle = () => {} }) {
  return <article className="card-paper card-lift flex h-full flex-col overflow-hidden">
    <ImageSlot tipo="persona" src={creator.imagen} className="aspect-[5/3.7] border-b-2 border-ink" alt={`Fotografía pendiente para el perfil de ${creator.nombre}`}/>
    <div className="flex flex-1 flex-col p-5"><div className="flex items-start justify-between gap-3"><span className="chip bg-mint">{creator.rol}</span><button type="button" onClick={() => onToggle(creator.id)} aria-pressed={saved} aria-label={saved ? `Quitar a ${creator.nombre} de guardados` : `Guardar creador ${creator.nombre}`} title="Guardar en mi lista local" className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink ${saved ? 'bg-sun' : 'bg-white'}`}><Bookmark size={18} fill={saved ? 'currentColor' : 'none'}/></button></div>
      <h3 className="font-display mt-4 text-2xl font-extrabold tracking-tight">{creator.nombre} <span className="text-base font-semibold text-subtle">{creator.alias}</span></h3><p className="mt-2 text-sm leading-6 text-subtle">{creator.bio}</p><div className="mt-auto flex items-center justify-between gap-2 pt-5"><span className="flex items-center gap-1 text-xs font-bold text-subtle"><MapPin size={14}/>{creator.ciudad}</span><Link to={`/comunidad/${creator.id}`} className="inline-flex items-center gap-1 text-sm font-extrabold text-coral hover:underline">Ver ficha <ArrowUpRight size={16}/></Link></div>
    </div>
  </article>
}
