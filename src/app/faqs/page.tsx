import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQs from "@/components/FAQs";
import AppointmentCTA from "@/components/AppointmentCTA";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | Dr. Maya Reynolds, PsyD",
  description: "Find clear answers about therapy fees, insurance reimbursement, California telehealth, Santa Monica office location, and how to get started.",
};

export default function FAQsPage() {
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
            Client Clarity & Transparency
          </span>
          {/* <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ocean font-normal max-w-4xl leading-tight">
            Frequently Asked Questions
          </h1> */}
          <p className="mt-4 text-base sm:text-lg text-ocean/80 max-w-2xl font-sans leading-relaxed">
            Everything you need to know about getting started, scheduling, insurance, and what working together looks like.
          </p>
        </section>

        {/* FAQs Component */}
        <FAQs />

        {/* Reassurance Callout */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-warm-cream">
          <p className="text-xs uppercase tracking-widest text-sage font-semibold font-sans mb-3">
            Have a Specific Question?
          </p>
          <p className="font-serif text-2xl sm:text-3xl text-ocean font-normal leading-relaxed">
            If you have questions not covered here, feel free to mention them during our initial 15-minute consultation.
          </p>
        </section>

        {/* Action CTA */}
        <AppointmentCTA />
      </main>

      <Footer />
    </div>
  );
}
