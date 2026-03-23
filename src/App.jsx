import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import SystemArchitecture from "./components/SystemArchitecture";
import HowItWorksSection from "./components/HowItWorksSection";
import LiveData from "./components/LiveData";
import ComponentsSection from "./components/ComponentsSection";
import ProjectDemo from "./components/ProjectDemo";
import EngineeringChallenges from "./components/EngineeringChallenges";
import InnovationHighlights from "./components/InnovationHighlights";
import WhyOurApproach from "./components/WhyOurApproach";
import FutureScopeSection from "./components/FutureScopeSection";
import TeamSection from "./components/TeamSection";
import MentorSection from "./components/MentorSection";
import GallerySection from "./components/GallerySection";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-hero-grid">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-64 bg-gradient-to-b from-cyan-300/8 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 -z-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"
      />

      {/* Sticky top navigation */}
      <Navbar />

      <main className="relative z-10 space-y-24 pb-20 pt-24 md:space-y-32 md:pt-28">
        {/* Hero section */}
        <HeroSection />

        {/* Problem section */}
        <ProblemSection />

        {/* Solution section */}
        <SolutionSection />

        {/* System Architecture section */}
        <SystemArchitecture />

        {/* How it works section */}
        <HowItWorksSection />

        {/* Live system data section */}
        <LiveData />

        {/* Components section */}
        <ComponentsSection />

          {/* Project Demo section */}
          <ProjectDemo />

        {/* Engineering Challenges section */}
        <EngineeringChallenges />

        {/* Innovation Highlights section */}
        <InnovationHighlights />

        {/* Why Our Approach section */}
        <WhyOurApproach />

        {/* Future scope section */}
        <FutureScopeSection />

        {/* Mentor section */}
        <MentorSection />

        {/* Team section */}
        <TeamSection />

        {/* Gallery section */}
        <GallerySection />

        {/* Final CTA section */}
        <FinalCtaSection />
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
