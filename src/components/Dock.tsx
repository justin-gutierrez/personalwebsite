import { motion } from "framer-motion";
import { useState } from "react";

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dockItems = [
    { name: "Java", icon: "☕", color: "from-orange-400 to-red-500" },
    { name: "Python", icon: "🐍", color: "from-blue-400 to-yellow-400" },
    { name: "JavaScript", icon: "🟡", color: "from-yellow-400 to-orange-400" },
    { name: "TypeScript", icon: "📘", color: "from-blue-500 to-indigo-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind", icon: "🎨", color: "from-teal-400 to-cyan-500" },
    { name: "FastAPI", icon: "⚡", color: "from-green-400 to-emerald-500" },
    { name: "Ollama", icon: "🤖", color: "from-purple-400 to-indigo-500" },
    { name: "Supabase", icon: "🟢", color: "from-green-500 to-emerald-600" },
    { name: "Firebase", icon: "🔥", color: "from-orange-400 to-red-500" },
    { name: "ChromaDB", icon: "🌈", color: "from-pink-400 to-purple-500" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-gray-600/60 backdrop-blur-macos rounded-2xl border border-gray-500/30 shadow-dock p-3 w-[95vw] max-w-5xl">
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
                  flex items-center justify-center text-2xl cursor-pointer
                  shadow-lg relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-glass before:opacity-30
                `}>
                  <span className="relative z-10 filter drop-shadow-sm">
                    {item.icon}
                  </span>
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