import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Dr. Maya Reynolds, PsyD",
  description: "Privacy policy and HIPAA compliance information for Dr. Maya Reynolds, PsyD clinical psychology practice in Santa Monica, California.",
};

export default function PrivacyPolicyPage() {
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
            Legal & Compliance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-ocean font-normal max-w-3xl leading-tight">
            Privacy Policy & HIPAA Notice
          </h1>
          <p className="mt-4 text-xs uppercase tracking-widest text-ocean/60 font-sans">
            Last Updated: January 2026 · Dr. Maya Reynolds, PsyD
          </p>
        </section>

        {/* Content */}
        <section className="py-16 px-6 max-w-4xl mx-auto space-y-10 text-ocean/85 font-sans leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">Notice of Privacy Practices</h2>
            <p>
              This notice describes how medical and psychological information about you may be used and disclosed and how you can get access to this information. Protecting your personal and health information is central to clinical practice ethics. Please review it carefully.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">1. Information Collection</h2>
            <p className="mb-3">
              When you visit this website, contact the practice via web forms, or engage in clinical psychotherapy, information may be gathered to deliver secure, individualized care:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-ocean/80">
              <li><strong>Contact Information:</strong> Name, phone number, email address, and scheduling preferences submitted through our consultation form.</li>
              <li><strong>Clinical Health Information (PHI):</strong> Notes, diagnostic assessments, treatment plans, and session records maintained strictly in HIPAA-compliant electronic health record (EHR) systems.</li>
              <li><strong>Technical Logs:</strong> Non-personally identifiable analytical data (such as browser type or page view timestamps) to ensure site security and functionality.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">2. How Your Information Is Used</h2>
            <p className="mb-3">
              Your protected health information is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-ocean/80">
              <li>Provide individualized psychotherapy services in-person in Santa Monica and via telehealth across California.</li>
              <li>Coordinate appointments, reminders, and billing receipts (superbills).</li>
              <li>Comply with California state law, professional licensing standards, and federal healthcare mandates.</li>
            </ul>
            <p className="mt-3">
              I will never sell, lease, or monetize your personal details or contact information under any circumstances.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">3. Confidentiality & Legal Limits</h2>
            <p className="mb-3">
              All communications between a client and a licensed clinical psychologist are confidential and protected by California law and HIPAA. Information is only revealed with your explicit written authorization, with the following mandatory legal exceptions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-ocean/80">
              <li>Clear suspicion of child, elder, or dependent adult abuse or neglect.</li>
              <li>A client presents an imminent danger of serious physical harm to themselves or others.</li>
              <li>A court order issued by a judge in a legal proceeding.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">4. Telehealth & Digital Communications</h2>
            <p>
              Virtual therapy sessions are conducted using encrypted, HIPAA-compliant telehealth software. Standard email and web contact forms are not encrypted health records; therefore, please refrain from submitting extensive sensitive clinical details through online web forms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ocean mb-3">5. Contact Information</h2>
            <p>
              If you have questions regarding this privacy policy or wish to request copies of your health records, please reach out directly:
            </p>
            <div className="mt-4 p-6 bg-warm-cream/50 border border-warm-cream space-y-1 text-sm">
              <p className="font-semibold text-ocean">Dr. Maya Reynolds, PsyD</p>
              <p>123th Street 45 W, Santa Monica, CA 90401</p>
              <p>Email: office@drmayareynolds.com</p>
              <p>Phone: (310) 555-0192</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
