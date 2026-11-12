import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function SectionHeading({label,title,description,to,action='Ver más'}) {
 return <div className="mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end"><div><span className="eyebrow">{label}</span><h2 className="font-display mt-4 max-w-[740px] text-4xl font-bold tracking-[-.055em] sm:text-5xl">{title}</h2>{description && <p className="mt-4 max-w-[650px] text-sm leading-7 text-nexo-muted sm:text-base">{description}</p>}</div>{to && <Link to={to} className="ring-focus inline-flex shrink-0 items-center gap-2 self-start border-b border-nexo-lime pb-1 text-sm font-bold text-nexo-lime">{action}<ArrowUpRight size={17}/></Link>}</div>
}
