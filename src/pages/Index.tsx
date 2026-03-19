import { useState, useCallback } from "react";
import WelcomePreloader from "@/components/WelcomePreloader";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import WhySection from "@/components/WhySection";
import ImpactSection from "@/components/ImpactSection";
import DonationSection from "@/components/DonationSection";
import GlobalUnitySection from "@/components/GlobalUnitySection";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

const MIN_PRELOADER_MS = 2200;

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  const handleVideoReady = useCallback(() => {
    // Ensure preloader shows for at least MIN_PRELOADER_MS
    const elapsed = performance.now();
    const remaining = Math.max(0, MIN_PRELOADER_MS - elapsed);
    setTimeout(() => setShowPreloader(false), remaining);
  }, []);

  return (
    <>
      <WelcomePreloader isVisible={showPreloader} />
      <main>
        <SiteHeader />
        <HeroSection onVideoReady={handleVideoReady} />
        <MissionSection />
        <WhySection />
        <ImpactSection />
        <DonationSection />
        <GlobalUnitySection />
        <FinalCTA />
        <SiteFooter />
      </main>
    </>
  );
};

export default Index;
