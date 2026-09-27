import Image from "next/image";

export default function PhilosophyBanner() {
  return (
    <section className="below-fold relative w-full min-h-[460px] md:min-h-[540px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/philosophy-banner.jpg"
        alt="Santa Monica coastal sanctuary"
        fill
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />

      {/* Subtle Black Gradient: darkens behind text on left, clear on the right for visibility*/}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />

      {/* Anchor Quote */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 sm:py-24">
        <div className="max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white leading-relaxed sm:leading-snug font-normal tracking-wide">
            “You don&apos;t have to carry the weight of holding everything together.{" "}
            <span className="block mt-3 text-warm-sand">
              Here, we create the space to slow down, reconnect, and breathe.”
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
