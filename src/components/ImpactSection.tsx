import { Satellite, Globe, Users, Handshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const impacts = [
  {
    icon: Satellite,
    title: "Satellite Education Access",
    description: "Hands-on satellite engineering and mission design training for young women worldwide.",
  },
  {
    icon: Globe,
    title: "Global STEM Collaboration",
    description: "Cross-border teams working together on real-world space and technology projects.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Mentorship and skill-building programs designed to nurture the next generation of leaders.",
  },
  {
    icon: Handshake,
    title: "International Unity",
    description: "Building lasting connections across 108 nations through shared purpose and discovery.",
  },
];

const ImpactSection = () => (
  <section className="py-32 bg-background">
    <div className="section-container">
      <AnimatedSection className="text-center mb-20">
        <p className="text-aurora tracking-[0.2em] uppercase text-xs mb-4 font-medium">The Impact</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Creating Lasting Change
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {impacts.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="p-8 rounded-xl bg-card border border-border hover:border-aurora/30 transition-all duration-500 h-full group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-aurora" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
