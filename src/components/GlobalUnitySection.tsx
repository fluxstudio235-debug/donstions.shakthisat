import AnimatedSection from "./AnimatedSection";

const GlobalUnitySection = () => (
  <section className="py-32 bg-background relative overflow-hidden">
    {/* Subtle world map SVG outline */}
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
      <svg viewBox="0 0 1000 500" className="w-full max-w-5xl" fill="none" stroke="currentColor" strokeWidth="0.5">
        <ellipse cx="500" cy="250" rx="480" ry="230" />
        <path d="M20,250 Q250,100 500,250 Q750,400 980,250" />
        <path d="M20,250 Q250,400 500,250 Q750,100 980,250" />
        <line x1="500" y1="20" x2="500" y2="480" />
        <line x1="20" y1="250" x2="980" y2="250" />
        <ellipse cx="500" cy="250" rx="240" ry="230" />
        <ellipse cx="500" cy="250" rx="120" ry="230" />
      </svg>
    </div>

    <div className="relative z-10 section-container text-center max-w-3xl mx-auto">
      <AnimatedSection>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
          108 Nations.
          <br />
          <span className="text-gradient-gold">One Shared Sky.</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-lg">
          From every continent, young women are connected by a shared vision — to learn,
          to innovate, and to reach beyond every boundary humanity has ever known.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default GlobalUnitySection;
