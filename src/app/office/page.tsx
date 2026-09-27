import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurOffice from "@/components/TheOffice";
import AppointmentCTA from "@/components/AppointmentCTA";
import Link from "next/link";

export const metadata = {
  title: "The Santa Monica Office | Dr. Maya Reynolds, PsyD",
  description: "Take a look inside the serene, light-filled therapy office located at 123th Street 45 W in Santa Monica, California. In-person therapy and statewide telehealth.",
};

export default function OfficePage() {
  return (
    <div className="bg-warm-sand min-h-screen text-ocean flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Editorial Header */}
        <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto border-b border-warm-cream">
          <Link
            href="/"
            className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-ocean/70 hover:text-sage transition-colors mb-6 group font-sans"
          >
            <svg
              className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <span className="text-xs uppercase tracking-widest text-sage font-semibold block mb-2 font-sans">
            Santa Monica Sanctuary
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ocean font-normal max-w-4xl leading-tight">
            The Santa Monica Office & Setting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ocean/80 max-w-2xl font-sans leading-relaxed">
            A quiet, light-filled, private space in Santa Monica designed to help you leave the rush of the city behind and settle into calm presence.
          </p>
        </section>

        {/* Office Feature Section */}
        <OurOffice />

        {/* Action CTA */}
        <AppointmentCTA />
      </main>

      <Footer />
    </div>
  );
}
