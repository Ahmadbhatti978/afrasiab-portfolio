import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { downloadResume, RESUME_PUBLIC_PATH } from "@/lib/resume";

const links: { label: string; href: string; external?: boolean; resumeClick?: boolean }[] = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
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
        scrolled ? "pt-2" : "pt-4"
      }`}
    >
      <div
        className={`section-container flex items-center justify-between h-14 rounded-2xl px-5 transition-all duration-300 ${
          scrolled
            ? "bg-white/35 backdrop-blur-2xl backdrop-saturate-150 border border-white/45 shadow-[0_14px_36px_hsl(224_30%_16%_/_0.16)]"
            : "bg-white/20 backdrop-blur-xl backdrop-saturate-150 border border-white/35 shadow-[0_10px_30px_hsl(224_30%_16%_/_0.1)]"
        }`}
      >
        <Link to="/" className="font-heading font-bold text-base sm:text-lg text-gradient tracking-tight">
          Afrasiab Ahmad
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-foreground/85 hover:text-primary transition-colors font-medium"
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
