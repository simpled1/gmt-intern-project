export interface MethodData {
  slug: string;
  name: string;
  fullTitle: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string[];
  principlesHeading: string;
  principles: { title: string; description: string }[];
  sessionExperience: string[];
  idealFor: string[];
}

export const methodsData: Record<string, MethodData> = {
  cbt: {
    slug: "cbt",
    name: "Cognitive Behavioral Therapy (CBT)",
    fullTitle: "Cognitive Behavioral Therapy in Santa Monica",
    subtitle: "Identify automatic negative thought loops and reshape how you interpret and engage with the world.",
    image: "/images/how-we-work.jpg",
    imageAlt: "Dr. Maya Reynolds in an active clinical dialogue in her Santa Monica office",
    description: [
      "Cognitive Behavioral Therapy (CBT) is an evidence-based clinical modality focused on the interconnection between thoughts, emotions, and behaviors.",
      "Rather than treating anxiety or self-doubt as mysterious flaws, CBT equips you with structured cognitive tools to examine the evidence behind your inner critic, dismantle catastrophic thinking, and test new behaviors."
    ],
    principlesHeading: "Core Pillars of CBT",
    principles: [
      {
        title: "Cognitive Restructuring",
        description: "Learn to catch 'all-or-nothing' thoughts, mind-reading, and catastrophizing before they trigger emotional distress."
      },
      {
        title: "Behavioral Experiments",
        description: "Safely test assumptions in real-world scenarios to build genuine confidence and resilience."
      },
      {
        title: "Practical Coping Toolkits",
        description: "Leave each session with actionable exercises, tracking sheets, and mental frameworks tailored to your daily life."
      }
    ],
    sessionExperience: [
      "Sessions are collaborative, structured, and focused on current challenges.",
      "We trace specific triggers, break down the thoughts that accompanied them, and construct pragmatic responses that ease distress."
    ],
    idealFor: [
      "Panic attacks and situational anxiety",
      "Perfectionism and harsh self-criticism",
      "Overthinking and chronic decision fatigue",
      "Workplace imposter syndrome"
    ]
  },
  emdr: {
    slug: "emdr",
    name: "EMDR Therapy",
    fullTitle: "Eye Movement Desensitization & Reprocessing (EMDR)",
    subtitle: "Accelerate deep trauma resolution without having to recount painful memories in agonizing detail.",
    image: "/images/card-trauma.jpg",
    imageAlt: "Serene coastal setting representing deep trauma resolution and peace",
    description: [
      "EMDR is a highly researched psychotherapy approach that enables people to heal from the symptoms and emotional distress resulting from disturbing life experiences.",
      "Using gentle bilateral stimulation (such as eye movements, alternating auditory tones, or tactile pulsers), EMDR helps your brain's natural information processing system unfreeze traumatic memories and integrate them adaptively."
    ],
    principlesHeading: "Why EMDR Is So Effective",
    principles: [
      {
        title: "Direct Memory Reprocessing",
        description: "Bypasses verbal rationalization to target where distressing memories remain neurobiologically locked."
      },
      {
        title: "Reduced Emotional Charge",
        description: "The memory stays intact, but the acute panic, shame, or bodily tightness connected to it fades away."
      },
      {
        title: "Adaptive Belief Installation",
        description: "Replaces painful core beliefs ('I am in danger') with grounded truth ('I am safe now and capable')."
      }
    ],
    sessionExperience: [
      "First, we build robust somatic resourcing and grounding techniques so you always feel anchored.",
      "During reprocessing sets, you focus briefly on a target image and body sensation while following bilateral cues, allowing your brain to connect insights organically."
    ],
    idealFor: [
      "Single-incident traumatic shocks (accidents, assaults)",
      "Childhood emotional neglect or relational trauma",
      "Intrusive memories, flashbacks, and nightmares",
      "Chronic phobias and deep-rooted somatic triggers"
    ]
  },
  somatic: {
    slug: "somatic",
    name: "Somatic & Body-Oriented Therapy",
    fullTitle: "Somatic Psychology & Nervous System Regulation",
    subtitle: "Release stress, trauma, and hyperarousal stored directly in the nervous system and tissues.",
    image: "/images/coastal.jpg",
    imageAlt: "Calm ocean tides along the Santa Monica coastline symbolizing nervous system flow",
    description: [
      "Traditional talk therapy engages the prefrontal cortex—the thinking mind. Somatic therapy recognizes that stress and trauma live in the autonomic nervous system, posture, and gut.",
      "By cultivating somatic awareness, you learn to track subtle shifts in breath, heart rate, and muscular armor, releasing survival energy that has been trapped for months or years."
    ],
    principlesHeading: "Key Somatic Concepts",
    principles: [
      {
        title: "Vagal Tone & Downregulation",
        description: "Exercises to stimulate the parasympathetic 'rest-and-digest' branch of your nervous system."
      },
      {
        title: "Titration & Pendulation",
        description: "Moving gently between areas of bodily tension and areas of comfort to discharge stress safely without overwhelm."
      },
      {
        title: "Interoceptive Awareness",
        description: "Developing accurate awareness of internal bodily sensations, transforming visceral discomfort into meaningful guidance."
      }
    ],
    sessionExperience: [
      "We slow down the pace of conversation, regularly checking in: 'What is your breath doing right now? Where is the tightness?'",
      "Gentle posture adjustments, somatic tracking, and grounded breathing are woven into clinical dialogue."
    ],
    idealFor: [
      "Chronic tension, digestive stress, or unexplained tightness",
      "Numbness, dissociation, or feeling disconnected from your body",
      "Panic sensations and autonomic fight/flight surges",
      "High-achievers who 'live entirely in their heads'"
    ]
  },
  mindfulness: {
    slug: "mindfulness",
    name: "Mindfulness & Grounding",
    fullTitle: "Mindfulness-Based Stress Reduction & Grounding",
    subtitle: "Cultivate present-moment awareness, mental stillness, and freedom from reactive impulses.",
    image: "/images/empathy-tide.jpg",
    imageAlt: "Pebbles and gentle ocean tide symbolizing grounding and stillness",
    description: [
      "Mindfulness is not about emptying your mind—it is the practice of observing thoughts, feelings, and sensations with gentle, non-judgmental curiosity.",
      "Integrated with clinical psychology, mindfulness creates a crucial gap between stimulus and response, freeing you from impulsive reactions and habitual self-criticism."
    ],
    principlesHeading: "Mindfulness Pillars in Therapy",
    principles: [
      {
        title: "Non-Judgmental Observation",
        description: "Learning to witness difficult thoughts ('I can't handle this') as passing mental events rather than factual directives."
      },
      {
        title: "Somatic Grounding Anchors",
        description: "Using sensory anchors (feet on the floor, sensory contact, coastal breath) to pull you out of racing mental storms."
      },
      {
        title: "Self-Compassion Integration",
        description: "Replacing harsh internal reprimands with the warmth and patience you would offer a cherished friend."
      }
    ],
    sessionExperience: [
      "Short guided grounding practices at the beginning or end of sessions to anchor your state.",
      "Cultivating personalized micro-practices you can seamlessly execute at your office desk or during high-stakes meetings."
    ],
    idealFor: [
      "Relentless overthinking and bedtime worry",
      "Emotional reactivity in relationships or leadership",
      "Chronic stress and feeling ungrounded",
      "Cultivating lasting self-compassion"
    ]
  }
};
