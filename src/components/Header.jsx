import { Star } from 'lucide-react'
import Navbar from './Navbar.jsx'

export default function Header({ onJoin, member }) {
  return <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-lg">
    <div className="border-b border-ink bg-mint py-1.5 text-center text-[10px] font-extrabold uppercase tracking-[.15em] sm:text-[11px]"><Star size={11} className="mr-2 inline fill-current"/> Cosplay para crear, aprender y conocer a tu gente <Star size={11} className="ml-2 inline fill-current"/></div>
    <Navbar onJoin={onJoin} member={member}/>
  </header>
}
