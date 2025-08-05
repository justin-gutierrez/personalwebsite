import ParticleBackground from "@/components/ParticleBackground";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import WindowManager from "@/components/WindowManager";
import cosmicBg from "@/assets/cosmic-bg.jpg";
import { useState } from "react";
import { WindowType } from "@/components/WindowManager";

const Index = () => {
  const [activeWindow, setActiveWindow] = useState<WindowType>("about");

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
      
      {/* macOS Interface */}
      <MenuBar onWindowChange={handleWindowChange} activeWindow={activeWindow} />
      
      {/* Window Manager - Handles all windows */}
      <WindowManager activeWindow={activeWindow} onWindowChange={handleWindowChange} />
      
      {/* Main Desktop Area */}
      <div className="relative z-10 min-h-screen pt-8">
        {/* Other content can go here */}
      </div>
      
      {/* Dock */}
      <Dock />
    </div>
  );
};

export default Index;
