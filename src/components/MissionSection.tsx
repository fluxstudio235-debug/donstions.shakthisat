import AnimatedSection from "./AnimatedSection";
import satelliteOrbit from "@/assets/satellite-orbit.jpg";

const MissionSection = () => (
  <section id="mission" className="py-32 bg-background">
    {/* Mission Overview */}
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-aurora tracking-[0.2em] uppercase text-xs mb-4 font-medium">The Mission</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
            A Global Movement
            <br />
            Among the Stars
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              ShakthiSAT is more than a satellite mission — it is a global movement.
            </p>
            <p>
              Across 108 nations, 12,000 young girls unite in real-time satellite projects,
              stepping into a world of innovation and collaboration.
            </p>
            <p>
              Together, we explore the cosmos, break barriers, and rise as the next generation
              of space leaders.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={satelliteOrbit}
              alt="Satellite in orbit above Earth"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </div>

    {/* What is ShakthiSAT */}
    <div className="section-container mt-32">
      <div className="glow-divider mb-20" />
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <p className="text-aurora tracking-[0.2em] uppercase text-xs mb-4 font-medium">The Purpose</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
          More Than a Satellite.
          <br />
          A Shared Purpose.
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            ShakthiSAT builds bridges across cultures through STEM and space collaboration.
          </p>
          <p>
            It stands as a beacon of unity, reminding us that discovery becomes richer
            when humanity learns and reaches upward together.
          </p>
          <p className="text-foreground font-light text-lg italic">
            Space is not the privilege of a few — it is a frontier that belongs to all.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default MissionSection;
