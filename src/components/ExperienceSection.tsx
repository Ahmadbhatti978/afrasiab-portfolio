import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    role: "React Native Developer",
    company: "AdroidIT Solutions",
    location: "Gujranwala, Pakistan",
    period: "Sep 2025 — Present",
    description:
      "Develop and maintain cross-platform mobile applications using React Native. Manage application state with Redux Toolkit and Redux Saga.",
  },
  {
    role: "Flutter Developer",
    company: "Unanime Planet",
    location: "Lisbon, Portugal (Remote)",
    period: "Aug 2024 — Aug 2025",
    description:
      "Developed and maintained the UPrides Driver App, a production-level taxi application, using APIs and WebSockets for reliable driver-side operations.",
  },
  {
    role: "Senior Frontend Developer",
    company: "HeapStash Global",
    location: "Remote",
    period: "Dec 2023 - May 2025",
    description:
      "Built fintech experiences supporting bank account linking and cryptocurrency wallet management. Delivered a Flutter web app for flight bookings and crypto payments with a smooth end-to-end user experience.",
  },
  {
    role: "Flutter Developer",
    company: "RightBiz",
    location: "Remote",
    period: "Oct 2023 — Feb 2025",
    description:
      "Owned product development as a solo mobile developer, shipping marketplace and business apps end to end.",
  },
  {
    role: "Flutter Developer",
    company: "DS Legends",
    location: "Remote",
    period: "May 2023 — Sep 2023",
    description:
      "Built and maintained Flutter products for the company. Shipped multiple AI-powered apps integrating ChatGPT and chatbot experiences.",
  },
  {
    role: "Flutter Developer",
    company: "Appcrates",
    location: "Gujranwala, Pakistan",
    period: "Nov 2022 — Sep 2025",
    description:
      "Collaborated with designers, PMs, and backend engineers to ship mobile features. Implemented state management with Provider and GetX to improve performance and maintainability.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleCount, setVisibleCount] = useState(2);
  const visibleExperiences = experiences.slice(0, visibleCount);
  const canShowMore = visibleCount < experiences.length;
  const canShowLess = visibleCount > 2;

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-primary/80 mb-2">Journey</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Experience
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="relative rounded-3xl border border-border/70 bg-card/55 backdrop-blur-sm p-6 md:p-8">
          <div className="absolute left-6 md:left-10 top-8 bottom-8 w-px bg-gradient-to-b from-primary/70 via-primary/25 to-accent/60" />

          <div className="space-y-12">
            {visibleExperiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-12 md:pl-24"
              >
                <div className="absolute left-6 md:left-10 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background shadow-[0_0_0_3px_hsl(var(--primary)_/_0.2)]" />

                <div className="glass-card p-6 hover:border-glow transition-all duration-500 hover:glow-box hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-primary font-medium tracking-wider uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-sm text-secondary-foreground/90 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {canShowMore && (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 2, experiences.length))}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:brightness-110 transition-all"
            >
              Show More
            </button>
          )}
          {canShowLess && (
            <button
              type="button"
              onClick={() => setVisibleCount(2)}
              className="px-5 py-2.5 rounded-lg border border-border bg-card/70 text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-all"
            >
              Show Less
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
