import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { StoreProvider, useStore } from './context/StoreContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Ofertas from './pages/Ofertas'
import Tienda from './pages/Tienda'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import MiCuenta from './pages/MiCuenta'
import Dashboard from './pages/Dashboard'
import Carrito from './pages/Carrito'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

function GoTop() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  return null
}
function Protected({ children }) {
  const { session } = useStore()
  return session ? children : <Navigate to="/" replace />
}
function Layout() {
  return <div className="min-h-screen bg-nexo-bg text-nexo-text transition-colors duration-200">
    <GoTop /><Navbar />
    <main className="min-h-[60vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mi-cuenta" element={<MiCuenta />} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </div>
}
export default function App() {
  return <BrowserRouter><StoreProvider><Layout /></StoreProvider></BrowserRouter>
}
