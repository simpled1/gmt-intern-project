import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentCTA from "@/components/AppointmentCTA";

export const metadata = {
    title: "About Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
    description:
        "Learn about Dr. Maya Reynolds, PsyD, a licensed clinical psychologist in Santa Monica specializing in anxiety, burnout, trauma, and somatic therapy for high-achieving adults.",
};

export default function AboutPage() {
    const modalities = [
        {
            number: "01",
            title: "Cognitive Behavioral Therapy (CBT)",
            description:
                "We identify unconscious cognitive loops, perfectionism traps, and catastrophic predictions, giving you practical restructuring tools to quiet mental spirals and regain agency over your thoughts.",
        },
        {
            number: "02",
            title: "EMDR Therapy",
            description:
                "Eye Movement Desensitization and Reprocessing facilitates the brain’s natural information processing system. By reprocessing unprocessed trauma, past events stop producing involuntary panic in your present.",
        },
        {
            number: "03",
            title: "Somatic & Body-Based Care",
            description:
                "Anxiety and trauma live in the physical nervous system. We incorporate breath regulation, vagal tone activation, and body awareness to calm fight-or-flight states where words alone fall short.",
        },
    ];

    return (
        <>
            <Navbar />

            <main className="bg-warm-sand min-h-screen">
                {/* ========================================================= */}
                {/* HERO SECTION                                              */}
                {/* ========================================================= */}
                <section className="pt-16 pb-14 md:pt-24 md:pb-20 px-6 md:px-12 border-b border-ocean/10">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs uppercase tracking-widest font-semibold text-sage block mb-4 font-sans">
                            About Dr. Maya Reynolds, PsyD · Licensed Psychologist
                        </span>
                        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ocean font-normal leading-[1.18] max-w-3xl tracking-tight">
                            A warm, grounded space for adults who are tired of{" "}
                            <span className="italic font-serif text-sage">holding it all together.</span>
                        </h1>
                        <p className="mt-6 text-ocean/75 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
                            I specialize in working with thoughtful professionals, creatives, and perfectionists who feel internally exhausted by anxiety, burnout, and past trauma.
                        </p>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* DEEP STORY & APPROACH SPLIT                              */}
                {/* ========================================================= */}
                <section className="py-24 md:py-32 px-6 md:px-12 bg-warm-cream/50 border-b border-ocean/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Left Column: Portrait */}
                            <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[3/4] bg-warm-sand overflow-hidden shadow-sm">
                                <Image
                                    src="/images/maya-reynolds.png"
                                    alt="Dr. Maya Reynolds, PsyD"
                                    fill
                                    sizes="(max-width: 1023px) calc(100vw - 6rem), (max-width: 1279px) calc(41.667vw - 4.167rem), 467px"
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Right Column: Bio Narrative */}
                            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-ocean/80 text-base sm:text-lg leading-relaxed font-sans font-normal">
                                <span className="text-xs uppercase tracking-widest font-semibold text-sage block font-sans">
                                    My Story & Clinical Philosophy
                                </span>

                                <h2 className="font-serif text-3xl sm:text-4xl text-ocean font-normal leading-tight tracking-tight">
                                    Therapy is not about fixing what is broken. It is about reconnecting with what was{" "}
                                    <span className="italic text-sage">pushed aside.</span>
                                </h2>

                                <p>
                                    Many of the people who find their way to my Santa Monica office are accomplished problem-solvers. You know how to meet deadlines, organize chaos, and project absolute competence. But privately, you may be living on adrenaline, bracing for failure, or feeling disconnected from your own physical sensations.
                                </p>

                                <p>
                                    I built this practice to offer an antidote to performance. In our sessions, there is no expectation to have things neatly figured out. We slow down the frantic momentum of daily life so you can look beneath surface anxiety, understand your body’s alarm systems, and begin healing with genuine safety.
                                </p>

                                <p>
                                    Trauma work is a cornerstone of my clinical practice. Whether you are processing a recent overwhelming event or the long-standing emotional patterns of childhood, our work is paced carefully. We prioritize stabilization, regulation, and nervous system resilience so that therapeutic insight translates into tangible ease in your real life.
                                </p>

                                <div className="pt-4">
                                    <Link
                                        href="/contact"
                                        className="inline-block text-xs uppercase font-semibold tracking-widest text-ocean hover:text-sage border-b border-ocean/40 hover:border-sage pb-1 transition-all duration-300 font-sans"
                                    >
                                        Schedule An Initial Call →
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* CLINICAL MODALITIES (3 Sharp Columns)                     */}
                {/* ========================================================= */}
                <section className="py-24 md:py-32 px-6 md:px-12 border-b border-ocean/10">
                    <div className="max-w-7xl mx-auto">

                        <div className="max-w-3xl mb-16 md:mb-20">
                            <span className="text-xs uppercase tracking-widest font-semibold text-sage block mb-4 font-sans">
                                Evidence-Based Integration
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ocean font-normal leading-tight tracking-tight">
                                How We Work Together
                            </h2>
                            <p className="mt-4 text-ocean/70 text-base sm:text-lg leading-relaxed font-sans">
                                I do not believe in one-size-fits-all treatments. I synthesize three proven clinical frameworks tailored to your unique history and nervous system.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {modalities.map((item, index) => (
                                <div key={index} className="p-8 sm:p-10 bg-warm-cream/50 border border-ocean/10 space-y-4 shadow-sm">
                                    <span className="text-xs uppercase tracking-widest font-semibold text-sage block font-sans">
                                        {item.number}
                                    </span>
                                    <h3 className="font-serif text-2xl text-ocean font-normal leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-ocean/75 text-sm sm:text-base leading-relaxed font-sans">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* CREDENTIALS & LICENSURE                                   */}
                {/* ========================================================= */}
                <section className="py-20 md:py-28 px-6 md:px-12 bg-warm-cream/40 border-b border-ocean/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                            <div className="lg:col-span-4">
                                <span className="text-xs uppercase tracking-widest font-semibold text-sage block mb-3 font-sans">
                                    Background
                                </span>
                                <h3 className="font-serif text-3xl sm:text-4xl text-ocean font-normal leading-tight">
                                    Education & Credentials
                                </h3>
                            </div>

                            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-sans text-ocean/80">
                                <div className="space-y-4">
                                    <div className="border-b border-ocean/15 pb-4">
                                        <p className="font-semibold text-ocean">Doctor of Psychology (PsyD)</p>
                                        <p className="text-ocean/70 text-xs mt-1">Clinical Psychology</p>
                                    </div>
                                    <div className="border-b border-ocean/15 pb-4">
                                        <p className="font-semibold text-ocean">Licensed Clinical Psychologist</p>
                                        <p className="text-ocean/70 text-xs mt-1">California Board of Psychology</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="border-b border-ocean/15 pb-4">
                                        <p className="font-semibold text-ocean">EMDR Certified Clinician</p>
                                        <p className="text-ocean/70 text-xs mt-1">Specialized in Trauma & PTSD</p>
                                    </div>
                                    <div className="border-b border-ocean/15 pb-4">
                                        <p className="font-semibold text-ocean">Somatic & Mindfulness Training</p>
                                        <p className="text-ocean/70 text-xs mt-1">Body-Oriented Nervous System Regulation</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* APPOINTMENT CALL TO ACTION                                */}
                {/* ========================================================= */}
                <AppointmentCTA />
            </main>

            <Footer />
        </>
    );
}
