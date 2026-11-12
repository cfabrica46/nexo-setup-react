import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'

const links = [
  { to: '/', name: 'Inicio', end: true },
  { to: '/comunidad', name: 'Creadores' },
  { to: '/colaboraciones', name: 'Colabora' },
  { to: '/eventos', name: 'Agenda' },
  { to: '/proyectos', name: 'Proyectos' },
  { to: '/recursos', name: 'Guías' },
]

export default function Navbar({ onJoin, member }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  const navClass = ({ isActive }) => `rounded-full px-3 py-2 text-[13px] font-extrabold transition ${isActive ? 'bg-sun text-ink' : 'text-ink hover:bg-cream'}`
  return (
    <nav aria-label="Navegación principal" className="container-nexo flex min-h-[78px] items-center gap-4">
      <Link to="/" className="mr-auto flex items-center gap-2" aria-label="NEXO Cosplay Club, ir al inicio">
        <span className="flex h-11 w-11 rotate-[-6deg] items-center justify-center rounded-[15px] border-2 border-ink bg-coral text-white"><Sparkles size={24} strokeWidth={2.7}/></span>
        <span className="leading-none"><strong className="font-display block text-[27px] leading-[.9] font-extrabold tracking-[-.08em]">NEXO<span className="text-coral">!</span></strong><span className="mt-[6px] block text-[9px] font-extrabold tracking-[.21em]">COSPLAY CLUB</span></span>
      </Link>
      <div className="hidden items-center gap-1 lg:flex">{links.map(link => <NavLink key={link.to} end={link.end} to={link.to} className={navClass}>{link.name}</NavLink>)}</div>
      <button type="button" onClick={onJoin} className="btn-dark hidden shrink-0 lg:inline-flex">{member ? 'Mi tarjeta' : 'Crear mi tarjeta'} <ArrowUpRight size={16}/></button>
      <button type="button" onClick={() => setOpen(value => !value)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="nexo-mobile-nav" className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-white lg:hidden">{open ? <X size={22}/> : <Menu size={22}/>}</button>
      {open && <div id="nexo-mobile-nav" className="absolute inset-x-0 top-full z-50 border-b-2 border-ink bg-paper px-4 py-4 shadow-xl lg:hidden"><div className="mx-auto grid max-w-md gap-1">{links.map(link => <NavLink key={link.to} end={link.end} to={link.to} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-extrabold ${isActive ? 'bg-sun' : 'hover:bg-white'}`}>{link.name}</NavLink>)}<button onClick={() => { setOpen(false); onJoin() }} className="btn-primary mt-3">{member ? 'Ver mi tarjeta' : 'Crear mi tarjeta'} <ArrowUpRight size={16}/></button></div></div>}
    </nav>
  )
}
