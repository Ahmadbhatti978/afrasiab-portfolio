import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Uprides Driver",
    company: "Unanime Planet",
    description: "A driver platform similar to a taxi app, enabling drivers to receive and manage ride requests efficiently.",
    tags: ["Flutter", "WebSockets", "APIs"],
    link: "https://play.google.com/store/apps/details?id=com.unanimeplanet.uprides.driver",
  },
  {
    name: "Neo One",
    company: "HeapStash Global",
    description: "A mobile application delivering a seamless, secure platform for managing personal and corporate finances.",
    tags: ["Flutter", "Fintech", "API Integration"],
    link: "https://play.google.com/store/apps/details?id=com.heapstash.neoone",
  },
  {
    name: "HOOPr",
    company: "AppCrates",
    description: "A social media app for athletes, trainers, and coaches to share and explore basketball drills and workouts.",
    tags: ["Flutter", "Firebase", "Social Media"],
    link: "https://play.google.com/store/apps/details?id=com.hoopr.app",
  },
  {
    name: "Rightbiz Seller App",
    company: "Rightbiz",
    description: "A platform that simplifies selling businesses by enabling users to list, target buyers, and track progress.",
    tags: ["Flutter", "Firebase", "WebView"],
    link: "https://play.google.com/store/apps/details?id=com.rightbiz.seller",
  },
  {
    name: "Rightbiz Discovery",
    company: "Rightbiz",
    description: "A business marketplace app for buying and selling businesses across the UK.",
    tags: ["Flutter", "Firebase", "Marketplace"],
    link: "https://play.google.com/store/apps/details?id=com.rightbiz.discovery",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Projects
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card p-6 group hover:border-glow transition-all duration-500 hover:glow-box cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.company}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-colors mt-1" />
              </div>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
