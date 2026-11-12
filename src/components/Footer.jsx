import { Link } from 'react-router-dom'
import { ArrowUpRight, Sparkles } from 'lucide-react'
const links = [['Creadores','/comunidad'],['Colaboraciones','/colaboraciones'],['Agenda','/eventos'],['Proyectos','/proyectos'],['Guías','/recursos'],['Sobre NEXO','/nosotros'],['Contacto','/contacto']]
export default function Footer() {
  return <footer className="border-t-2 border-ink bg-ink py-12 text-white sm:py-16">
    <div className="container-nexo grid gap-10 border-b border-white/25 pb-11 md:grid-cols-[1.15fr_1fr_.85fr]">
      <div><Link to="/" className="font-display inline-flex items-center gap-2 text-4xl font-extrabold tracking-[-.08em]"><Sparkles size={31} className="text-sun"/>NEXO<span className="text-coral">!</span></Link><p className="mt-5 max-w-sm text-sm leading-7 text-white/75">Cosplay no es hacerlo perfecto. Es crear, compartir lo que sabes y encontrar a tu crew.</p><span className="mt-5 inline-block rounded-full border border-white/50 px-3 py-1.5 text-[11px] font-bold">Prototipo universitario · Datos de ejemplo</span></div>
      <div><h3 className="font-display mb-4 text-lg font-extrabold">Explora NEXO</h3><div className="grid grid-cols-2 gap-x-3 gap-y-3">{links.map(([name,path])=><Link key={path} to={path} className="text-sm text-white/80 hover:text-sun">{name}</Link>)}</div></div>
      <div className="max-w-xs"><h3 className="font-display text-lg font-extrabold">Una idea para el club</h3><p className="mt-3 text-sm leading-7 text-white/75">¿Te gustaría proponer una actividad o mejorar el sitio? Cuéntanos.</p><Link to="/contacto" className="mt-4 inline-flex items-center gap-2 font-extrabold text-sun">Ir a contacto <ArrowUpRight size={17}/></Link></div>
    </div><div className="container-nexo mt-6 flex flex-wrap justify-between gap-3 text-xs text-white/65"><span>© {new Date().getFullYear()} NEXO Cosplay Club</span><span>Proyecto académico · React + Tailwind</span></div>
  </footer>
}
