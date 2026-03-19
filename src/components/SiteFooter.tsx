import logo from "@/assets/logo.png";

const SiteFooter = () => (
  <footer className="py-16 bg-background border-t border-border">
    <div className="section-container">
      <div className="flex flex-col items-center text-center">
        <img src={logo} alt="Mission ShakthiSAT" className="h-14 w-auto mb-6 opacity-80" />
        <p className="text-muted-foreground text-sm mb-2">
          Empowering 12,000 Girls. 108 Nations. One Shared Sky.
        </p>
        <div className="flex gap-6 mt-6 mb-8">
          <a href="#mission" className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-wider transition-colors">Mission</a>
          <a href="https://www.shakthisat.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-wider transition-colors">Impact</a>
          <a href="#donate" className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-wider transition-colors">Donate</a>
        </div>
        <div className="glow-divider max-w-xs mx-auto mb-6" />
        <p className="text-muted-foreground/50 text-xs">
          © {new Date().getFullYear()} Mission ShakthiSAT. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
