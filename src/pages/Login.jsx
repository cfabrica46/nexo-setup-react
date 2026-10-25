import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
export default function Login() {
  const { session, login } = useStore()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  if (session) return <Navigate to="/dashboard" replace />
  const submit = e => {
    e.preventDefault()
    if (!email.trim() || !password) { setError('Completa el correo y la contraseña.'); return }
    if (!login(email, password)) { setError('Credenciales incorrectas.'); return }
    navigate('/dashboard')
  }
  return <section className="section-wrap flex min-h-[64vh] items-center justify-center"><div className="nexo-card w-full max-w-lg p-8 sm:p-10"><span className="section-label">NEXO ACCOUNT</span><h1 className="mt-3 text-3xl font-black">Bienvenido de nuevo.</h1><p className="mt-3 text-sm leading-6 text-nexo-muted">Acceso de demostración para la administración de NEXO.</p><form className="mt-8 space-y-5" onSubmit={submit}><div><label className="form-label" htmlFor="login-email">Correo electrónico</label><input className="input-nexo" id="login-email" type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@nexosetup.pe"/></div><div><label className="form-label" htmlFor="login-password">Contraseña</label><input className="input-nexo" id="login-password" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Tu contraseña"/></div>{error && <p role="alert" className="text-sm text-nexo-danger">{error}</p>}<button className="btn-primary w-full" type="submit">Ingresar al Dashboard</button></form><div className="mt-7 rounded-xl bg-nexo-surface-alt p-4 text-xs leading-7 text-nexo-muted"><strong>Credenciales académicas:</strong><br/>admin@nexosetup.pe<br/>nexo123</div><Link to="/" className="link-accent mt-5 inline-block text-sm">← Volver al inicio</Link></div></section>
}
