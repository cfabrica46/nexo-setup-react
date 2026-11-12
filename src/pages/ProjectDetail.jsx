import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, PencilRuler } from 'lucide-react'
import ImageSlot from '../components/ImageSlot.jsx'
import { proyectos } from '../data/content.js'
import NotFound from './NotFound.jsx'
export default function ProjectDetail() {
 const {id} = useParams();const p=proyectos.find(x=>x.id===id);if(!p)return <NotFound/>
 return <section className="section-space"><div className="container-nexo"><Link to="/proyectos" className="mb-7 inline-flex items-center gap-2 text-sm font-extrabold"><ArrowLeft size={16}/> Volver a proyectos</Link><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]"><ImageSlot tipo="proyecto" src={p.imagen} alt={`Fotografía pendiente de ${p.titulo}`} className="card-paper aspect-[5/4] overflow-hidden"/><div><span className="chip bg-rose">{p.categoria} · {p.estado}</span><h1 className="font-display mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{p.titulo}</h1><p className="mt-2 text-sm font-bold text-subtle">Proyecto de ejemplo por {p.autor}</p><p className="mt-6 text-base leading-8">{p.resumen}</p></div></div><div className="mt-12 max-w-3xl"><h2 className="font-display flex items-center gap-3 text-3xl font-extrabold"><PencilRuler size={28} className="text-coral"/> Así se hizo</h2><ol className="mt-6 grid gap-4">{p.pasos.map((step,i)=><li key={step.titulo} className="card-soft flex gap-5 p-5"><span className="font-display text-3xl font-extrabold text-coral">0{i+1}</span><div><h3 className="font-display text-xl font-extrabold">{step.titulo}</h3><p className="mt-2 text-sm leading-7 text-subtle">{step.detalle}</p></div></li>)}</ol></div></div></section>
}
