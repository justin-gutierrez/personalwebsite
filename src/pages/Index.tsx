import ParticleBackground from "@/components/ParticleBackground";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import AboutMeWindow from "@/components/AboutMeWindow";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const Index = () => {
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
      <MenuBar />
      
      {/* About Me Window - Fixed positioned outside container */}
      <AboutMeWindow />
      
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
