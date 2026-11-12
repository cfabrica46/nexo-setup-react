import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import JoinModal from './components/JoinModal.jsx'
import Home from './pages/Home.jsx'
import Comunidad from './pages/Comunidad.jsx'
import CreatorDetail from './pages/CreatorDetail.jsx'
import Colaboraciones from './pages/Colaboraciones.jsx'
import Eventos from './pages/Eventos.jsx'
import Proyectos from './pages/Proyectos.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Recursos from './pages/Recursos.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [joinOpen, setJoinOpen] = useState(false)
  const [member, setMember] = useLocalStorage('nexo_club_member_v2', null)
  const [savedCreators, setSavedCreators] = useLocalStorage('nexo_club_creators_v2', [])
  const [savedEvents, setSavedEvents] = useLocalStorage('nexo_club_events_v2', [])
  const [savedCollabs, setSavedCollabs] = useLocalStorage('nexo_club_collabs_v2', [])
  const [ownPosts, setOwnPosts] = useLocalStorage('nexo_club_own_posts_v2', [])
  const toggle = setter => id => setter(previous => previous.includes(id) ? previous.filter(x => x !== id) : [...previous, id])
  const toggleCreator = toggle(setSavedCreators)
  const toggleEvent = toggle(setSavedEvents)
  const toggleCollab = toggle(setSavedCollabs)
  const onJoin = () => setJoinOpen(true)
  return <div className="min-h-screen bg-paper text-ink">
    <ScrollToTop/>
    <Header onJoin={onJoin} member={member}/>
    <main id="main-content" className="min-h-[52vh]"><Routes>
      <Route path="/" element={<Home onJoin={onJoin} savedCreators={savedCreators} toggleCreator={toggleCreator} savedEvents={savedEvents} toggleEvent={toggleEvent} savedCollabs={savedCollabs} toggleCollab={toggleCollab}/>}/>
      <Route path="/comunidad" element={<Comunidad savedCreators={savedCreators} toggleCreator={toggleCreator} member={member} onJoin={onJoin}/>}/>
      <Route path="/comunidad/:id" element={<CreatorDetail savedCreators={savedCreators} toggleCreator={toggleCreator}/>}/>
      <Route path="/colaboraciones" element={<Colaboraciones savedCollabs={savedCollabs} toggleCollab={toggleCollab} ownPosts={ownPosts} setOwnPosts={setOwnPosts} member={member} onJoin={onJoin}/>}/>
      <Route path="/eventos" element={<Eventos savedEvents={savedEvents} toggleEvent={toggleEvent}/>}/>
      <Route path="/proyectos" element={<Proyectos/>}/>
      <Route path="/proyectos/:id" element={<ProjectDetail/>}/>
      <Route path="/galeria" element={<Navigate to="/proyectos" replace/>}/>
      <Route path="/recursos" element={<Recursos/>}/>
      <Route path="/nosotros" element={<Nosotros onJoin={onJoin}/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes></main>
    <Footer/>
    <JoinModal open={joinOpen} onClose={()=>setJoinOpen(false)} member={member} onSave={setMember}/>
  </div>
}
