import Link from "next/link";

export default function AppointmentCTA() {
  return (
    <section id="contact" className="bg-warm-cream/60 py-24 md:py-36 px-6 md:px-12 border-b border-ocean/10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Eyebrow Label */}
        <span className="text-xs uppercase tracking-widest font-semibold text-sage block mb-4 font-sans">
          Schedule An Appointment
        </span>

        {/* Main Serif Headline with Script/Italic Accent */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-ocean font-normal leading-[1.2] tracking-tight">
          Find a therapist who is the right fit for{" "}
          <span className="italic font-serif text-sage">you.</span>
        </h2>

        {/* Reassuring Empathetic Copy */}
        <p className="mt-8 text-ocean/75 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
          Reaching out for support takes courage, and finding someone you genuinely connect with makes all the difference. I invite you to schedule a complimentary 15-minute consultation to ask questions, share what you’re experiencing, and see how we might work together.
        </p>

        {/* Sharp Editorial CTA Button */}
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-xs uppercase tracking-widest font-semibold bg-sage text-white hover:bg-sage-hover shadow-sm transition-all duration-200 font-sans"
          >
            Book A Free Consultation
          </Link>
        </div>

        {/* Direct Contact Alternatives */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-ocean/70 font-sans">
          <span>In-Person: 123th Street 45 W, Santa Monica, CA</span>
          <span>·</span>
          <span>Telehealth: Across California</span>
          <span>·</span>
          <a href="tel:3105550192" className="hover:text-sage underline underline-offset-4">
            (310) 555-0192
          </a>
        </div>

      </div>
    </section>
  );
}
