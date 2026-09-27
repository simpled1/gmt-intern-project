import Link from "next/link";

export default function CoreSpecialties() {
    const specialties = [
    {
      title: "Anxiety & Panic",
      description:
        "When worry becomes your default state, everyday life feels like an endless series of fires to put out. We look beneath surface overthinking to regulate the physiological panic and restore a true sense of calm to your daily rhythm.",
      linkText: "LEARN MORE",
      href: "/specialties/anxiety",
    },
    {
      title: "Trauma & EMDR",
      description:
        "Past overwhelming experiences can leave lingering imprints that affect your relationships, self-worth, and sense of safety. Using EMDR, we gently reprocess painful memories so they no longer hijack your present moment.",
      linkText: "LEARN MORE",
      href: "/specialties/trauma",
    },
    {
      title: "Burnout & Perfectionism",
      description:
        "High achievers often measure their worth by what they produce—leading to deep emotional fatigue and isolation. Therapy offers a protected space to dismantle relentless internal pressure and build a sustainable way to live and create.",
      linkText: "LEARN MORE",
      href: "/specialties/burnout",
    },
    {
      title: "Somatic Regulation",
      description:
        "Insight alone rarely calms a racing heart or tight chest. We integrate body-centered practices to help you recognize nervous system activation, release stored tension, and reconnect with physical safety and grounded presence.",
      linkText: "LEARN MORE",
      href: "/methods/somatic",
    },
  ];


  return (
    <section id="specialties" className="below-fold bg-warm-sand py-24 md:py-36 px-6 md:px-12 border-b border-ocean/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading (4 of 12 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ocean font-normal leading-[1.2] tracking-tight">
              Clinical <span className="italic font-serif text-sage">specialties</span> & focus…
            </h2>
            <p className="mt-6 text-ocean/70 text-sm sm:text-base leading-relaxed font-sans max-w-sm">
              In-depth, individualized psychotherapy tailored for adults ready to move beyond survival mode.
            </p>
          </div>

          {/* Right Columns: 2x2 Grid of 4 Specialties (8 of 12 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {specialties.map((item, index) => (
              <div key={index} className="flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ocean font-normal mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-ocean/75 text-sm sm:text-base leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={item.href}
                    className="inline-block text-xs uppercase font-semibold tracking-widest text-ocean/80 hover:text-sage border-b border-ocean/30 hover:border-sage pb-1 transition-all duration-300 font-sans"
                  >
                    <span className="sr-only">Learn more about </span>{item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
