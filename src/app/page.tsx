import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmpathyBanner from "@/components/EmpathyBanner";
import WhoWeHelp from "@/components/WhoWeHelp";
import PhilosophyBanner from "@/components/PhilosophyBanner";
import IntegrativeApproach from "@/components/IntegrativeApproach";
import HonoringSection from "@/components/HonoringSection";
import CoreSpecialties from "@/components/CoreSpecialities";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EmpathyBanner />
        <WhoWeHelp />
        <PhilosophyBanner />
        <IntegrativeApproach />
        <HonoringSection />
        <CoreSpecialties />
        <AppointmentCTA />
      </main>
      <Footer />
    </>
  );
}
