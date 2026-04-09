import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_8%_8%,hsl(223_84%_94%),transparent_30%),radial-gradient(circle_at_88%_12%,hsl(257_80%_94%),transparent_34%),radial-gradient(circle_at_55%_78%,hsl(220_54%_97%),transparent_40%),linear-gradient(to_bottom,hsl(0_0%_100%),hsl(220_34%_97%))]">
      <Navbar />
      <ScrollToTopButton />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
