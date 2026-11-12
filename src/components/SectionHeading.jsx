import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
export default function SectionHeading({ eyebrow, title, description, to, linkText='Ver más' }) {
  return <div className="mb-8 flex flex-wrap items-end justify-between gap-6"><div className="max-w-[730px]"><span className="kicker">{eyebrow}</span><h2 className="font-display mt-4 text-4xl font-extrabold leading-[1.07] tracking-[-.055em] sm:text-5xl">{title}</h2>{description&&<p className="mt-4 max-w-xl text-sm leading-7 text-subtle sm:text-base">{description}</p>}</div>{to&&<Link to={to} className="inline-flex items-center gap-2 border-b-2 border-coral pb-1 text-sm font-extrabold hover:text-coral">{linkText}<ArrowUpRight size={17}/></Link>}</div>
}
