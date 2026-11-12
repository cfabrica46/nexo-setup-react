import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Mail, Sparkles } from 'lucide-react'
const links=[['Inicio','/'],['Comunidad','/comunidad'],['Eventos','/eventos'],['Galería','/galeria'],['Nosotros','/nosotros'],['Contacto','/contacto']]
export default function Footer() {
 return <footer className="border-t border-[#36374e] bg-nexo-deep pt-16 pb-7">
   <div className="container-nexo grid gap-12 border-b border-[#34354a] pb-14 md:grid-cols-[1.3fr_.8fr_.9fr]">
    <div><Link to="/" className="inline-flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-nexo-lime text-[#121324]"><Sparkles size={23}/></span><span className="font-display text-3xl font-bold tracking-[-.07em]">NEXO<span className="text-nexo-lime">.</span></span></Link><p className="mt-5 max-w-[305px] text-sm leading-7 text-nexo-muted">Tu personaje. Tu comunidad. Un espacio creativo para compartir ideas, proyectos y nuevas amistades.</p><span className="mt-5 inline-flex rounded-full border border-[#3b3e56] px-3 py-1.5 text-[10px] uppercase tracking-widest text-nexo-muted">Proyecto académico · Comunidad ficticia</span></div>
    <div><h3 className="font-display mb-5 font-bold">Explora</h3><div className="grid grid-cols-2 gap-x-6 gap-y-3">{links.map(([label,to])=><Link key={to} to={to} className="text-sm text-nexo-muted transition hover:text-nexo-lime">{label}</Link>)}</div></div>
    <div><h3 className="font-display mb-5 font-bold">Hablemos</h3><p className="text-sm leading-7 text-nexo-muted">¿Ideas para la comunidad? Nos encantará escucharlas.</p><Link to="/contacto" className="mt-4 inline-flex items-center gap-2 font-bold text-nexo-lime">Enviar un mensaje <ArrowUpRight size={16}/></Link><div className="mt-5 flex gap-3 text-nexo-muted"><Mail size={19}/><Instagram size={19}/></div></div>
   </div><div className="container-nexo mt-6 flex flex-col gap-3 text-xs text-[#8e90aa] sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} NEXO Cosplay — Proyecto universitario.</span><span>Diseñado con React + Tailwind CSS.</span></div>
 </footer>
}
