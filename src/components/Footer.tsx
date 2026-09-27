import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warm-sand text-ocean py-20 px-6 md:px-12 border-t border-ocean/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-ocean/10">
          
          {/* Brand & Practice Overview (5 of 12 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-ocean block">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="text-xs uppercase tracking-wider text-sage font-medium font-sans">
                Licensed Clinical Psychologist
              </span>
            </Link>
            <p className="text-ocean/70 text-sm leading-relaxed font-sans max-w-sm pt-2">
              Getting started is straightforward, personal, and confidential. In-person therapy in Santa Monica or secure virtual sessions across California—tailored to your pace and schedule.
            </p>
          </div>

          {/* Column 2: Navigation (2 of 12 cols) */}
          <div className="md:col-span-2 space-y-3 font-sans">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ocean/90">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-ocean/70">
              <li><Link href="/" className="hover:text-sage transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-sage transition-colors">About</Link></li>
              <li><Link href="/specialties" className="hover:text-sage transition-colors">Specialties</Link></li>
              <li><Link href="/methods" className="hover:text-sage transition-colors">Methods</Link></li>
              <li><Link href="/office" className="hover:text-sage transition-colors">The Office</Link></li>
              <li><Link href="/faqs" className="hover:text-sage transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-sage transition-colors">Contact</Link></li>
            </ul>
          </div>


          {/* Column 3: Hours & Availability (2 of 12 cols) */}
          <div className="md:col-span-2 space-y-3 font-sans">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ocean/90">
              Practice
            </h4>
            <div className="text-sm text-ocean/70 space-y-1">
              <p>Mon – Thu: 9am – 6pm</p>
              <p>Friday: 9am – 2pm</p>
              <p className="pt-2 text-sage font-medium">In-Person & Telehealth</p>
            </div>
          </div>

          {/* Column 4: Contact & Location (3 of 12 cols) */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ocean/90">
              Santa Monica Office
            </h4>
            <div className="text-sm text-ocean/70 space-y-1">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="pt-2">office@drmayareynolds.com</p>
              <p>(310) 555-0192</p>
            </div>
            <p className="text-xs text-ocean/60 pt-2">
              Serving Santa Monica, Venice, Brentwood, Pacific Palisades, and California statewide.
            </p>
          </div>

        </div>

        {/* Legal Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ocean/60 font-sans gap-4">
          <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-sage transition-colors">Privacy Policy</Link>
            <Link href="/good-faith-estimate" className="hover:text-sage transition-colors">Good Faith Estimate</Link>
            <Link href="/disclaimer" className="hover:text-sage transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
