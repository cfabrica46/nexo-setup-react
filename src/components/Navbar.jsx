import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
const items = [['Inicio','/'],['Productos','/productos'],['Ofertas','/ofertas'],['Tienda','/tienda'],['Contacto','/contacto']]
const style = ({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'bg-nexo-primary/15 text-nexo-primary' : 'text-nexo-muted hover:bg-nexo-surface-alt hover:text-nexo-text'}`
export default function Navbar() {
  const { session, logout, count, theme, toggleTheme } = useStore()
  const navigate = useNavigate()
  const [mobile, setMobile] = useState(false)
  const [account, setAccount] = useState(false)
  const close = () => { setMobile(false); setAccount(false) }
  const signout = () => { logout(); close(); navigate('/') }
  return <header className="sticky top-0 z-50 border-b border-nexo-border bg-nexo-bg/95 backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
      <Link to="/" onClick={close} className="flex items-center gap-1 text-2xl font-black tracking-[-0.08em] text-nexo-text">NEXO <span className="ml-1 rounded bg-nexo-primary px-1.5 py-1 text-[10px] font-extrabold tracking-widest text-nexo-on-primary">SETUP</span></Link>
      <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">{items.map(([name,path]) => <NavLink key={path} to={path} end={path === '/'} className={style}>{name}</NavLink>)}</nav>
      <div className="flex items-center gap-2">
        <button type="button" onClick={toggleTheme} className="nav-icon" aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'} title="Cambiar tema">{theme === 'dark' ? '☀' : '☾'}</button>
        <Link to="/carrito" onClick={close} className="nav-icon relative" aria-label={`Carrito: ${count} artículos`}>🛒{count > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-nexo-primary px-1 text-[10px] font-bold text-nexo-on-primary">{count}</span>}</Link>
        {session ? <div className="relative hidden md:block"><button onClick={() => setAccount(!account)} className="nav-icon max-w-40 gap-2 px-3" aria-expanded={account}><span className="truncate text-sm">Mi cuenta</span>⌄</button>{account && <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-nexo-border bg-nexo-surface p-2 shadow-xl"><Link onClick={close} className="dropdown-item" to="/mi-cuenta">Mi Cuenta</Link><Link onClick={close} className="dropdown-item" to="/dashboard">Dashboard</Link><button onClick={signout} className="dropdown-item w-full text-left">Cerrar sesión</button></div>}</div> : <Link to="/login" onClick={close} className="hidden rounded-lg bg-nexo-primary px-4 py-2 text-sm font-bold text-nexo-on-primary md:block">Ingresar</Link>}
        <button className="nav-icon lg:hidden" type="button" aria-label="Abrir menú" aria-expanded={mobile} onClick={() => setMobile(x => !x)}>{mobile ? '✕' : '☰'}</button>
      </div>
    </div>
    {mobile && <nav aria-label="Móvil" className="flex flex-col gap-1 border-t border-nexo-border bg-nexo-bg px-5 py-3 lg:hidden">{items.map(([name,path]) => <NavLink key={path} to={path} onClick={close} end={path === '/'} className={style}>{name}</NavLink>)}<NavLink to="/carrito" onClick={close} className={style}>Carrito ({count})</NavLink>{session ? <><NavLink onClick={close} to="/mi-cuenta" className={style}>Mi Cuenta</NavLink><NavLink onClick={close} to="/dashboard" className={style}>Dashboard</NavLink><button className="px-3 py-2 text-left text-sm" onClick={signout}>Cerrar sesión</button></> : <NavLink onClick={close} to="/login" className={style}>Ingresar</NavLink>}</nav>}
  </header>
}
