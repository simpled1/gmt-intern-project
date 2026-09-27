import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { specialtiesData } from "@/data/specialties";
import AppointmentCTA from "@/components/AppointmentCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(specialtiesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = specialtiesData[slug];
  if (!specialty) return {};
  return {
    title: `${specialty.title} in Santa Monica, CA | Dr. Maya Reynolds, PsyD`,
    description: specialty.subtitle,
    openGraph: {
      title: `${specialty.title} | Dr. Maya Reynolds, PsyD`,
      description: specialty.subtitle,
      url: `https://drmayareynolds.com/specialties/${slug}`,
    },
  };
}

export default async function SpecialtyPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = specialtiesData[slug];

  if (!specialty) {
    notFound();
  }

  return (
    <div className="bg-warm-sand min-h-screen text-ocean flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Header / Breadcrumb */}
      <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto border-b border-warm-cream">
        <Link
          href="/specialties"
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
          Back to Specialties
        </Link>

        <span className="text-xs uppercase tracking-widest text-sage font-semibold block mb-2 font-sans">
          {specialty.tagline}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ocean font-normal max-w-4xl leading-tight">
          {specialty.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-ocean/80 max-w-2xl font-sans leading-relaxed">
          {specialty.subtitle}
        </p>
      </section>

      {/* Main Narrative Split */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* 1. Narrative Overview (Left, Row 1 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-1 space-y-6 text-ocean/85 leading-relaxed font-sans text-base sm:text-lg">
            {specialty.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* 2. THE SINGLE IMAGE (Order 2 on mobile, Right col-span-5 Rows 1-2 on desktop) */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative aspect-[16/9] lg:aspect-[4/5] w-full border border-warm-cream shadow-md overflow-hidden bg-warm-cream/30 my-4 lg:my-0">
            <Image
              src={specialty.image}
              alt={specialty.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 42vw"
              priority
            />
          </div>

          {/* 3. Approach (Left, Row 2 on desktop) */}
          <div className="lg:col-span-7 lg:row-start-2 pt-4 lg:pt-8 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-ocean font-normal">
              {specialty.approachHeading}
            </h2>
            <ul className="space-y-3 pt-2">
              {specialty.approach.map((point, idx) => (
                <li key={idx} className="flex items-start text-sm sm:text-base text-ocean/80">
                  <span className="inline-block w-2 h-2 bg-sage mt-2 mr-3 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Symptoms & Experiences Grid */}
      <section className="py-20 px-6 bg-warm-cream/40 border-y border-warm-cream">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage font-semibold font-sans">
              Clinical Understanding
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ocean font-normal">
              {specialty.symptomsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialty.symptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="bg-warm-sand p-8 border border-warm-cream shadow-sm space-y-3 rounded-none"
              >
                <h3 className="font-serif text-xl sm:text-2xl text-ocean font-normal">
                  {symptom.title}
                </h3>
                <p className="text-sm sm:text-base text-ocean/75 font-sans leading-relaxed">
                  {symptom.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance Callout */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <blockquote className="font-serif text-2xl sm:text-3xl text-ocean italic leading-relaxed">
          &ldquo;{specialty.takeaway}&rdquo;
        </blockquote>
      </section>

      {/* Direct Intake CTA */}
      <AppointmentCTA />
    </main>

    <Footer />
  </div>
  );
}

