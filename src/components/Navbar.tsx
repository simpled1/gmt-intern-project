import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  {
    name: "Specialties",
    href: "/specialties",
    children: [
      { name: "Anxiety & Panic", href: "/specialties/anxiety" },
      { name: "Trauma & PTSD", href: "/specialties/trauma" },
      { name: "Burnout & Perfectionism", href: "/specialties/burnout" },
      { name: "Life Transitions", href: "/specialties/transitions" },
    ],
  },
  {
    name: "Methods",
    href: "/methods",
    children: [
      { name: "CBT (Cognitive Behavioral)", href: "/methods/cbt" },
      { name: "EMDR Therapy", href: "/methods/emdr" },
      { name: "Somatic Therapy", href: "/methods/somatic" },
      { name: "Mindfulness & Grounding", href: "/methods/mindfulness" },
    ],
  },
  { name: "The Office", href: "/office" },
  { name: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-warm-sand/95 backdrop-blur-sm border-b border-warm-cream">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group flex flex-col">
          <span className="font-sans text-xl md:text-2xl font-medium tracking-wide text-ocean group-hover:text-sage transition-colors">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="text-[10px] tracking-widest uppercase text-ocean/80 font-medium font-sans">
            Clinical Psychologist • Santa Monica, CA
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">
              <Link href={link.href} className="inline-flex items-center text-sm font-medium text-ocean/80 group-hover:text-sage transition-colors">
                {link.name}
                {link.children && (
                  <svg aria-hidden="true" className="w-3.5 h-3.5 ml-1 text-ocean/80 group-hover:text-sage transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-focus-within:opacity-100 group-hover:visible group-focus-within:visible transition-all duration-200 z-50">
                  <div className="bg-warm-sand border border-warm-cream shadow-lg py-2 min-w-[240px]">
                    {link.children.map((item) => (
                      <Link key={item.name} href={item.href} className="block px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-ocean hover:text-sage hover:bg-warm-cream/60 transition-colors font-sans">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-sage text-white hover:bg-sage-hover shadow-sm transition-all duration-200 font-sans">
            Book a Consultation
          </Link>
        </nav>

        <details className="md:hidden relative">
          <summary aria-label="Open navigation menu" className="list-none cursor-pointer p-2 text-ocean hover:text-sage [&::-webkit-details-marker]:hidden">
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-full mt-3 w-[min(20rem,calc(100vw-3rem))] bg-warm-sand border border-warm-cream shadow-lg px-5 py-4 space-y-3">
            {navLinks.map((link) => link.children ? (
              <details key={link.name} className="border-b border-warm-cream/60 pb-3">
                <summary className="cursor-pointer text-base font-medium text-ocean">{link.name}</summary>
                <div className="mt-3 pl-3 space-y-2 border-l border-sage/40">
                  <Link href={link.href} className="block text-sm text-ocean/80 hover:text-sage">All {link.name}</Link>
                  {link.children.map((item) => <Link key={item.name} href={item.href} className="block text-sm text-ocean/80 hover:text-sage">{item.name}</Link>)}
                </div>
              </details>
            ) : <Link key={link.name} href={link.href} className="block border-b border-warm-cream/60 pb-3 text-base font-medium text-ocean hover:text-sage">{link.name}</Link>)}
            <Link href="/contact" className="block text-center w-full px-5 py-3 text-xs uppercase tracking-widest font-semibold bg-sage text-white hover:bg-sage-hover transition-colors font-sans">
              Book a Consultation
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
