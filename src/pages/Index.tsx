import ParticleBackground from "@/components/ParticleBackground";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import WindowManager from "@/components/WindowManager";
import MobileInterface from "@/components/MobileInterface";
import cosmicBg from "@/assets/cosmic-bg.jpg";
import { useState } from "react";
import { WindowType } from "@/components/WindowManager";
import { useMobile } from "@/hooks/useMobile";

const Index = () => {
  const [activeWindow, setActiveWindow] = useState<WindowType>("about");
  const { isMobile, isTablet, isDesktop } = useMobile();

  const handleWindowChange = (windowType: WindowType) => {
    setActiveWindow(windowType);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Cosmic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Particle Animation Layer */}
      <ParticleBackground />
      
      {/* Desktop Interface - Only show on desktop */}
      {isDesktop && (
        <>
          <MenuBar onWindowChange={handleWindowChange} activeWindow={activeWindow} />
          <WindowManager activeWindow={activeWindow} onWindowChange={handleWindowChange} />
          <div className="relative z-10 min-h-screen pt-8">
            {/* Other content can go here */}
          </div>
          <Dock />
        </>
      )}
      
      {/* Mobile Interface - Only show on mobile/tablet */}
      {(isMobile || isTablet) && (
        <MobileInterface activeWindow={activeWindow} onWindowChange={handleWindowChange} />
      )}
    </div>
  );
};

export default Index;
