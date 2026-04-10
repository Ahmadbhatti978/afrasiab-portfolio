import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 transition-all duration-300 ${
        scrolled ? "pt-2" : "pt-4"
      }`}
    >
      <div
        className={`section-container flex items-center justify-between h-14 rounded-2xl px-5 transition-all duration-300 ${
          scrolled
            ? "bg-card/55 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_14px_36px_hsl(236_40%_5%_/_0.35)]"
            : "bg-card/35 backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[0_10px_30px_hsl(236_40%_8%_/_0.24)]"
        }`}
      >
        <Link to="/" className="font-heading font-bold text-base sm:text-lg text-gradient tracking-tight">
          Afrasiab Ahmad
        </Link>
        <div className="hidden lg:flex items-center gap-6">
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
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/70 bg-card/70 text-foreground/90 hover:text-primary hover:border-primary/40 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="section-container mt-3 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-2xl border border-white/20 bg-card/80 backdrop-blur-2xl shadow-[0_18px_36px_hsl(236_40%_5%_/_0.35)] p-2"
          >
            {links.map((link) => (
              <a
                key={`mobile-${link.label}`}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-sm text-foreground/90 hover:bg-primary/10 hover:text-primary transition-colors"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(link.resumeClick ? { onClick: (e) => void downloadResume(e) } : {})}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
