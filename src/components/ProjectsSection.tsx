import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

type Project = {
  name: string;
  company: string;
  description: string;
  tags: string[];
  /** Store or case-study URL; omit for private / unreleased work */
  link?: string;
};

const projects: Project[] = [
  {
    name: "Ardent Training",
    company: "React Native",
    description:
      "Forums and live sessions in a React Native CLI app: real-time sessions, posts, likes, and threaded comments.",
    tags: ["React Native", "Redux Saga", "Forums"],
    link: "https://play.google.com/store/apps/details?id=com.ardent_training.android"
  },
  {
    name: "Dari — Home Services",
    company: "React Native (Expo)",
    description:
      "Migrated a native Android app to React Native (Expo): new screens, API integration, and Redux Saga state management.",
    tags: ["React Native", "Expo", "Redux Saga"],
    link: "https://play.google.com/store/apps/details?id=com.dari.mobile.app&hl=en"
  },
  {
    name: "CleanLine",
    company: "React Native (Expo)",
    description:
      "Native Android to Expo migration for a laundry-focused home services platform: screens, APIs, and Redux Saga.",
    tags: ["React Native", "Expo", "Redux Saga"],
    link: "https://play.google.com/store/apps/details?id=com.cleanline.app"
  },
  {
    name: "Uprides Driver",
    company: "Unanime Planet",
    description:
      "Driver platform similar to a taxi app: receive and manage ride requests efficiently.",
    tags: ["Flutter", "WebSockets", "APIs"],
    link: "https://play.google.com/store/apps/details?id=com.unanimeplanet.uprides.driver",
  },
  {
    name: "Neo One",
    company: "HeapStash Global",
    description:
      "NEO ONE mobile app: secure personal and corporate finance flows with API-driven features.",
    tags: ["Flutter", "Fintech", "APIs"],
    link: "https://play.google.com/store/apps/details?id=com.heapstash.neoone",
  },
  {
    name: "HOOPr",
    company: "Appcrates",
    description:
      "Social app for athletes, trainers, and coaches to share basketball drills and workouts, powered by Flutter and Firebase.",
    tags: ["Flutter", "Firebase", "Social"],
    link: "https://play.google.com/store/apps/details?id=com.hoopr.app",
  },
  {
    name: "Rightbiz Seller App",
    company: "Rightbiz",
    description:
      "Seller tooling to list businesses, reach buyers, and track progress with Firebase and WebView where needed.",
    tags: ["Flutter", "Firebase", "WebView"],
    link: "https://play.google.com/store/apps/details?id=com.rightbiz.seller",
  },
  {
    name: "Rightbiz Discovery",
    company: "Rightbiz",
    description:
      "UK business marketplace to search, evaluate, and connect with buying and selling opportunities.",
    tags: ["Flutter", "Firebase", "Marketplace"],
    link: "https://play.google.com/store/apps/details?id=com.rightbiz.discovery",
  },
];

const projectCardClass =
  "glass-card p-6 group hover:border-glow transition-all duration-500 hover:glow-box hover:-translate-y-1 block";

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
          {projects.map((project, i) => {
            const body = (
              <>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{project.company}</p>
                  </div>
                  {project.link ? (
                    <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-colors mt-1 shrink-0" />
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mt-1 shrink-0">
                      Private
                    </span>
                  )}
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
              </>
            );

            return project.link ? (
              <motion.a
                key={`${project.name}-${i}`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className={`${projectCardClass} cursor-pointer`}
              >
                {body}
              </motion.a>
            ) : (
              <motion.div
                key={`${project.name}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className={`${projectCardClass} cursor-default`}
              >
                {body}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
