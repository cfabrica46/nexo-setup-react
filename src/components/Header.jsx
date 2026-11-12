import Navbar from './Navbar.jsx'
import { Star } from 'lucide-react'

export default function Header({ onJoin, member }) {
  return <header className="sticky top-0 z-40 border-b border-[#3c3c55] bg-[#151629]/95 backdrop-blur-xl">
    <div className="border-b border-[#34354c] bg-[#24253b] py-2">
      <div className="container-nexo flex items-center justify-center gap-2 text-center text-[10px] font-extrabold tracking-[.15em] text-[#e7e3f0] sm:text-[11px]"><Star size={11} className="text-nexo-lime"/> UN ESPACIO PARA CREAR, COMPARTIR Y CONECTAR <Star size={11} className="text-nexo-lime"/></div>
    </div>
    <Navbar onJoin={onJoin} member={member}/>
  </header>
}
