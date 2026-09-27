import Image from "next/image";

export default function HonoringSection() {
  return (
    <section className="below-fold bg-warm-sand py-24 md:py-36 px-6 md:px-12 border-b border-ocean/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Grounding Photo (7 of 12 cols, order-2 on mobile, order-1 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 relative w-full md:max-w-[640px] md:mx-auto lg:max-w-none lg:mx-0 aspect-[4/3] bg-warm-cream overflow-hidden shadow-sm">
            <Image
              src="/images/honoring-presence.jpg"
              alt="Honoring your history and shaping your future"
              fill
              sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 640px, (max-width: 1279px) calc(58.333vw - 5.833rem), 667px"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right: The Elegant Serif Statement (5 of 12 cols, order-1 on mobile, order-2 on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-ocean font-normal leading-[1.2] tracking-tight">
              Understanding your past{" "}
              <span className="italic text-sage font-serif">&</span>{" "}
              Guiding your future.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
