import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-warm-sand pt-6 pb-20 md:pt-8 md:pb-28 border-b border-ocean/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* 1. Headline & Subtitle (Left col-span-7, Row 1 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-1 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-clay" />
              <span className="text-xs uppercase tracking-widest font-semibold text-sage font-sans">
                Integrative Psychotherapy &amp; Somatic Care · Santa Monica, CA
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ocean font-normal leading-[1.15] tracking-tight">
              Therapy for high-achieving adults carrying quiet exhaustion.
            </h1>

            <p className="text-ocean/80 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              Warm, evidence-based therapy in Santa Monica for high-achieving adults navigating chronic anxiety, burnout, and the fatigue of staying constantly &apos;composed.&apos; A grounded space to calm your nervous system and rediscover ease.
            </p>
          </div>

          {/* 2. THE SINGLE IMAGE (Order 2 on mobile, Right col-span-5 Rows 1-2 on desktop) */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative w-full md:max-w-[480px] md:mx-auto md:aspect-[4/5] lg:max-w-none lg:mx-0 aspect-[4/5] sm:aspect-[3/4] overflow-hidden shadow-sm bg-warm-cream my-2 lg:my-0">
            <Image
              src="/images/maya-consulting.jpg"
              alt="Dr. Maya Reynolds consulting with a client in her warm Santa Monica office"
              fill
              priority
              fetchPriority="high"
              quality={85}
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 480px, 42vw"
            />
          </div>

          {/* 3. CTA Buttons & Location (Left col-span-7, Row 2 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-2 flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-7 py-3.5 text-xs uppercase tracking-widest font-semibold bg-sage text-white hover:bg-sage-hover transition duration-200 shadow-sm font-sans"
              >
                Schedule an Initial Call
              </Link>
              <Link
                href="/specialties"
                className="inline-flex justify-center items-center px-7 py-3.5 text-xs uppercase tracking-widest font-semibold border border-ocean/30 text-ocean hover:bg-warm-cream transition duration-200 font-sans"
              >
                Explore Specialties
              </Link>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-ocean/70 font-sans">
              <span className="w-1.5 h-1.5 bg-sage inline-block" />
              <span>In-Person at 123th St 45 W, Santa Monica &amp; California Telehealth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
