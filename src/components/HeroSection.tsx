import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import heroVideo from "@/assets/hero-space-video.mp4";

interface HeroSectionProps {
  onVideoReady?: () => void;
}

const HeroSection = ({ onVideoReady }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => onVideoReady?.();

    // Fire when enough data is buffered to play
    if (video.readyState >= 3) {
      handleReady();
    } else {
      video.addEventListener("canplay", handleReady, { once: true });
      return () => video.removeEventListener("canplay", handleReady);
    }
  }, [onVideoReady]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 section-container text-center max-w-4xl py-24 md:py-32 px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-starlight tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-6 md:mb-8 font-light"
        >
          A Global Space Initiative
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-6"
        >
          Mission{" "}
          <span className="text-gradient-gold">ShakthiSAT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-starlight font-light mb-4 md:mb-6 leading-relaxed"
        >
          Empowering 12,000 Girls from 108 Nations
          <br className="hidden md:block" />
          Through Real-Time Satellite Projects.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2"
        >
          A bold global journey to ignite curiosity, courage, and a lifelong passion for STEM
          and space exploration. United across continents, these future pioneers step into the
          world of satellites and discovery — shaping humanity's future among the stars.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        >
          <a
            href="#donate"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] hover:scale-[1.02] text-sm md:text-base"
          >
            Donate to the Mission
          </a>
          <a
            href="https://www.shakthisat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border border-border text-foreground font-medium rounded-lg transition-all duration-300 hover:border-starlight hover:bg-secondary text-sm md:text-base"
          >
            Explore ShakthiSAT
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
