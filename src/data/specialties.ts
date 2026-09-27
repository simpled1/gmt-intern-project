export interface SpecialtyData {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  imageAlt: string;
  overview: string[];
  symptomsHeading: string;
  symptoms: { title: string; description: string }[];
  approachHeading: string;
  approach: string[];
  takeaway: string;
}

export const specialtiesData: Record<string, SpecialtyData> = {
  anxiety: {
    slug: "anxiety",
    title: "Anxiety & Panic Therapy",
    subtitle: "Move beyond constant vigilance into grounded nervous system regulation.",
    tagline: "Specialized Care in Santa Monica & Telehealth California",
    image: "/images/card-anxiety.jpg",
    imageAlt: "Calm woman taking a deep breath outdoors in coastal light",
    overview: [
      "High-functioning anxiety is exhausting because the outside world only sees your competence, while internally you feel constantly braced for something to unravel.",
      "In our work together, we move past surface-level relaxation tips. We examine the somatic signals, cognitive thought loops, and deep-seated fears driving your distress, giving you the practical tools to regain peace of mind."
    ],
    symptomsHeading: "Common Experiences We Address",
    symptoms: [
      {
        title: "Physical Tension & Rapid Heart Rate",
        description: "Tightness in the chest, shallow breathing, jaw clenching, and sleep disruption caused by chronic adrenaline activation."
      },
      {
        title: "Relentless Anticipatory Worry",
        description: "Mentally rehearsing worst-case scenarios, second-guessing past decisions, and struggling to shut your mind off at night."
      },
      {
        title: "Hidden Panic Attacks",
        description: "Sudden surges of terror, dizziness, or derealization that leave you feeling ungrounded and fearful of the next episode."
      },
      {
        title: "Over-Preparation & Control",
        description: "Feeling like everything will collapse if you don't micromanage every detail, leading to emotional burnout."
      }
    ],
    approachHeading: "How Dr. Maya Reynolds Works With Anxiety",
    approach: [
      "Cognitive Behavioral Restructuring (CBT) to identify catastrophic cognitive distortions without judgment.",
      "Somatic Experiencing and polyvagal grounding to de-escalate the body's acute fight-or-flight response in real-time.",
      "Mindfulness-based exposure to tolerate uncertainty and cultivate genuine internal psychological safety."
    ],
    takeaway: "You don't have to keep white-knuckling through your life. True relief comes when your body and mind both know you are safe."
  },
  trauma: {
    slug: "trauma",
    title: "Trauma & PTSD Recovery",
    subtitle: "Reprocess unresolved wounds and restore safety within your body and relationships.",
    tagline: "Evidence-Based EMDR & Somatic Healing in Santa Monica",
    image: "/images/card-trauma.jpg",
    imageAlt: "Reflective person gazing thoughtfully over peaceful natural scenery",
    overview: [
      "Trauma isn't just what happened in the past—it's how past distress continues to dictate your nervous system's threat responses today.",
      "Whether you are dealing with a single overwhelming event or complex relational trauma from childhood, evidence-based trauma therapy allows you to integrate memories so they no longer hijack your present life."
    ],
    symptomsHeading: "Recognizing Unprocessed Trauma",
    symptoms: [
      {
        title: "Sudden Emotional Triggers",
        description: "Intense emotional reactions, irritability, or panic triggered by subtle reminders, sounds, or relational dynamics."
      },
      {
        title: "Dissociation & Emotional Numbing",
        description: "Feeling detached from your body, going through life on autopilot, or feeling disconnected from the people who love you."
      },
      {
        title: "Hypervigilance & Sleep Disturbances",
        description: "Inability to let your guard down, scanning rooms for exits, frequent nightmares, or waking up exhausted."
      },
      {
        title: "Pervasive Shame & Self-Blame",
        description: "A lingering sense of 'I am broken' or 'I am unlovable,' rooted in old survival mechanisms that once protected you."
      }
    ],
    approachHeading: "Trauma Treatment Modalities & EMDR",
    approach: [
      "EMDR (Eye Movement Desensitization and Reprocessing) to reprocess traumatic memories without having to recount painful details repeatedly.",
      "Somatic Regulation to track where trauma is physiologically stored in muscle armor, breathing patterns, and posture.",
      "Pacing and Stabilization to ensure you never feel flooded or re-traumatized during clinical sessions."
    ],
    takeaway: "Healing doesn't mean forgetting; it means your past no longer holds power over how you experience the present moment."
  },
  burnout: {
    slug: "burnout",
    title: "Burnout & Perfectionism",
    subtitle: "Untangle your self-worth from achievement and establish sustainable boundaries.",
    tagline: "Therapy for High-Achievers, Founders, and Creative Professionals",
    image: "/images/card-professionals.jpg",
    imageAlt: "Professional adult pausing in deep contemplation amidst a demanding environment",
    overview: [
      "When your standard for yourself is flawless execution, rest starts to feel like laziness and asking for help feels like failure.",
      "Perfectionism often serves as a brilliant survival strategy that brought you immense career success—until the cost to your health, relationships, and emotional vitality became unsustainable."
    ],
    symptomsHeading: "Hallmarks of Functional Exhaustion",
    symptoms: [
      {
        title: "Imposter Syndrome",
        description: "The persistent dread that despite achievements, you will soon be 'found out' as incompetent or unworthy."
      },
      {
        title: "Emotional Cynicism & Emptiness",
        description: "Feeling detached from work you once loved, experiencing deep cynicism, and feeling depleted before the workday even starts."
      },
      {
        title: "Boundary Collapse",
        description: "Chronic people-pleasing, taking on everyone else's emergencies, and an inability to say 'no' without crippling guilt."
      },
      {
        title: "Guilt-Ridden Downtime",
        description: "Inability to relax on weekends or vacations without feeling restless anxiety about unchecked to-do lists."
      }
    ],
    approachHeading: "A Clinical Blueprint for Burnout Recovery",
    approach: [
      "CBT for Perfectionism: dismantle all-or-nothing cognitive distortions and conditional self-worth.",
      "Values Clarification: distinguishing between your authentic desires and external expectations.",
      "Embodied Boundary Practice: learning how to say 'no' in your nervous system without panic or apologetic self-abandonment."
    ],
    takeaway: "You are allowed to have a life that feels peaceful on the inside, not just impressive on paper."
  },
  transitions: {
    slug: "transitions",
    title: "Life Transitions & Relationships",
    subtitle: "Anchor yourself with clarity through career shifts, breakups, loss, and identity evolution.",
    tagline: "Supportive Psychotherapy in Santa Monica & Throughout California",
    image: "/images/honoring-presence.jpg",
    imageAlt: "Two individuals connecting in a warm, supportive conversation",
    overview: [
      "Even positive transitions—like a new career, relocation, marriage, or parenthood—upend our established sense of safety and routine.",
      "When life shifts beneath your feet, old coping mechanisms often stop working. Therapy provides a grounded container to process grief, clarify your authentic values, and step forward with confidence."
    ],
    symptomsHeading: "Navigating Times of Upheaval",
    symptoms: [
      {
        title: "Identity Loss & Directionlessness",
        description: "Feeling untethered after a job change, relationship ending, or milestone that didn't bring the expected fulfillment."
      },
      {
        title: "Relational Friction & Isolation",
        description: "Outgrowing old social circles or struggling to communicate changing needs to partners and family members."
      },
      {
        title: "Unresolved Anticipatory Grief",
        description: "Mourning the closure of chapters, lost possibilities, or versions of yourself you've had to leave behind."
      },
      {
        title: "Decision Paralysis",
        description: "Feeling frozen between paths, terrified of making the wrong choice while time slips by."
      }
    ],
    approachHeading: "How I Support Your Transition",
    approach: [
      "Relational psychotherapy to explore attachment styles and boundary dynamics.",
      "Mindfulness techniques to cultivate tolerance for ambiguity and temporary discomfort.",
      "Action-oriented goal setting rooted in self-compassion rather than self-coercion."
    ],
    takeaway: "Crossroads are inherently uncomfortable, but they are also the fertile ground where our most authentic self takes root."
  }
};
