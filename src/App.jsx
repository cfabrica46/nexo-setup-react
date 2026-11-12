import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import JoinModal from './components/JoinModal.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import Home from './pages/Home.jsx'
import Comunidad from './pages/Comunidad.jsx'
import Eventos from './pages/Eventos.jsx'
import Galeria from './pages/Galeria.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
 const [joinOpen, setJoinOpen]=useState(false)
 const [member,setMember]=useLocalStorage('nexo_cosplay_member',null)
 const [liked,setLiked]=useLocalStorage('nexo_cosplay_likes',[])
 const [savedEvents,setSavedEvents]=useLocalStorage('nexo_cosplay_events',[])
 const onLike=id=>setLiked(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id])
 const onToggleEvent=id=>setSavedEvents(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id])
 return <div className="min-h-screen bg-nexo-bg text-white"><ScrollToTop/><Header onJoin={()=>setJoinOpen(true)} member={member}/>
  <main id="main-content" className="min-h-[45vh]"><Routes>
    <Route path="/" element={<Home onJoin={()=>setJoinOpen(true)} liked={liked} onLike={onLike} savedEvents={savedEvents} onToggleEvent={onToggleEvent}/>}/>
    <Route path="/comunidad" element={<Comunidad liked={liked} onLike={onLike}/>}/>
    <Route path="/eventos" element={<Eventos savedEvents={savedEvents} onToggleEvent={onToggleEvent}/>}/>
    <Route path="/galeria" element={<Galeria liked={liked} onLike={onLike}/>}/>
    <Route path="/nosotros" element={<Nosotros onJoin={()=>setJoinOpen(true)}/>}/>
    <Route path="/contacto" element={<Contacto/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></main><Footer/><JoinModal open={joinOpen} onClose={()=>setJoinOpen(false)} member={member} onSave={setMember}/>
 </div>
}
