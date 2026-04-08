import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { downloadResume, RESUME_PUBLIC_PATH } from "@/lib/resume";

const links: { label: string; href: string; external?: boolean; resumeClick?: boolean }[] = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: RESUME_PUBLIC_PATH, resumeClick: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/70 shadow-sm" : ""
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="font-heading font-bold text-lg text-gradient">
          AA
        </Link>
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              {...(link.resumeClick ? { onClick: (e) => void downloadResume(e) } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
