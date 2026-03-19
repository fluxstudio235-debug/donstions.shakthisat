import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const FinalCTA = () => (
  <section className="py-32 midnight-gradient starfield-bg">
    <div className="section-container text-center max-w-3xl mx-auto">
      <AnimatedSection>
        <div className="gold-glow-divider mb-16 max-w-xs mx-auto" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Be Part of a Mission That
          <br />
          Reaches Beyond Earth.
        </h2>
        <motion.a
          href="#donate"
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(43 72% 52% / 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-10 py-5 bg-accent text-accent-foreground font-bold text-lg rounded-xl transition-all duration-300"
        >
          Contribute to Mission ShakthiSAT
        </motion.a>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTA;
