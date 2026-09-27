import Image from "next/image";

export default function WhoWeHelp() {
  const audiences = [
    {
      title: "High-Achieving Professionals & Creatives",
      description:
        "You’ve built an impressive life on the outside, but internally you're running on stress, perfectionism, and the fear of slowing down. Therapy becomes a protected space to reconnect with yourself beyond the performance.",
      image: "/images/card-professionals.jpg",
      alt: "Thoughtful professional reflecting quietly in a calm, sunlit space",
    },
    {
      title: "Adults Navigating Anxiety & Silent Panic",
      description:
        "Constant worry, restless nights, physical tension you can’t shake, or sudden panic. You deserve more than just surface coping mechanisms—you deserve genuine somatic calm and clarity in daily life.",
      image: "/images/card-anxiety.jpg",
      alt: "Person practicing a grounding exercise in a peaceful room",
    },
    {
      title: "Adults Healing from Complex Trauma",
      description:
        "Whether from a single overwhelming experience or years of quietly carrying chronic emotional pressure, trauma shapes your sense of safety. Healing begins at your own pace, with stabilization and safety first.",
      image: "/images/card-trauma.jpg",
      alt: "Person walking along a quiet coastal shoreline at golden hour",
    },
  ];

  return (
    <section className="below-fold bg-warm-sand py-24 md:py-36 px-6 md:px-12 border-b border-ocean/10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header with generous breathing room */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest font-semibold text-sage block mb-4 font-sans">
            Who I Work With
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ocean font-normal leading-[1.25] tracking-tight">
            Therapy tailored to the complexities of your inner world.
          </h2>
          <p className="text-ocean/75 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            Every client arrives with a distinct history and nervous system. Here are the core experiences I most frequently help adults understand, stabilize, and transform.
          </p>
        </div>

        {/* 3-Card Grid with Sharp Edges & Spacious Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="group bg-warm-cream flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              {/* Sharp Edge Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-warm-sand">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(33.333vw - 3.667rem), (max-width: 1279px) calc(33.333vw - 4.333rem), 357px"
                />
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-ocean font-normal mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-ocean/75 text-sm sm:text-base leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
