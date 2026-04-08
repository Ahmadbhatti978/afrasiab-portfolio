import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Mobile Development",
    skills: ["Flutter", "React Native", "Dart", "JavaScript", "TypeScript", "Redux Toolkit"],
  },
  {
    title: "Backend & APIs",
    skills: ["RESTful APIs", "API Integration", "Google Cloud Functions"],
  },
  {
    title: "Services & SDKs",
    skills: ["Firebase", "FCM", "OneSignal", "WebSockets", "Google Maps", "Google ML Kit"],
  },
  {
    title: "Dev Tools",
    skills: ["Git", "CI/CD"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-white/70" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Skills
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 hover:border-glow transition-all duration-300"
            >
              <h3 className="font-heading text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
