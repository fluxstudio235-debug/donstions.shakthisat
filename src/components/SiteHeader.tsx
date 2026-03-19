import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Mission", href: "#mission", external: false },
  { label: "Impact", href: "https://www.shakthisat.com", external: true },
  { label: "Donate", href: "#donate", external: false },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Mission ShakthiSAT" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="inline-flex items-center px-5 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:scale-[1.02]"
          >
            Donate Now
          </a>
        </nav>

        {/* Mobile donate button */}
        <a
          href="#donate"
          className="md:hidden inline-flex items-center px-4 py-2 bg-accent text-accent-foreground text-xs font-semibold rounded-lg"
        >
          Donate
        </a>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
