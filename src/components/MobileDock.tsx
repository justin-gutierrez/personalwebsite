import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import javaLogo from "@/assets/newjavalogo.webp";
import pythonLogo from "@/assets/python-logo-only.png";
import javascriptLogo from "@/assets/javascript-logo-javascript-icon-transparent-free-png.webp";
import typescriptLogo from "@/assets/typescriptlogo.png";
import reactLogo from "@/assets/reactlogo.png";
import tailwindLogo from "@/assets/tailwindlogo.png";
import fastapiLogo from "@/assets/fastapitransparentlogo.svg";
import ollamaLogo from "@/assets/ollamanewlogo.png";
import supabaseLogo from "@/assets/newsupabaselogo.png";
import firebaseLogo from "@/assets/firebasenewlogo.png";
import chromadbLogo from "@/assets/chromadblogo.webp";
import dockerLogo from "@/assets/dockerpng.png";

const MobileDock = () => {
  const [offset, setOffset] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState<{ name: string; clickedIndex: number } | null>(null);

  const dockItems = [
    { name: "Java", logo: javaLogo, bgColor: "bg-orange-500" },
    { name: "Python", logo: pythonLogo, bgColor: "bg-blue-500" },
    { name: "JavaScript", logo: javascriptLogo, bgColor: "bg-yellow-500" },
    { name: "TypeScript", logo: typescriptLogo, bgColor: "bg-blue-600" },
    { name: "React", logo: reactLogo, bgColor: "bg-cyan-500" },
    { name: "Tailwind", logo: tailwindLogo, bgColor: "bg-teal-500" },
    { name: "FastAPI", logo: fastapiLogo, bgColor: "bg-green-600" },
    { name: "Ollama", logo: ollamaLogo, bgColor: "bg-purple-500" },
    { name: "Supabase", logo: supabaseLogo, bgColor: "bg-emerald-500" },
    { name: "Firebase", logo: firebaseLogo, bgColor: "bg-orange-600" },
    { name: "ChromaDB", logo: chromadbLogo, bgColor: "bg-pink-500" },
    { name: "Docker", logo: dockerLogo, bgColor: "bg-blue-700" },
  ];

  // Create a much longer duplicated array for better infinite looping
  const duplicatedItems = [...dockItems, ...dockItems, ...dockItems, ...dockItems, ...dockItems, ...dockItems, ...dockItems, ...dockItems, ...dockItems, ...dockItems];

  // Auto-slide effect with proper infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        // When we've moved through one complete set of items, reset to continue seamlessly
        // This prevents the offset from getting too large and moving items off-screen
        if (prevOffset <= -dockItems.length) {
          return 0; // Reset to start position
        }
        return prevOffset - 1;
      });
    }, 2000); // Move every 2 seconds for relaxed motion

    return () => clearInterval(interval);
  }, [dockItems.length]);

  // Handle tooltip timeout
  useEffect(() => {
    if (activeTooltip) {
      const timer = setTimeout(() => {
        setActiveTooltip(null);
      }, 3000); // Hide tooltip after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [activeTooltip]);

  const handleItemClick = (itemName: string, clickedIndex: number) => {
    setActiveTooltip({ name: itemName, clickedIndex });
  };

  // Calculate the current position of the clicked item
  const getTooltipPosition = () => {
    if (!activeTooltip) return { x: 0, y: 0 };
    
    // Calculate where the clicked item currently is
    const itemPosition = (activeTooltip.clickedIndex * 60) + (offset * 60);
    
    // Position tooltip above the item, centered
    const tooltipX = itemPosition + 24; // Center over the 48px wide item
    const tooltipY = -50; // Position above the dock
    
    return { x: tooltipX, y: tooltipY };
  };

  const tooltipPosition = getTooltipPosition();

  return (
    <div className="w-full relative">
      <div className="bg-gray-300/60 backdrop-blur-ios rounded-ios-lg border border-gray-500/30 shadow-ios p-3 overflow-hidden">
        <div className="flex space-x-3">
          <motion.div
            className="flex space-x-3"
            animate={{ x: `${offset * 60}px` }} // 60px per item (48px width + 12px gap)
            transition={{ 
              duration: 2,
              ease: "linear"
            }}
          >
            {duplicatedItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`flex-shrink-0 w-12 h-12 ${item.bgColor} rounded-ios-lg flex items-center justify-center shadow-ios hover:shadow-ios-lg transition-all duration-300 cursor-pointer`}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleItemClick(item.name, index)}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tooltip/Popup - Following the clicked item with synchronized animation */}
      <AnimatePresence>
        {activeTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              x: tooltipPosition.x,
              y: tooltipPosition.y,
              scale: 1 
            }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ 
              duration: 2, // Match the carousel's 2-second duration
              ease: "linear" // Use linear easing to match carousel movement
            }}
            className="absolute top-0 left-0 z-50 pointer-events-none"
            style={{
              transform: `translate(-50%, 0)` // Center the tooltip horizontally
            }}
          >
            <div className="bg-black/80 backdrop-blur-ios rounded-ios px-3 py-2 shadow-ios-lg border border-white/20">
              <span className="text-white text-sm font-medium whitespace-nowrap">
                {activeTooltip.name}
              </span>
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDock; 