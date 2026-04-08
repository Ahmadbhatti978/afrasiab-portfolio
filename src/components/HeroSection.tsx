import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, ChevronDown, FileDown } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/siteLinks";
import { downloadResume, RESUME_PUBLIC_PATH } from "@/lib/resume";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-[110px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/15 blur-[90px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/25 bg-white/80 text-primary text-sm font-medium tracking-wide shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Software Engineer / App Developer
          </motion.div>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Afrasiab{" "}
          <span className="text-gradient">Ahmad</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Mobile engineer focused on Flutter and React Native. I ship scalable, high-performance apps with clean
          architecture, solid UX, and integrations across Firebase, REST APIs, and real-time features—from build to
          deployment.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="mailto:ahmadbhatti978@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            ahmadbhatti978@gmail.com
          </a>
          <span className="hidden sm:block text-border">•</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Gujranwala, Pakistan
          </span>
          <span className="hidden sm:block text-border">•</span>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 glow-box hover:glow-box-strong"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border bg-white/80 text-foreground font-heading font-semibold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href={RESUME_PUBLIC_PATH}
            onClick={(e) => void downloadResume(e)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border bg-white/80 text-foreground font-heading font-semibold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <FileDown className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
