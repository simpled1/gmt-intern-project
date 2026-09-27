import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { methodsData } from "@/data/methods";
import AppointmentCTA from "@/components/AppointmentCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(methodsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const method = methodsData[slug];
  if (!method) return {};
  return {
    title: `${method.name} in Santa Monica, CA | Dr. Maya Reynolds, PsyD`,
    description: method.subtitle,
    openGraph: {
      title: `${method.name} | Dr. Maya Reynolds, PsyD`,
      description: method.subtitle,
      url: `https://drmayareynolds.com/methods/${slug}`,
    },
  };
}

export default async function MethodPage({ params }: PageProps) {
  const { slug } = await params;
  const method = methodsData[slug];

  if (!method) {
    notFound();
  }

  return (
    <div className="bg-warm-sand min-h-screen text-ocean flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Header / Breadcrumb */}
        <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto border-b border-warm-cream">
          <Link
            href="/methods"
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
            Back to Methods
          </Link>

          <span className="text-xs uppercase tracking-widest text-sage font-semibold block mb-2 font-sans">
          Integrative Modality
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ocean font-normal max-w-4xl leading-tight">
          {method.fullTitle}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-ocean/80 max-w-2xl font-sans leading-relaxed">
          {method.subtitle}
        </p>
      </section>

      {/* Main Narrative Split */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* 1. Narrative Description (Left, Row 1 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-1 space-y-6 text-ocean/85 leading-relaxed font-sans text-base sm:text-lg">
            {method.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* 2. THE SINGLE IMAGE (Order 2 on mobile, Right col-span-5 Rows 1-2 on desktop) */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative aspect-[16/9] lg:aspect-[4/5] w-full border border-warm-cream shadow-md overflow-hidden bg-warm-cream/30 my-4 lg:my-0">
            <Image
              src={method.image}
              alt={method.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 42vw"
              priority
            />
          </div>

          {/* 3. Session Experience (Left, Row 2 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-2 pt-4 lg:pt-8 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-ocean font-normal">
              What Sessions Feel Like
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-ocean/80">
              {method.sessionExperience.map((exp, idx) => (
                <p key={idx}>{exp}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars / Principles Grid */}
      <section className="py-20 px-6 bg-warm-cream/40 border-y border-warm-cream">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage font-semibold font-sans">
              Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ocean font-normal">
              {method.principlesHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {method.principles.map((principle, idx) => (
              <div
                key={idx}
                className="bg-warm-sand p-8 border border-warm-cream shadow-sm space-y-3 rounded-none"
              >
                <h3 className="font-serif text-xl sm:text-2xl text-ocean font-normal">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-ocean/75 font-sans leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="border border-warm-cream bg-warm-sand p-8 md:p-12 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-ocean font-normal">
            Particularly Helpful For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {method.idealFor.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-ocean/80 text-sm sm:text-base font-sans">
                <span className="w-2 h-2 bg-clay flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AppointmentCTA />
    </main>

    <Footer />
  </div>
  );
}

