import Image from "next/image";

export default function EmpathyBanner() {
  return (
    <section className="below-fold bg-warm-cream/50 py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* 1. Headline (Left, Row 1 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-1">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ocean font-normal leading-[1.25] tracking-tight">
              You appear composed and capable on the outside — while quietly carrying constant exhaustion and worry within.
            </h2>
          </div>

          {/* 2. THE SINGLE IMAGE (Order 2 on mobile, Right col-span-5 Rows 1-2 on desktop) */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative w-full md:max-w-[480px] md:mx-auto md:aspect-[4/5] lg:max-w-none lg:mx-0 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/5] overflow-hidden shadow-sm my-4 lg:my-0">
            <Image
              src="/images/empathy-tide.jpg"
              alt="Gentle Pacific waves washing over the Santa Monica sand"
              fill
              sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 480px, 42vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* 3. Narrative Columns (Left, Row 2 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-2 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2 lg:mt-6">
            <div>
              <span className="text-xs uppercase font-semibold tracking-widest text-sage block mb-3 font-sans">
                Support Grounded in Depth
              </span>
              <p className="text-ocean/75 text-sm sm:text-base leading-relaxed">
                Whether you are navigating chronic anxiety, burnout from high-pressure work, or the lingering echoes of past experiences, you don&apos;t have to stay in perpetual survival mode. Therapy provides a dedicated, grounded space to unpack what is heavy and regain your steady foundation.
              </p>
            </div>

            <div>
              <p className="text-ocean/75 text-sm sm:text-base leading-relaxed pt-0 sm:pt-7">
                First and foremost, your experience is real, valid, and worthy of focused support. By integrating evidence-based CBT, EMDR, and somatic practices, I help you understand both the emotional and physiological sides of stress so you can find lasting ease in daily life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
