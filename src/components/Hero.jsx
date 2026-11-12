import { ArrowUpRight, Scissors, Star, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageSlot from './ImageSlot.jsx'

export default function Hero({ onJoin }) {
  return <section className="hero-grid overflow-hidden border-b-2 border-ink bg-paper py-12 sm:py-16 lg:py-20">
    <div className="container-nexo grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
      <div className="relative z-10"><div className="chip mb-7 bg-sun"><Star size={15} fill="currentColor"/> PARA FANS QUE HACEN COSAS</div>
        <h1 className="font-display max-w-[640px] text-[clamp(3.4rem,7.3vw,6.7rem)] font-extrabold leading-[.93] tracking-[-.075em]">No lo hagas <span className="relative inline-block text-coral">solo.<svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 280 20" aria-hidden="true"><path d="M5 12Q70 1 140 13T276 10" fill="none" stroke="#FFD34E" strokeWidth="10" strokeLinecap="round"/></svg></span><br/>Hazlo con tu <span className="text-ink">crew.</span></h1>
        <p className="mt-8 max-w-lg text-base leading-8 text-subtle sm:text-lg">Ideas a medio hacer, pelucas imposibles, armaduras de cartón y amistades nuevas. Aquí caben todos los niveles de cosplay.</p>
        <div className="mt-8 flex flex-wrap gap-4"><Link to="/colaboraciones" className="btn-primary">Encuentra con quién crear <ArrowUpRight size={18}/></Link><button type="button" className="btn-light" onClick={onJoin}>Crear mi tarjeta <Users size={17}/></button></div>
        <div className="mt-9 flex flex-wrap gap-5 border-t-2 border-dashed border-ink/25 pt-5 text-sm font-bold"><span className="flex items-center gap-2"><Scissors size={18} className="text-coral"/> Comparte procesos</span><span className="flex items-center gap-2"><Users size={18} className="text-coral"/> Conoce creadores</span></div>
      </div>
      <div className="relative mx-auto w-full max-w-[530px] pb-4 sm:px-5"><div className="absolute -left-3 top-6 h-[83%] w-[93%] rotate-[-6deg] rounded-[30px] border-2 border-ink bg-mint"/><div className="absolute -right-2 top-1 h-[94%] w-[95%] rotate-[5deg] rounded-[30px] border-2 border-ink bg-sun"/>
        <ImageSlot tipo="hero" className="relative aspect-[4/4.1] rotate-[-1deg] rounded-[28px] border-[3px] border-ink shadow-[8px_9px_0_#223348]" loading="eager" alt="Espacio reservado para fotografía grupal de cosplayers" label="AQUÍ VA FOTO DEL CLUB"/>
        <div className="sticker absolute -bottom-2 -left-1 rotate-[-8deg] rounded-xl bg-coral px-5 py-3 font-display text-xl font-extrabold text-white sm:-left-7">¡Bienvenid@!</div>
        <div className="sticker absolute -right-1 top-6 rotate-[8deg] rounded-full bg-sun px-4 py-3 text-sm font-extrabold sm:-right-6">100% creatividad ★</div>
      </div>
    </div>
  </section>
}
