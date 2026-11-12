export default function PageIntro({eyebrow,title,description,bg='bg-sun'}) {
  return <section className={`page-banner ${bg} py-12 sm:py-16`}><div className="container-nexo relative z-10"><span className="kicker">{eyebrow}</span><h1 className="font-display mt-4 max-w-[820px] text-[clamp(2.9rem,5.8vw,5rem)] font-extrabold leading-[1.04] tracking-[-.06em]">{title}</h1><p className="mt-5 max-w-[660px] text-base leading-8">{description}</p></div></section>
}
