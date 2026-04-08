import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const SCROLL_THRESHOLD = 280;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="scroll-to-top"
          type="button"
          initial={{ opacity: 0, scale: 0.82, x: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, -5, 0],
          }}
          exit={{ opacity: 0, scale: 0.82, x: 20 }}
          transition={{
            opacity: { duration: 0.22 },
            scale: { duration: 0.22 },
            x: { duration: 0.22 },
            y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.25 },
          }}
          className="fixed bottom-6 right-5 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-white/95 text-primary shadow-[0_8px_30px_hsl(var(--primary)/0.2)] backdrop-blur-md hover:border-primary/50 hover:bg-white hover:shadow-[0_12px_36px_hsl(var(--primary)/0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-7 sm:bottom-8"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" strokeWidth={2.5} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
