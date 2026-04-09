import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  name: string;
  company: string;
  description: string;
  tags: string[];
  image?: string;
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
  "glass-card overflow-hidden group hover:border-glow transition-all duration-500 hover:glow-box hover:-translate-y-1";

function getProjectPreviewImage(project: Project): string | undefined {
  if (project.image) return project.image;
  if (!project.link) return undefined;
  return `https://image.thum.io/get/width/1200/noanimate/${encodeURIComponent(project.link)}`;
}

function shortText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(3);
  const projectsWithPreview = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        previewImage: getProjectPreviewImage(project),
      })),
    [],
  );
  const visibleProjects = projectsWithPreview.slice(0, visibleCount);
  const canShowMore = visibleCount < projectsWithPreview.length;
  const canShowLess = visibleCount > 3;

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-primary/80 mb-2">Featured Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Projects
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Production-ready apps across fintech, marketplaces, social, and services with strong UX and scalable architecture.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-medium uppercase tracking-wider">
              {projects.length} Total Projects
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, i) => {
            const hasImage = Boolean(project.previewImage) && !imageErrors[project.name];

            return (
              <motion.button
                type="button"
                key={`${project.name}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className={`${projectCardClass} text-left`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/9] w-full bg-muted/40 border-b border-border/70">
                  {hasImage ? (
                    <img
                      src={project.previewImage}
                      alt={`${project.name} preview`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={() => setImageErrors((prev) => ({ ...prev, [project.name]: true }))}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/20 to-primary/5">
                      <p className="font-heading text-xl font-semibold text-foreground/90 px-4 text-center">{project.name}</p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {shortText(project.description, 95)}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {canShowMore && (
            <button
              type="button"
              onClick={() => setVisibleCount(projectsWithPreview.length)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:brightness-110 transition-all"
            >
              Show More
            </button>
          )}
          {canShowLess && (
            <button
              type="button"
              onClick={() => setVisibleCount(3)}
              className="px-5 py-2.5 rounded-lg border border-border bg-card/70 text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-all"
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      <Dialog open={Boolean(selectedProject)} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl rounded-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">{selectedProject.name}</DialogTitle>
                <DialogDescription>{selectedProject.company}</DialogDescription>
              </DialogHeader>

              <div className="rounded-xl overflow-hidden border border-border/70 bg-muted/30">
                {selectedProject.image || selectedProject.link ? (
                  <img
                    src={getProjectPreviewImage(selectedProject)}
                    alt={`${selectedProject.name} preview`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-64 w-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/20 to-primary/5">
                    <p className="font-heading text-2xl font-semibold text-foreground/90">{selectedProject.name}</p>
                  </div>
                )}
              </div>

              <p className="text-sm text-secondary-foreground/90 leading-relaxed">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Project Link
                </a>
              ) : (
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Private project</span>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
