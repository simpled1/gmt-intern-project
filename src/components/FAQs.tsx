"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What can I expect in our initial consultation?",
      answer:
        "Our first conversation is a relaxed, no-pressure 15-minute phone call. We will discuss what brings you to therapy, answer any questions you have about my clinical approach, and determine whether my practice is the right fit for your goals.",
    },
    {
      question: "Do you offer in-person sessions, telehealth, or both?",
      answer:
        "Both. I provide in-person sessions from my quiet, private office in Santa Monica (123th Street 45 W) as well as secure, HIPAA-compliant telehealth sessions for clients living anywhere in California.",
    },
    {
      question: "How does EMDR therapy work for trauma and anxiety?",
      answer:
        "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based modality that helps your brain reprocess unresolved, painful memories. Rather than having to talk about trauma repeatedly, bilateral stimulation helps calm the nervous system's fight-or-flight response at the root.",
    },
    {
      question: "What is your approach to confidentiality and privacy?",
      answer:
        "Your privacy is paramount. Sessions are strictly confidential within legal and ethical standards. My Santa Monica office is intentionally designed for acoustic discretion, ensuring you have a safe sanctuary to speak openly.",
    },
    {
      question: "How frequently do we meet, and how long does therapy take?",
      answer:
        "Most clients begin with weekly 50-minute sessions to build momentum and establish emotional stabilization. The overall duration depends on whether you are working through an acute transition or addressing long-standing trauma patterns.",
    },
  ];

  return (
    <section id="faqs" className="bg-warm-sand py-12 md:py-18 px-6 md:px-12 border-b border-ocean/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest font-semibold text-sage block mb-4 font-sans">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ocean font-normal leading-tight tracking-tight">
            Frequently Asked <span className="italic font-serif text-sage">Questions</span>
          </h2>
          <p className="mt-4 text-ocean/70 text-sm sm:text-base font-sans max-w-xl mx-auto">
            Starting therapy is an investment in yourself. Here are answers to the practical questions prospective clients ask most.
          </p>
        </div>

        {/* Accordion List (Sharp Hairlines, No Rounded Pills) */}
        <div className="border-t border-ocean/15 divide-y divide-ocean/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className="font-serif text-xl sm:text-2xl text-ocean font-normal group-hover:text-sage transition-colors duration-200 pr-6">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-ocean/50 group-hover:text-sage font-light transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-ocean/75 text-sm sm:text-base leading-relaxed font-sans animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Note */}
        <div className="mt-14 text-center space-y-3 font-sans">
          <p className="text-ocean/70 text-sm">
            Have a question not listed here?{" "}
            <Link
              href="/contact"
              className="text-ocean font-semibold hover:text-sage border-b border-ocean/30 pb-0.5 transition-colors"
            >
              Reach out directly
            </Link>
          </p>
          <div>
            <Link
              href="/faqs"
              className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-ocean hover:text-sage transition-colors border-b border-ocean/30 hover:border-sage pb-1"
            >
              <span>View full FAQ knowledge base</span>
              <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
