import { motion } from "framer-motion";
import { useState } from "react";

// Import all the logo images
import javaLogo from "../assets/newjavalogo.webp";
import pythonLogo from "../assets/python-logo-only.png";
import javascriptLogo from "../assets/javascript-logo-javascript-icon-transparent-free-png.webp";
import typescriptLogo from "../assets/typescriptlogo.png";
import reactLogo from "../assets/reactlogo.png";
import tailwindLogo from "../assets/tailwindlogo.png";
import fastapiLogo from "../assets/fastapitransparentlogo.svg";
import ollamaLogo from "../assets/ollamanewlogo.png";
import supabaseLogo from "../assets/newsupabaselogo.png";
import firebaseLogo from "../assets/firebasenewlogo.png";
import chromadbLogo from "../assets/chromadblogo.webp";
import dockerLogo from "../assets/dockerpng.png";

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dockItems = [
    { 
      name: "Java", 
      icon: javaLogo, 
      color: "from-orange-400 to-red-500",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "Python", 
      icon: pythonLogo, 
      color: "from-blue-400 to-yellow-400",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "JavaScript", 
      icon: javascriptLogo, 
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "TypeScript", 
      icon: typescriptLogo, 
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "React", 
      icon: reactLogo, 
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "Tailwind", 
      icon: tailwindLogo, 
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "FastAPI", 
      icon: fastapiLogo, 
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "Ollama", 
      icon: ollamaLogo, 
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "Supabase", 
      icon: supabaseLogo, 
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "Firebase", 
      icon: firebaseLogo, 
      color: "from-orange-400 to-red-500",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
    { 
      name: "ChromaDB", 
      icon: chromadbLogo, 
      color: "from-pink-400 to-purple-500",
      bgColor: "bg-pink-500/20",
      useFilter: false,
      preserveColors: true,
      logoSize: "w-8 h-8"
    },
    { 
      name: "Docker", 
      icon: dockerLogo, 
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-white/10",
      useFilter: false,
      logoSize: "w-8 h-8"
    },
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-gray-300/60 backdrop-blur-macos rounded-2xl border border-gray-500/30 shadow-dock p-2 w-[95vw] max-w-5xl">
        <div className="flex items-end justify-center space-x-3">
          {dockItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const scale = isHovered ? 1.4 : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1 ? 1.15 : 1;
            
            return (
              <motion.div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6 }}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`
                  w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} 
                  flex items-center justify-center cursor-pointer
                  shadow-lg relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-glass before:opacity-30
                `}>
                  <div className={`
                    w-10 h-10 rounded-lg ${item.bgColor} backdrop-blur-sm
                    flex items-center justify-center relative z-10
                    border border-white/20
                  `}>
                    <img 
                      src={item.icon} 
                      alt={item.name}
                      className={`${item.logoSize} object-contain drop-shadow-sm ${
                        item.preserveColors ? '' : ''
                      }`}
                    />
                  </div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-menubar/90 backdrop-blur-sm text-menubar-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
                
                {/* Dot indicator */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-foreground/60 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Dock;