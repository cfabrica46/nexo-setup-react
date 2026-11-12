import { useMemo, useState } from 'react'
import { Bookmark, CalendarDays } from 'lucide-react'
import PageIntro from '../components/PageIntro.jsx'
import EventCard from '../components/EventCard.jsx'
import { eventos } from '../data/content.js'
export default function Eventos({savedEvents,toggleEvent}) {
  const [savedOnly,setSavedOnly] = useState(false)
  const [kind,setKind] = useState('Todos')
  const filtered = useMemo(()=>eventos.filter(e=>(kind==='Todos'||e.modalidad===kind)&&(!savedOnly||savedEvents.includes(e.id))),[kind,savedOnly,savedEvents])
  return <><PageIntro eyebrow="Agenda del club" title="Encuéntranos fuera de la pantalla." description="Talleres, encuentros y salidas de ejemplo. Guarda actividades para imaginar tu próxima aventura en comunidad." bg="bg-sun"/>
    <section className="section-space"><div className="container-nexo"><div className="mb-7 flex flex-wrap items-center gap-2">{['Todos','Encuentro','Taller','Salida'].map(t=><button key={t} className="filter-chip" aria-pressed={kind===t} onClick={()=>setKind(t)}>{t}</button>)}<button className={`ml-auto flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2.5 text-xs font-extrabold ${savedOnly?'bg-mint':'bg-white'}`} aria-pressed={savedOnly} onClick={()=>setSavedOnly(p=>!p)}><Bookmark size={15}/> Mi agenda ({savedEvents.length})</button></div>
      {filtered.length?<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(e=><EventCard key={e.id} evento={e} saved={savedEvents.includes(e.id)} onToggle={toggleEvent}/>)}</div>:<div className="card-soft py-14 text-center"><CalendarDays className="mx-auto text-coral" size={40}/><h2 className="font-display mt-3 text-2xl font-extrabold">Tu agenda está vacía</h2><p className="mt-2 text-subtle">Prueba con otra categoría o guarda una actividad.</p><button className="btn-outline mt-5" onClick={()=>{setKind('Todos');setSavedOnly(false)}}>Explorar todas</button></div>}
      <div className="mt-9 rounded-2xl border-2 border-ink bg-sky/35 p-5 text-sm leading-7"><strong>Nota:</strong> fechas y actividades son ficticias para la práctica universitaria. «Guardar» solo añade un recordatorio visual en este navegador; no reserva un lugar.</div>
    </div></section></>
}
