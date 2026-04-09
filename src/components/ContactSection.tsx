import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Linkedin, FileDown } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/siteLinks";
import { downloadResume, RESUME_PUBLIC_PATH } from "@/lib/resume";

type ContactItem = {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  resumeClick?: boolean;
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-primary/80 mb-2">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Let's Connect
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-muted-foreground mb-12">
            Interested in working together? Feel free to reach out.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {(
              [
                { icon: Mail, label: "Email", value: "ahmadbhatti978@gmail.com", href: "mailto:ahmadbhatti978@gmail.com" },
                { icon: Phone, label: "Phone", value: "+92 312 724 4728", href: "tel:+923127244728" },
                { icon: MapPin, label: "Location", value: "Gujranwala, Pakistan", href: "#" },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Connect on LinkedIn",
                  href: LINKEDIN_URL,
                  external: true,
                },
                {
                  icon: FileDown,
                  label: "Resume",
                  value: "Download PDF",
                  href: RESUME_PUBLIC_PATH,
                  resumeClick: true,
                },
              ] satisfies ContactItem[]
            ).map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                {...(item.resumeClick ? { onClick: (e) => void downloadResume(e) } : {})}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="glass-card p-5 flex items-center gap-4 hover:border-glow transition-all duration-300 group hover:-translate-y-1 hover:glow-box"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
