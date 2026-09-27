"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const timeSlotsByDay: Record<string, string[]> = {
    Monday: ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:15 PM"],
    Tuesday: ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:15 PM"],
    Wednesday: ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:15 PM"],
    Thursday: ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:15 PM"],
    Friday: ["9:00 AM", "10:30 AM", "12:00 PM", "1:15 PM"],
    Saturday: ["10:00 AM", "11:30 AM", "12:30 PM"],
  };

  const currentSlots = timeSlotsByDay[selectedDay] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="bg-warm-sand min-h-screen">
        {/* Header / Intro Banner */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 md:px-12 border-b border-ocean/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ocean font-normal leading-[1.18] max-w-3xl tracking-tight">
              Begin your journey toward steady, lasting{" "}
              <span className="italic font-serif text-sage">calm.</span>
            </h1>
            <p className="mt-6 text-ocean/75 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
              Whether you have questions about EMDR, want to know more about somatic therapy, or are ready to schedule a complimentary 15-minute phone call, I welcome you to reach out.
            </p>
          </div>
        </section>

        {/* Content & Form Split Grid */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Office Details & Logistics (5 of 12 cols)
                  order-2 pushes this below the form on mobile,
                  lg:order-1 restores standard left-to-right desktop layout */}
              <div className="order-2 lg:order-1 lg:col-span-5 space-y-10">
                
                {/* Office Photo (Sharp Edges) */}
                <div className="relative w-full aspect-[4/3] bg-warm-cream overflow-hidden shadow-sm">
                  <Image
                    src="/images/office1.jpeg"
                    alt="Dr. Maya Reynolds Santa Monica office sanctuary"
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 6rem), (max-width: 1279px) calc(41.667vw - 4.167rem), 467px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Location & Practice Info */}
                <div className="space-y-6 text-sm text-ocean/80 font-sans">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-ocean mb-2">
                      Office Location
                    </h3>
                    <p className="leading-relaxed">
                      123th Street 45 W<br />
                      Santa Monica, CA 90401
                    </p>
                    <p className="text-xs text-ocean/60 mt-1">
                      Quiet private suite with acoustic privacy and natural light.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-ocean mb-2">
                      Virtual Appointments
                    </h3>
                    <p className="leading-relaxed">
                      Secure, HIPAA-compliant telehealth sessions available across all of California.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-ocean mb-2">
                      Direct Contact
                    </h3>
                    <p>office@drmayareynolds.com</p>
                    <p>(310) 555-0192</p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-ocean mb-2">
                      Office Hours
                    </h3>
                    <p>Monday – Thursday: 9:00 AM – 6:00 PM</p>
                    <p>Friday: 9:00 AM – 2:00 PM</p>
                  </div>
                </div>

                {/* Crisis / Safety Notice */}
                <div className="p-6 bg-warm-cream border border-ocean/10 text-xs text-ocean/70 leading-relaxed font-sans">
                  <p className="font-semibold text-ocean mb-1">Crisis & Emergency Notice:</p>
                  <p>
                    This form is for scheduling and non-urgent inquiries. If you are experiencing a mental health emergency, please dial <strong>988</strong> (Suicide & Crisis Lifeline) or go to the nearest emergency room.
                  </p>
                </div>

              </div>

              {/* Right Column: Intake & Consultation Form (7 of 12 cols)
                  order-1 brings this to the very top on mobile,
                  lg:order-2 places it on the right side on desktop */}
              <div className="order-1 lg:order-2 lg:col-span-7 bg-warm-cream/50 p-8 sm:p-12 border border-ocean/10 shadow-sm">
                
                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <span className="text-3xl text-sage block">✓</span>
                    <h3 className="font-serif text-3xl text-ocean font-normal">
                      Thank you for reaching out.
                    </h3>
                    {selectedTime ? (
                      <p className="text-ocean/90 text-sm font-sans bg-warm-sand px-4 py-2 border border-warm-cream inline-block">
                        Requested Consultation: <strong>{selectedDay} at {selectedTime}</strong>
                      </p>
                    ) : null}
                    <p className="text-ocean/75 text-base max-w-md mx-auto font-sans leading-relaxed">
                      Your consultation inquiry has been received. I review all inquiries personally and will respond within 24 to 48 business hours to confirm your call.
                    </p>
                    <div className="pt-6">
                      <Link
                        href="/"
                        className="inline-block text-xs uppercase font-semibold tracking-widest text-ocean hover:text-sage border-b border-ocean/40 pb-1 transition-colors font-sans"
                      >
                        ← Return to Homepage
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl text-ocean font-normal mb-2">
                        Schedule a Consultation
                      </h2>
                      <p className="text-ocean/70 text-xs sm:text-sm font-sans">
                        All inquiries are confidential. Fields marked with an asterisk (*) are required.
                      </p>
                    </div>

                    {/* Name Fields (2 Columns) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-ocean/80 mb-2 font-sans">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your first name"
                          className="w-full bg-warm-sand px-4 py-3 text-sm text-ocean border border-ocean/20 focus:border-sage focus:outline-none transition-colors font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-ocean/80 mb-2 font-sans">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your last name"
                          className="w-full bg-warm-sand px-4 py-3 text-sm text-ocean border border-ocean/20 focus:border-sage focus:outline-none transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-ocean/80 mb-2 font-sans">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="w-full bg-warm-sand px-4 py-3 text-sm text-ocean border border-ocean/20 focus:border-sage focus:outline-none transition-colors font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-ocean/80 mb-2 font-sans">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(310) 000-0000"
                          className="w-full bg-warm-sand px-4 py-3 text-sm text-ocean border border-ocean/20 focus:border-sage focus:outline-none transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Session Format Preference */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ocean/80 mb-2 font-sans">
                        Session Preference *
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full bg-warm-sand px-4 py-3 text-sm text-ocean border border-ocean/20 focus:border-sage focus:outline-none transition-colors font-sans"
                      >
                        <option value="" disabled>Select your preferred format</option>
                        <option value="in-person">In-Person (Santa Monica, CA)</option>
                        <option value="telehealth">Telehealth (California Statewide)</option>
                        <option value="either">Open to Either</option>
                      </select>
                    </div>

                    {/* Primary Focus Area */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ocean/80 mb-2 font-sans">
                        Primary Area of Focus
                      </label>
                      <select
                        defaultValue=""
                        className="w-full bg-warm-sand px-4 py-3 text-sm text-ocean border border-ocean/20 focus:border-sage focus:outline-none transition-colors font-sans"
                      >
                        <option value="" disabled>What is prompting you to reach out?</option>
                        <option value="anxiety">High-Functioning Anxiety & Panic</option>
                        <option value="trauma">Trauma & EMDR Therapy</option>
                        <option value="burnout">Professional Burnout & Perfectionism</option>
                        <option value="somatic">Somatic & Nervous System Regulation</option>
                        <option value="transitions">Life & Career Transitions</option>
                        <option value="other">Other / Not Listed</option>
                      </select>
                    </div>

                    {/* Interactive Appointment Scheduler */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs uppercase tracking-wider font-semibold text-ocean/80 font-sans">
                          Select Consultation Day & Time *
                        </label>
                        <span className="text-[11px] text-ocean/60 font-sans">
                          {selectedDay === "Friday" ? "Hours: 9am – 2pm" : selectedDay === "Saturday" ? "Hours: 10am – 1pm" : "Hours: 9am – 6pm"}
                        </span>
                      </div>

                      {/* Day Tabs */}
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {daysOfWeek.map((day) => {
                          const isSelected = selectedDay === day;
                          return (
                            <button
                              type="button"
                              key={day}
                              onClick={() => {
                                setSelectedDay(day);
                                setSelectedTime("");
                              }}
                              className={`py-2 text-xs uppercase tracking-wider font-semibold font-sans transition-all border ${
                                isSelected
                                  ? "bg-sage text-white border-sage shadow-sm"
                                  : "bg-warm-sand text-ocean/80 border-ocean/20 hover:border-sage hover:text-sage"
                              }`}
                            >
                              {day.slice(0, 3)}
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Slots Grid */}
                      <div className="pt-2">
                        <span className="block text-[11px] uppercase tracking-wider text-ocean/60 font-sans mb-2">
                          Available 15-Minute Consultation Slots for {selectedDay}:
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {currentSlots.map((slot) => {
                            const isTimeSelected = selectedTime === slot;
                            return (
                              <button
                                type="button"
                                key={slot}
                                onClick={() => setSelectedTime(slot)}
                                className={`py-2 px-3 text-xs font-sans transition-all text-center border ${
                                  isTimeSelected
                                    ? "bg-ocean text-warm-sand border-ocean font-semibold shadow-sm"
                                    : "bg-warm-sand text-ocean border-ocean/15 hover:border-ocean/40"
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                        {selectedTime && (
                          <p className="text-xs text-sage font-medium font-sans mt-2">
                            ✓ Selected: {selectedDay} at {selectedTime}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ocean/80 mb-2 font-sans">
                        Brief Note (Optional)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Share anything you'd like me to know prior to our call..."
                        className="w-full bg-warm-sand px-4 py-3 text-sm text-ocean border border-ocean/20 focus:border-sage focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-semibold bg-sage text-white hover:bg-sage-hover shadow-sm transition-all duration-200 font-sans"
                      >
                        Send Consultation Request
                      </button>
                    </div>

                    <p className="text-[11px] text-ocean/60 font-sans pt-2">
                      🔒 Your submission is encrypted and strictly confidential.
                    </p>
                  </form>
                )}

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
