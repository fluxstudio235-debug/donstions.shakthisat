import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface WelcomePreloaderProps {
  isVisible: boolean;
}

const WelcomePreloader = ({ isVisible }: WelcomePreloaderProps) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      >
        {/* Starfield background */}
        <div className="absolute inset-0 starfield-bg opacity-40" />

        {/* Subtle radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--aurora) / 0.08) 0%, transparent 60%)",
          }}
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 mb-8"
        >
          <img
            src={logo}
            alt="Mission ShakthiSAT"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative z-10 font-display text-2xl md:text-4xl font-bold tracking-tight mb-3 text-foreground"
        >
          Mission <span className="text-gradient-gold">ShakthiSAT</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="relative z-10 text-sm md:text-base text-muted-foreground tracking-[0.2em] uppercase font-light"
        >
          Preparing for launch
        </motion.p>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative z-10 mt-8 w-48 md:w-64 h-[2px] bg-border rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default WelcomePreloader;
