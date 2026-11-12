import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageSlot from './ImageSlot.jsx'
export default function ProjectCard({ proyecto }) {
 return <article className="card-paper card-lift overflow-hidden"><ImageSlot tipo="proyecto" src={proyecto.imagen} alt={`Fotografía por definir del proyecto ${proyecto.titulo}`} className="aspect-[5/3.6] border-b-2 border-ink"/><div className="p-5"><div className="flex flex-wrap items-center justify-between gap-2"><span className="chip bg-rose">{proyecto.categoria}</span><span className="text-xs font-extrabold text-subtle">{proyecto.estado}</span></div><h3 className="font-display mt-4 text-2xl font-extrabold leading-tight">{proyecto.titulo}</h3><p className="mt-2 text-sm leading-7 text-subtle">{proyecto.resumen}</p><div className="mt-5 flex items-center justify-between gap-3 border-t border-dashed border-ink/30 pt-4"><span className="text-xs font-bold">por {proyecto.autor}</span><Link to={`/proyectos/${proyecto.id}`} className="inline-flex items-center gap-1 text-sm font-extrabold text-coral hover:underline">Ver proceso <ArrowUpRight size={16}/></Link></div></div></article>
}
