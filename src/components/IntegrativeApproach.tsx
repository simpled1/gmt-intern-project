import Image from "next/image";
import Link from "next/link";

export default function IntegrativeApproach() {
  return (
    <section className="w-full">
      {/* PART 1: Areas of Focus Grid */}
      <div className="bg-warm-sand py-20 md:py-24 px-6 md:px-12 border-b border-ocean/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase font-semibold tracking-widest text-sage block mb-3 font-sans">
              Specialized Care
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ocean font-normal leading-tight">
              Where we can{" "}
              <span className="italic block mt-1 text-sage">focus together</span>
            </h3>
          </div>

          {/* Right 2-Column Specialties List */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
            {/* Column 1 */}
            <div className="space-y-3">
              <Link href="/specialties/anxiety" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                High-Functioning Anxiety & Silent Panic →
              </Link>
              <Link href="/methods/emdr" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                EMDR & Resolving Past Trauma →
              </Link>
              <Link href="/specialties/burnout" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                Executive, Founder & Creative Burnout →
              </Link>
              <Link href="/specialties/burnout" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                Perfectionism & The Inner Critic →
              </Link>
              <Link href="/methods/somatic" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                Somatic Nervous System Regulation →
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <Link href="/specialties/burnout" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                Imposter Phenomenon & Work Overwhelm →
              </Link>
              <Link href="/methods/mindfulness" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                Compassionate Boundary Setting →
              </Link>
              <Link href="/specialties/anxiety" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                Sleep Disruption & Chronic Tension →
              </Link>
              <Link href="/methods/cbt" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                Cognitive Behavioral Therapy (CBT) →
              </Link>
              <Link href="/specialties/transitions" className="block border-b border-ocean/15 pb-3 text-sm sm:text-base font-medium text-ocean/85 font-sans hover:text-sage transition-colors duration-200">
                … and life transitions across California →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* PART 2: How I Work (Emotional Narrative + Photo)        */}
      <div className="bg-warm-cream/60 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* 1. Header (Left, Row 1 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-1">
            <span className="text-xs uppercase font-semibold tracking-widest text-sage block mb-4 font-sans">
              The Therapeutic Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ocean font-normal leading-[1.25] tracking-tight">
              You’ve spent years analyzing yourself. In our work together, your mind and body can finally feel safe enough to rest.
            </h2>
          </div>

          {/* 2. THE SINGLE IMAGE (Order 2 on mobile, Right col-span-5 Rows 1-2 on desktop) */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/5] bg-warm-sand overflow-hidden shadow-sm my-4 lg:my-0">
            <Image
              src="/images/how-we-work.jpg"
              alt="A peaceful, restorative moment by the Santa Monica coast"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 42vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* 3. Narrative Columns & CTA (Left, Row 2 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-2 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2 lg:mt-6 text-ocean/80 text-sm sm:text-base leading-relaxed">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-ocean font-sans mb-3">
                  Beyond endless overthinking
                </p>
                <p>
                  Most of my clients are exceptional at problem-solving. You know how to push through exhaustion, manage high expectations, and look entirely composed on the outside. But inside, you’re tired of the constant mental chatter and bracing for whatever could go wrong next. In our sessions, you don’t have to perform. You finally have permission to take off the armor.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-ocean font-sans mb-3">
                  Healing at the root
                </p>
                <p>
                  True relief doesn’t happen by simply talking in circles about your stress—because chances are, you already understand your patterns intellectually. By combining EMDR, targeted CBT, and somatic nervous system work, we address how stress is physically stored in your body. We calm the alarm system so you can reclaim clarity, peaceful sleep, and genuine emotional ease.
                </p>
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block text-xs uppercase font-semibold tracking-widest text-ocean hover:text-sage border-b border-ocean/40 hover:border-sage pb-1 transition-all duration-300 font-sans"
              >
                Schedule A Free Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 