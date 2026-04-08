import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Flutter Developer",
    company: "Unanime Planet",
    location: "Lisbon, Portugal (Remote)",
    period: "Aug 2024 — Present",
    description: "Developed and maintained the UPrides Driver App, a production-level taxi application, using APIs and WebSockets for smooth driver-side operations.",
  },
  {
    role: "Senior Frontend Developer",
    company: "HeapStash Global",
    location: "Remote",
    period: "Jan 2023",
    description: "Developed Fintech applications supporting bank account linking, cryptocurrency wallet management, and flight bookings.",
  },
  {
    role: "Flutter Developer",
    company: "RightBiz",
    location: "Remote",
    period: "Oct 2023 — Feb 2025",
    description: "Worked on product development as a solo mobile app developer, building marketplace applications.",
  },
  {
    role: "Flutter Developer",
    company: "DS Legends",
    location: "Remote",
    period: "May 2023 — Sep 2023",
    description: "Developed multiple AI-powered mobile applications integrating ChatGPT and chatbot functionalities.",
  },
  {
    role: "Flutter Developer",
    company: "Appcrates",
    location: "Gujranwala, Pakistan",
    period: "Nov 2022 — Sep 2025",
    description: "Collaborated with cross-functional teams to develop and launch mobile applications. Implemented state management using Provider and GetX.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
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
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
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
                  <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
