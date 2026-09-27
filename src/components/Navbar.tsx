"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navLinks: NavItem[] = [
    { name: "About", href: "/about" },
    {
      name: "Specialties",
      href: "/specialties",
      children: [
        { name: "Anxiety & Panic", href: "/specialties/anxiety" },
        { name: "Trauma & PTSD", href: "/specialties/trauma" },
        { name: "Burnout & Perfectionism", href: "/specialties/burnout" },
        { name: "Life Transitions", href: "/specialties/transitions" },
      ],
    },
    {
      name: "Methods",
      href: "/methods",
      children: [
        { name: "CBT (Cognitive Behavioral)", href: "/methods/cbt" },
        { name: "EMDR Therapy", href: "/methods/emdr" },
        { name: "Somatic Therapy", href: "/methods/somatic" },
        { name: "Mindfulness & Grounding", href: "/methods/mindfulness" },
      ],
    },
    { name: "The Office", href: "/office" },
    { name: "FAQs", href: "/faqs" },
  ];


  return (
    <header className="sticky top-0 z-50 bg-warm-sand/95 backdrop-blur-sm border-b border-warm-cream transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand / Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-sans text-xl md:text-2xl font-medium tracking-wide text-ocean group-hover:text-sage transition-colors">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="text-[10px] tracking-widest uppercase text-ocean/60 font-medium font-sans">
            Clinical Psychologist • Santa Monica, CA
          </span>
        </Link>


        {/* Large screen nav */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">
              {link.children ? (
                <>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm font-medium text-ocean/80 group-hover:text-sage transition-colors cursor-pointer"
                  >
                    <span>{link.name}</span>
                    {/* Subtle Down Arrow */}
                    <svg
                      className="w-3.5 h-3.5 ml-1 text-ocean/60 group-hover:text-sage transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Dropdown Menu Box */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-warm-sand border border-warm-cream shadow-lg py-2 min-w-[240px] rounded-none">
                      {link.children.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-ocean hover:text-sage hover:bg-warm-cream/60 transition-colors font-sans"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-ocean/80 hover:text-sage transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Primary CTA button */}
          <Link
            href="/contact"
            className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-sage text-white hover:bg-sage-hover shadow-sm transition-all duration-200 font-sans rounded-none"
          >
            Book a Consultation
          </Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-ocean hover:text-sage focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-warm-sand border-b border-warm-cream px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-warm-cream/40 pb-2">
              {link.children ? (
                <div>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === link.name ? null : link.name)
                    }
                    className="w-full flex items-center justify-between text-base font-medium text-ocean text-left"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileExpanded === link.name ? "rotate-180 text-sage" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {mobileExpanded === link.name && (
                    <div className="mt-2 pl-3 space-y-2 border-l border-sage/40">
                      {link.children.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-ocean/80 hover:text-sage py-1"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-ocean hover:text-sage transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full px-5 py-3 text-xs uppercase tracking-widest font-semibold bg-sage text-white hover:bg-sage-hover transition-colors font-sans rounded-none"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
