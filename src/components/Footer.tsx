import { Mail, Phone, MapPin, Linkedin, FileDown } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/siteLinks";
import { downloadResume, RESUME_PUBLIC_PATH } from "@/lib/resume";

const Footer = () => (
  <footer id="contact" className="py-10 border-t border-border/60 bg-card/40 backdrop-blur-sm">
    <div className="section-container text-center">
      <h3 className="font-heading text-xl font-semibold mb-2">Let's Connect</h3>

      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="relative group">
          <a
            href="mailto:ahmadbhatti978@gmail.com"
            className="w-10 h-10 rounded-full border border-border bg-card/70 inline-flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-foreground text-background text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            ahmadbhatti978@gmail.com
          </span>
        </div>

        <div className="relative group">
          <a
            href="tel:+923127244728"
            className="w-10 h-10 rounded-full border border-border bg-card/70 inline-flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-foreground text-background text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            +92 312 724 4728
          </span>
        </div>

        <div className="relative group">
          <a
            href="https://maps.google.com/?q=Gujranwala%2C%20Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border bg-card/70 inline-flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <MapPin className="w-4 h-4" />
          </a>
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-foreground text-background text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Gujranwala, Pakistan
          </span>
        </div>

        <div className="relative group">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border bg-card/70 inline-flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-foreground text-background text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            LinkedIn Profile
          </span>
        </div>

        <div className="relative group">
          <a
            href={RESUME_PUBLIC_PATH}
            onClick={(e) => void downloadResume(e)}
            className="w-10 h-10 rounded-full border border-border bg-card/70 inline-flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-foreground text-background text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Download Resume
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Afrasiab Ahmad. Built with passion.
      </p>
    </div>
  </footer>
);

export default Footer;
