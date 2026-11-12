import { useMemo, useState } from 'react'
import { Bookmark, Search, UserPlus } from 'lucide-react'
import PageIntro from '../components/PageIntro.jsx'
import CreatorCard from '../components/CreatorCard.jsx'
import { creadores, roles, ciudades } from '../data/content.js'
export default function Comunidad({ savedCreators, toggleCreator, member, onJoin }) {
  const [query,setQuery] = useState('')
  const [role,setRole] = useState('Todos')
  const [city,setCity] = useState('Todas')
  const [onlySaved,setOnlySaved] = useState(false)
  const filtered = useMemo(() => creadores.filter(c =>
    (!query || `${c.nombre} ${c.alias} ${c.bio} ${c.habilidades.join(' ')}`.toLowerCase().includes(query.toLowerCase())) &&
    (role === 'Todos' || c.rol === role) &&
    (city === 'Todas' || c.ciudad === city) &&
    (!onlySaved || savedCreators.includes(c.id))
  ),[query,role,city,onlySaved,savedCreators])
  return <><PageIntro eyebrow="Directorio de creadores" title="Encuentra a tu crew." description="No importa cuánto sepas: descubre creadores por oficio, intereses y ciudad. Todos los perfiles de esta demo son ficticios." bg="bg-sky"/>
    <section className="section-space"><div className="container-nexo">
      <div className="card-soft mb-8 flex flex-wrap items-center justify-between gap-5 p-5"><div><strong className="font-display text-xl font-extrabold">{member ? `Tu tarjeta: ${member.alias}` : '¿Te gustaría presentarte?'}</strong><p className="mt-1 text-sm text-subtle">{member ? `${member.rol} · ${member.ciudad} · Guardada en este navegador` : 'Crea una tarjeta de demostración, sin registro real.'}</p></div><button onClick={onJoin} className="btn-primary"><UserPlus size={17}/>{member ? 'Editar tarjeta' : 'Crear mi tarjeta'}</button></div>
      <div className="mb-6 grid gap-3 lg:grid-cols-[1.4fr_.8fr_.8fr_auto]"><label className="relative"><Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-subtle"/><input className="form-control !mt-0 !pl-12" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Alias, habilidad o interés..." aria-label="Buscar creadores"/></label><label><span className="sr-only">Filtrar por oficio</span><select className="form-control !mt-0" value={role} onChange={e=>setRole(e.target.value)}>{roles.map(r=><option key={r}>{r}</option>)}</select></label><label><span className="sr-only">Filtrar por ciudad</span><select className="form-control !mt-0" value={city} onChange={e=>setCity(e.target.value)}>{ciudades.map(c=><option key={c}>{c}</option>)}</select></label><button onClick={()=>setOnlySaved(p=>!p)} aria-pressed={onlySaved} className={`flex items-center justify-center gap-2 rounded-xl border-2 border-ink px-4 text-sm font-extrabold ${onlySaved?'bg-sun':'bg-white'}`}><Bookmark size={16}/>Guardados ({savedCreators.length})</button></div>
      <p className="mb-5 text-sm font-semibold text-subtle">{filtered.length} {filtered.length===1?'creador encontrado':'creadores encontrados'}</p>
      {filtered.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(c=><CreatorCard key={c.id} creator={c} saved={savedCreators.includes(c.id)} onToggle={toggleCreator}/>)}</div> : <div className="card-soft py-16 text-center"><p className="font-display text-2xl font-extrabold">No hay coincidencias todavía.</p><button onClick={()=>{setQuery('');setRole('Todos');setCity('Todas');setOnlySaved(false)}} className="btn-outline mt-5">Limpiar filtros</button></div>}
    </div></section>
  </>
}
