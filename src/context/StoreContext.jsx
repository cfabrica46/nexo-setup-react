import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { obtenerProductos, precioFinal } from '../services/productService'

const StoreContext = createContext(null)
const read = (key, fallback) => {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback } catch { return fallback }
}
const write = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* almacenamiento no disponible */ }
}
const defaultChanges = { creados: [], editados: {}, eliminados: [] }

export function StoreProvider({ children }) {
  const [base, setBase] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [retry, setRetry] = useState(0)
  const [changes, setChanges] = useState(() => read('nexo_productos_locales', defaultChanges))
  const [session, setSession] = useState(() => read('nexo_session', null))
  const [cart, setCart] = useState(() => read('nexo_cart', []))
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('nexo_theme') === 'light' ? 'light' : 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        const products = await obtenerProductos(controller.signal)
        if (!controller.signal.aborted) { setBase(products); setError('') }
      } catch (err) {
        if (!controller.signal.aborted) setError(`No pudimos cargar la API de productos (${err.message}).`)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [retry])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('nexo_theme', theme) } catch { /* no storage */ }
  }, [theme])

  const products = useMemo(() => [
    ...base.filter(p => !changes.eliminados.includes(p.id)).map(p => changes.editados[p.id] ?? p),
    ...changes.creados,
  ], [base, changes])

  const setProductsChanges = useCallback((fn) => {
    setChanges(old => { const next = fn(old); write('nexo_productos_locales', next); return next })
  }, [])
  const createProduct = useCallback((p) => {
    setProductsChanges(c => ({ ...c, creados: [...c.creados, { ...p, id: Math.max(1000, ...c.creados.map(x => x.id)) + 1 }] }))
  }, [setProductsChanges])
  const updateProduct = useCallback((p) => {
    setProductsChanges(c => c.creados.some(x => x.id === p.id)
      ? { ...c, creados: c.creados.map(x => x.id === p.id ? p : x) }
      : { ...c, editados: { ...c.editados, [p.id]: p } })
  }, [setProductsChanges])
  const deleteProduct = useCallback((id) => {
    setProductsChanges(c => ({ ...c, creados: c.creados.filter(x => x.id !== id), editados: Object.fromEntries(Object.entries(c.editados).filter(([k]) => Number(k) !== id)), eliminados: base.some(p => p.id === id) ? [...new Set([...c.eliminados, id])] : c.eliminados }))
    setCart(old => { const next = old.filter(x => x.id !== id); write('nexo_cart', next); return next })
  }, [setProductsChanges, base])
  const resetProducts = useCallback(() => {
    const fresh = { ...defaultChanges, creados: [], editados: {}, eliminados: [] }
    setChanges(fresh)
    try { localStorage.removeItem('nexo_productos_locales') } catch { /* noop */ }
  }, [])

  const login = (email, password) => {
    if (email.trim().toLowerCase() !== 'admin@nexosetup.pe' || password !== 'nexo123') return false
    const user = { nombre: 'Administrador NEXO', email: 'admin@nexosetup.pe', rol: 'Administrador', fechaIngreso: new Date().toISOString() }
    setSession(user); write('nexo_session', user); return true
  }
  const logout = () => {
    setSession(null)
    try { localStorage.removeItem('nexo_session') } catch { /* noop */ }
  }
  const setCartPersisted = (updater) => setCart(old => {
    const next = typeof updater === 'function' ? updater(old) : updater
    write('nexo_cart', next)
    return next
  })
  const addToCart = (product) => {
    if (product.stock <= 0) return false
    const existing = cart.find(x => x.id === product.id)
    if (existing && existing.cantidad >= product.stock) return false
    setCartPersisted(old => existing
      ? old.map(x => x.id === product.id ? { ...x, cantidad: x.cantidad + 1 } : x)
      : [...old, { id: product.id, nombre: product.nombre, imagen: product.imagen, categoria: product.categoria, precio: precioFinal(product), stock: product.stock, cantidad: 1 }])
    return true
  }
  const changeQuantity = (id, qty) => setCartPersisted(old => old.map(x => x.id === id ? { ...x, cantidad: Math.min(x.stock, qty) } : x).filter(x => x.cantidad > 0))
  const removeFromCart = (id) => setCartPersisted(old => old.filter(x => x.id !== id))
  const clearCart = () => setCartPersisted([])
  const count = cart.reduce((n, x) => n + x.cantidad, 0)
  const total = cart.reduce((n, x) => n + x.precio * x.cantidad, 0)
  const changedCount = changes.creados.length + Object.keys(changes.editados).length + changes.eliminados.length
  const value = { products, loading, error, reload: () => { setLoading(true); setRetry(x => x + 1) }, session, login, logout, cart, count, total, addToCart, changeQuantity, removeFromCart, clearCart, theme, toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'), createProduct, updateProduct, deleteProduct, resetProducts, changedCount }
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore = () => {
  const value = useContext(StoreContext)
  if (!value) throw new Error('useStore debe utilizarse dentro de StoreProvider')
  return value
}
