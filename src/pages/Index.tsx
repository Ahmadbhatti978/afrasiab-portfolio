import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,hsl(239_84%_97%),transparent_30%),radial-gradient(circle_at_90%_20%,hsl(190_100%_96%),transparent_35%),linear-gradient(to_bottom,hsl(0_0%_100%),hsl(220_33%_99%))]">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
