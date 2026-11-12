import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/comunidad', label: 'Comunidad' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/galeria', label: 'Galería' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar({ onJoin, member }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  // Cierra el menú al cambiar de ruta sin precisar un listener global.
  const routeKey = location.pathname
  const linkStyle = ({ isActive }) => `ring-focus transition-colors text-sm font-semibold ${isActive ? 'text-nexo-lime' : 'text-[#d4d1e3] hover:text-white'}`

  return (
    <nav className="container-nexo relative flex min-h-[82px] items-center justify-between gap-4" aria-label="Navegación principal" data-route={routeKey}>
      <Link to="/" onClick={() => setOpen(false)} className="ring-focus flex shrink-0 items-center gap-3" aria-label="NEXO Cosplay: inicio">
        <span className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-nexo-lime text-nexo-bg"><Sparkles size={23} strokeWidth={2.6} /></span>
        <span className="leading-none"><strong className="font-display block text-[23px] font-bold tracking-[-.07em]">NEXO<span className="text-nexo-lime">.</span></strong><span className="mt-[6px] block text-[9px] font-extrabold tracking-[.28em] text-nexo-muted">COSPLAY CLUB</span></span>
      </Link>

      <div className="hidden items-center gap-6 xl:flex">
        {links.map(link => <NavLink key={link.to} end={link.end} to={link.to} className={linkStyle}>{link.label}</NavLink>)}
      </div>
      <div className="hidden items-center gap-3 xl:flex">
        <button type="button" onClick={onJoin} className="btn-lime ring-focus !px-5 !py-3">{member ? 'Mi comunidad' : 'Únete a NEXO'} <ArrowUpRight size={16}/></button>
      </div>
      <button type="button" onClick={() => setOpen(v => !v)} className="ring-focus ml-auto rounded-xl border border-nexo-line p-3 text-white xl:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X size={23}/> : <Menu size={23}/>}</button>
      {open && (
        <div id="mobile-menu" className="absolute left-0 right-0 top-[75px] z-50 rounded-2xl border border-nexo-line bg-[#23243c] p-4 shadow-2xl xl:hidden">
          <div className="grid gap-1">{links.map(link => <NavLink key={link.to} to={link.to} end={link.end} onClick={()=>setOpen(false)} className={({isActive})=>`rounded-xl px-4 py-3 text-sm font-bold ${isActive?'bg-[#404160] text-nexo-lime':'text-white hover:bg-[#31324c]'}`}>{link.label}</NavLink>)}</div>
          <button type="button" onClick={()=>{setOpen(false);onJoin()}} className="btn-lime mt-3 w-full">{member ? 'Mi comunidad' : 'Únete a NEXO'} <ArrowUpRight size={16}/></button>
        </div>
      )}
    </nav>
  )
}
