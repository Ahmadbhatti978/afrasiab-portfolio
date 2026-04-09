import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_8%,hsl(217_58%_20%),transparent_34%),radial-gradient(circle_at_88%_12%,hsl(262_56%_22%),transparent_36%),radial-gradient(circle_at_52%_74%,hsl(230_34%_16%),transparent_42%),linear-gradient(to_bottom,hsl(231_30%_11%),hsl(231_34%_8%))]">
      <Navbar />
      <ScrollToTopButton />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;
