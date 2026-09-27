import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Website & Professional Disclaimer | Dr. Maya Reynolds, PsyD",
  description: "Website disclaimer and emergency medical advisory for Dr. Maya Reynolds, PsyD clinical psychology practice.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-warm-sand min-h-screen text-ocean flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-20 pb-12 px-6 max-w-4xl mx-auto border-b border-warm-cream">
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
            Professional Advisory
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-ocean font-normal max-w-3xl leading-tight">
            Website & Professional Disclaimer
          </h1>
          <p className="mt-4 text-xs uppercase tracking-widest text-ocean/60 font-sans">
            Important Information Regarding Medical Advice & Emergency Services
          </p>
        </section>

        {/* Content */}
        <section className="py-16 px-6 max-w-4xl mx-auto space-y-10 text-ocean/85 font-sans leading-relaxed text-sm sm:text-base">
          {/* Emergency Callout Box */}
          <div className="p-6 md:p-8 bg-clay/10 border-l-4 border-clay text-ocean space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-ocean">
              Emergency & Crisis Advisory
            </h2>
            <p className="text-sm leading-relaxed">
              This website and online contact forms are <strong>not</strong> intended for emergency situations or urgent crisis management. If you are experiencing suicidal thoughts, self-harm impulses, or a severe medical/mental health emergency:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-ocean/90">
              <li>Call or text <strong>988</strong> to connect with the National Suicide & Crisis Lifeline (free and confidential 24/7).</li>
              <li>Text <strong>HOME</strong> to <strong>741741</strong> to connect with the Crisis Text Line.</li>
              <li>Call <strong>911</strong> or proceed to the nearest hospital emergency room immediately.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">1. Informational Purposes Only</h2>
            <p>
              The content provided on this website—including articles, specialty overviews, clinical methodology descriptions, and blog posts—is published solely for educational, informational, and general reference purposes. It does not constitute formal psychological evaluation, medical diagnosis, psychiatric consultation, or clinical advice.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">2. No Doctor-Patient Relationship</h2>
            <p>
              Browsing this website, submitting an inquiry via the consultation form, or engaging in an initial introductory phone call does <strong>not</strong> establish a psychologist-patient relationship with Dr. Maya Reynolds, PsyD. A formal professional relationship is established only after mutual consent, a signed clinical consent agreement, and the completion of a comprehensive intake assessment.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">3. Professional Jurisdiction</h2>
            <p>
              Dr. Maya Reynolds, PsyD, is a Licensed Clinical Psychologist licensed to practice psychology under the laws of the State of California. In-person services are provided exclusively at her Santa Monica, California office. Virtual telehealth services are provided exclusively to clients who are physically located within California at the time of each session.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">4. External Links & Third-Party Resources</h2>
            <p>
              This website may contain links to external websites, articles, or resources for your convenience. Dr. Maya Reynolds does not control, endorse, or accept liability for the content, privacy policies, or practices of any third-party websites.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">5. Inquiries</h2>
            <p>
              For formal questions regarding these disclaimers, please contact:
            </p>
            <p className="mt-2 text-sm text-ocean/80">
              Dr. Maya Reynolds, PsyD<br />
              123th Street 45 W, Santa Monica, CA 90401<br />
              office@drmayareynolds.com
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
