import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Good Faith Estimate Notice | Dr. Maya Reynolds, PsyD",
  description: "Good Faith Estimate notice under the No Surprises Act for therapy clients at Dr. Maya Reynolds, PsyD in Santa Monica, California.",
};

export default function GoodFaithEstimatePage() {
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
            Federal Protection & Billing Transparency
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-ocean font-normal max-w-3xl leading-tight">
            Good Faith Estimate Notice
          </h1>
          <p className="mt-4 text-xs uppercase tracking-widest text-ocean/60 font-sans">
            Notice under the Federal No Surprises Act (Public Law 116-260)
          </p>
        </section>

        {/* Content */}
        <section className="py-16 px-6 max-w-4xl mx-auto space-y-10 text-ocean/85 font-sans leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">Your Right to a &ldquo;Good Faith Estimate&rdquo;</h2>
            <p>
              Under federal law, healthcare providers need to give patients who don&apos;t have insurance or who are not using insurance an estimate of the expected charges for medical services, including psychotherapy services.
            </p>
          </div>

          <div className="bg-warm-cream/50 p-6 md:p-8 border border-warm-cream space-y-4">
            <h3 className="font-serif text-xl text-ocean">Key Rights Under the Law</h3>
            <ul className="list-disc pl-5 space-y-3 text-ocean/80">
              <li>
                You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency healthcare services, including psychotherapy sessions.
              </li>
              <li>
                You can ask your healthcare provider for a Good Faith Estimate before you schedule a service or at any time during your course of care.
              </li>
              <li>
                Dr. Maya Reynolds will provide a written Good Faith Estimate prior to your initial intake session detailing the fee structure ($250 per 50-minute individual session) and estimated frequency.
              </li>
              <li>
                If you receive a bill that is at least $400 more than your Good Faith Estimate, you have the legal right to dispute the bill.
              </li>
              <li>
                Make sure to save a copy or picture of your Good Faith Estimate for your records.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">Therapy Pacing & Duration</h2>
            <p className="mb-3">
              Because psychotherapy is highly personalized, the total duration and frequency of treatment depend on your individual clinical needs, goals, and progress. We collaborate on treatment pacing, and you maintain complete agency to conclude or pause therapy whenever you choose.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">Questions & Dispute Resolution</h2>
            <p className="mb-4">
              For questions or more information about your right to a Good Faith Estimate, or the dispute process, visit{" "}
              <a
                href="https://www.cms.gov/nosurprises"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage font-semibold underline hover:text-sage-hover"
              >
                www.cms.gov/nosurprises
              </a>{" "}
              or call (800) 985-3059.
            </p>
            <p>
              You can also contact Dr. Maya Reynolds directly at <strong>office@drmayareynolds.com</strong> to discuss any fee or billing questions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
