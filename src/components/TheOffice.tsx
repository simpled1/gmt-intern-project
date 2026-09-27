import Image from "next/image";
import Link from "next/link";

export default function OurOffice() {
  const highlights = [
    {
      title: "Quiet Privacy & Safety",
      description:
        "Tucked into a quiet corner of Santa Monica, the space is protected by acoustic privacy so you can speak freely without concern for outside noise.",
    },
    {
      title: "Natural Light & Grounding Textures",
      description:
        "Designed with organic linen, natural wood, and warm California daylight to provide a calm sanctuary that downshifts an overstimulated nervous system.",
    },
    {
      title: "In-Person & Telehealth Across CA",
      description:
        "Meet in person at 123th Street 45 W in Santa Monica, or connect via secure, HIPAA-compliant telehealth anywhere in California.",
    },
  ];

  return (
    <section id="office" className="bg-warm-cream/60 py-24 md:py-36 px-6 md:px-12 border-b border-ocean/10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest font-semibold text-sage block mb-4 font-sans">
            A Physical Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ocean font-normal leading-[1.25] tracking-tight">
            A quiet, uncluttered space designed to help you{" "}
            <span className="italic font-serif text-sage">downshift.</span>
          </h2>
          <p className="text-ocean/75 mt-6 text-base sm:text-lg leading-relaxed font-sans font-normal">
            Located at 123th Street 45 W in Santa Monica, my office is intentionally curated to feel grounded, welcoming, and calm. Clients often share that simply walking through the door and sitting in the natural light helps them exhale before our conversation even begins.
          </p>
        </div>

        {/* 2-Photo Editorial Layout (Sharp Edges) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16 md:mb-20">
          
          {/* Photo 1: Primary Room View (7 of 12 cols) */}
          <div className="md:col-span-7 relative w-full aspect-[4/3] bg-warm-sand overflow-hidden shadow-sm">
            <Image
              src="/images/office1.jpeg"
              alt="Sunlit therapy seating area with natural linen textures in Santa Monica"
              fill
              sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) calc(58.333vw - 4.667rem), 667px"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Photo 2: Quiet Interior Corner (5 of 12 cols) */}
          <div className="md:col-span-5 relative w-full aspect-[4/3] md:aspect-auto bg-warm-sand overflow-hidden shadow-sm">
            <Image
              src="/images/office2.jpeg"
              alt="Comfortable, private counseling corner with warm lighting"
              fill
              sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) calc(41.667vw - 3.333rem), 477px"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>

        {/* 3 Pillars / Office Amenities (Sharp Hairline Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-ocean/15">
          {highlights.map((item, index) => (
            <div key={index} className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-sage block font-sans">
                0{index + 1}
              </span>
              <h3 className="font-serif text-2xl text-ocean font-normal leading-snug">
                {item.title}
              </h3>
              <p className="text-ocean/75 text-sm sm:text-base leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dedicated Office Page Link */}
        <div className="mt-12 text-center">
          <Link
            href="/office"
            className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-ocean hover:text-sage transition-colors border-b border-ocean/30 hover:border-sage pb-1 font-sans"
          >
            <span>Learn more about the Santa Monica sanctuary & in-person appointments</span>
            <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
