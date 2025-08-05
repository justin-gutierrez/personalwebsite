import { motion } from "framer-motion";
import { useState } from "react";

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dockItems = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400" },
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-400" },
    { name: "TypeScript", icon: "📘", color: "from-blue-400 to-indigo-400" },
    { name: "TailwindCSS", icon: "🎨", color: "from-cyan-400 to-blue-400" },
    { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
    { name: "Git", icon: "📚", color: "from-orange-400 to-red-400" },
    { name: "JavaScript", icon: "🟡", color: "from-yellow-400 to-orange-400" },
    { name: "Vue.js", icon: "🟢", color: "from-green-400 to-teal-400" },
    { name: "Angular", icon: "🔴", color: "from-red-400 to-pink-400" },
    { name: "Next.js", icon: "⚫", color: "from-gray-400 to-black" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-indigo-400" },
    { name: "Redis", icon: "🔴", color: "from-red-400 to-red-600" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-400" },
    { name: "Firebase", icon: "🔥", color: "from-orange-400 to-red-400" },
    { name: "GraphQL", icon: "🟣", color: "from-purple-400 to-pink-400" },
    { name: "Webpack", icon: "📦", color: "from-blue-400 to-cyan-400" },
    { name: "Jest", icon: "🟢", color: "from-green-400 to-emerald-400" },
    { name: "Cypress", icon: "🟢", color: "from-green-400 to-teal-400" },
    { name: "Sass", icon: "🟣", color: "from-pink-400 to-purple-400" },
    { name: "WebGL", icon: "🎮", color: "from-purple-400 to-blue-400" },
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-gray-600/60 backdrop-blur-macos rounded-2xl border border-gray-500/30 shadow-dock p-2 w-[90vw] max-w-6xl">
        <div className="flex items-end justify-center space-x-2">
          {dockItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const scale = isHovered ? 1.5 : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1 ? 1.2 : 1;
            
            return (
              <motion.div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`
                  w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} 
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