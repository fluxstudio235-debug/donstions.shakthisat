import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import girlsStem from "@/assets/girls-stem.jpg";

const WhySection = () => (
  <>
    {/* Why Girls in Space */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={girlsStem}
          alt="Girls engaged in STEM and robotics"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 section-container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-aurora tracking-[0.2em] uppercase text-xs mb-4 font-medium">The Challenge</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 leading-tight">
              Why Girls in Space?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8"
            >
              <span className="font-display text-7xl md:text-9xl font-bold text-gradient-gold">
                11%
              </span>
              <p className="text-starlight mt-4 text-lg">
                Of all astronauts launched to space have been women.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-xl mx-auto">
              <p>
                The gender gap in space and STEM remains significant. ShakthiSAT ignites
                passion, nurtures leadership, and dismantles limits.
              </p>
              <p className="text-foreground font-light text-lg italic">
                We believe in equal access to infinity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Why 108 Countries */}
    <section className="py-32 midnight-gradient starfield-bg">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-aurora tracking-[0.2em] uppercase text-xs mb-4 font-medium">The Symbol</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 leading-tight">
              Why 108 Countries?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-12"
            >
              <span className="font-display text-8xl md:text-[10rem] font-bold text-gradient-gold leading-none">
                108
              </span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-xl mx-auto">
              <p>
                In space engineering, the ~108 ratio is a cosmic alignment phenomenon — both
                the Moon and Sun sit roughly 108 times their own diameters away from Earth,
                enabling total solar eclipses.
              </p>
              <p>
                This geometric harmony symbolizes global unity and cosmic precision.
              </p>
              <p className="text-foreground font-light text-lg italic">
                ShakthiSAT unites 108 nations under one sky.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </>
);

export default WhySection;
