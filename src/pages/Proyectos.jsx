import { useState } from 'react'
import PageIntro from '../components/PageIntro.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { proyectos } from '../data/content.js'
export default function Proyectos() {
  const [status,setStatus] = useState('Todos')
  const items=proyectos.filter(p=>status==='Todos'||p.estado===status)
  return <><PageIntro eyebrow="Bitácora creativa" title="El detrás de cámaras importa." description="No solo exhibimos resultados: mostramos bocetos, decisiones, materiales y aprendizajes de cada proyecto." bg="bg-rose"/><section className="section-space"><div className="container-nexo"><div className="mb-7 flex flex-wrap gap-2">{['Todos','En proceso','Terminado'].map(s=><button key={s} aria-pressed={s===status} onClick={()=>setStatus(s)} className="filter-chip">{s}</button>)}</div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(p=><ProjectCard key={p.id} proyecto={p}/>)}</div><p className="mt-8 text-xs text-subtle">Los proyectos son ejemplos ficticios. Las fotografías se incorporarán cuando el equipo seleccione imágenes autorizadas.</p></div></section></>
}
