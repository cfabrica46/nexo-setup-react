import { ArrowUpRight, PlayCircle, Users, Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero({ onJoin }) {
  return <section className="relative overflow-hidden bg-grid pt-12 pb-11 sm:pt-16 lg:pt-[78px] lg:pb-20">
    <div className="pointer-events-none absolute -left-56 top-8 h-[570px] w-[570px] rounded-full bg-[#7e56d8]/[.07] blur-[100px]" />
    <div className="container-nexo relative grid items-center gap-9 lg:grid-cols-[.95fr_1.05fr] lg:gap-[56px]">
      <div className="relative z-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#5a557b] bg-[#2a2948] px-3.5 py-2 text-xs font-bold text-[#e9deff]"><Sparkles size={14} className="text-nexo-lime"/> Donde la creatividad encuentra a su gente</div>
        <h1 className="font-display max-w-[620px] text-[clamp(3.25rem,7.2vw,6.2rem)] leading-[.99] font-bold tracking-[-.078em]">Tu personaje.<br/><span className="text-nexo-lime">Tu comunidad.</span></h1>
        <p className="mt-7 max-w-[465px] text-[15px] leading-[1.85] text-[#c0bdd1] sm:text-[17px]">Un lugar para los que crean mundos, dan vida a personajes y creen que las mejores historias se viven en comunidad.</p>
        <div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={onJoin} className="btn-lime ring-focus">Quiero ser parte <ArrowUpRight size={18}/></button><Link to="/comunidad" className="btn-outline ring-focus"><PlayCircle size={18}/> Explorar comunidad</Link></div>
        <div className="mt-11 flex flex-wrap items-center gap-6 border-t border-[#434057] pt-6 text-xs text-[#d9d6e3]"><span className="flex items-center gap-2"><Users size={17} className="text-nexo-purple"/> Encuentra creadores</span><span className="flex items-center gap-2"><Heart size={17} className="text-nexo-pink"/> Comparte tu pasión</span></div>
      </div>
      <div className="relative min-w-0">
        <img className="w-full rounded-[28px] border border-[#48425e] object-cover shadow-[0_38px_120px_rgba(0,0,0,.35)]" src="/assets/art/hero-cosplay.svg" alt="Ilustración original de dos miembros de una comunidad cosplay" />
        <div className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-2xl border border-[#646080] bg-[#28263e]/95 p-3 shadow-xl backdrop-blur-md sm:-left-5 sm:p-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-nexo-lime text-[#1b1b2b]"><Heart size={20} fill="currentColor"/></span><span><strong className="block text-sm">Hecho por fans</strong><small className="text-xs text-nexo-muted">Para gente como tú</small></span></div>
      </div>
    </div>
  </section>
}
