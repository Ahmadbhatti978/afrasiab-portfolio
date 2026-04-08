import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,hsl(210_90%_97%),transparent_32%),radial-gradient(circle_at_90%_20%,hsl(172_55%_96%),transparent_36%),linear-gradient(to_bottom,hsl(0_0%_100%),hsl(210_40%_99%))]">
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
