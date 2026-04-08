import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "GIFT University",
  location: "Gujranwala, Pakistan",
  period: "Sep 2017 — Jun 2021",
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-white/70" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Experience
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-2 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1 ring-4 ring-background" />

                <div className="glass-card p-6 hover:border-glow transition-all duration-500 hover:glow-box">
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-heading text-xl font-bold mb-4">Education</h3>
          <div className="glass-card p-6 max-w-2xl">
            <p className="font-heading font-semibold text-foreground">{education.degree}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {education.school} · {education.location}
            </p>
            <p className="text-xs text-primary font-medium tracking-wider uppercase mt-3">
              {education.period}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
