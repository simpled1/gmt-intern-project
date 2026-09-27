import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentCTA from "@/components/AppointmentCTA";
import Link from "next/link";
import Image from "next/image";
import { methodsData } from "@/data/methods";

export const metadata = {
  title: "Integrative Methods & Approach | Dr. Maya Reynolds, PsyD",
  description: "Evidence-based modalities combining CBT, EMDR, Somatic Experiencing, and Mindfulness for nervous system healing in Santa Monica, CA.",
};

export default function MethodsIndexPage() {
  const methodsList = Object.values(methodsData);

  return (
    <div className="bg-warm-sand min-h-screen text-ocean flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Editorial Header */}
        <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto border-b border-warm-cream">
          <Link
            href="/"
            className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-ocean/70 hover:text-sage transition-colors mb-12 group font-sans"
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
            Integrative Modalities
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ocean font-normal max-w-4xl leading-tight">
            Integrative Methods & Modalities
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ocean/80 max-w-2xl font-sans leading-relaxed">
            True transformation requires working with both mind and body. In therapy, I integrate cognitive restructuring, memory reprocessing, and somatic regulation.
          </p>
        </section>

        {/* 4 Methods Grid */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {methodsList.map((item) => (
              <div
                key={item.slug}
                className="bg-warm-cream/30 border border-warm-cream p-8 flex flex-col justify-between space-y-6 hover:border-sage/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] w-full border border-warm-cream overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) calc(50vw - 4.5rem), 568px"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-sage font-semibold block font-sans">
                    Evidence-Based Care
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-ocean font-normal">
                    {item.name}
                  </h2>
                  <p className="text-sm sm:text-base text-ocean/75 font-sans leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/methods/${item.slug}`}
                    className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-ocean hover:text-sage transition-colors border-b border-ocean/30 hover:border-sage pb-1 font-sans"
                  >
                    <span>Learn About {item.name}</span>
                    <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AppointmentCTA />
      </main>

      <Footer />
    </div>
  );
}
