import { motion } from "framer-motion";
import { Minimize2, Maximize2, X, ChevronLeft, ChevronRight, Search, Grid, List, Columns } from "lucide-react";
import { WindowType } from "./WindowManager";

interface ProjectsWindowProps {
  onWindowChange: (windowType: WindowType) => void;
}

const ProjectsWindow = ({ onWindowChange }: ProjectsWindowProps) => {
  const projects = [
    {
      name: "LLMContext",
      icon: "💻",
      description: "IDE plugin for optimized documentation context",
      tech: "TypeScript • React • CLI",
      date: "2 days ago"
    },
    {
      name: "TerraScopeAI",
      icon: "🌍",
      description: "AI-powered environmental monitoring system",
      tech: "Python • TensorFlow • AWS",
      date: "1 week ago"
    },
    {
      name: "FullStackWebApp",
      icon: "💻",
      description: "Complete web application with frontend and backend",
      tech: "React • Node.js • MongoDB",
      date: "3 weeks ago"
    }
  ];

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 200 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ 
        scale: 0, 
        y: 200, 
        opacity: 0,
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
      className="fixed inset-0 flex items-center justify-center z-40"
    >
      <div className="w-[800px] h-[600px] bg-window/95 backdrop-blur-macos rounded-lg shadow-window border border-window-border/50 overflow-hidden flex flex-col">
        {/* Window Header */}
        <div className="h-8 bg-window-header/80 backdrop-blur-sm border-b border-window-border/30 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
          
          <div className="text-sm font-medium text-foreground/80">
            Projects - Finder
          </div>
          
          <div className="flex items-center space-x-1">
            <motion.button 
              className="p-1 rounded hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Minimize2 size={12} className="text-foreground/60" />
            </motion.button>
            <motion.button 
              className="p-1 rounded hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Maximize2 size={12} className="text-foreground/60" />
            </motion.button>
            <motion.button 
              className="p-1 rounded hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={12} className="text-foreground/60" />
            </motion.button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="h-12 bg-window-header/40 border-b border-window-border/20 flex items-center px-4 space-x-4">
          <div className="flex items-center space-x-2">
            <ChevronLeft size={16} className="text-foreground/60" />
            <ChevronRight size={16} className="text-foreground/60" />
          </div>
          
          <div className="flex items-center space-x-2">
            <Search size={16} className="text-foreground/60" />
            <span className="text-xs text-foreground/60">Search Projects</span>
          </div>
          
          <div className="flex items-center space-x-2 ml-auto">
            <Grid size={16} className="text-foreground/60" />
            <List size={16} className="text-foreground/60" />
            <Columns size={16} className="text-foreground/60" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 bg-window-header/20 border-r border-window-border/30 p-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                  Favorites
                </h3>
                <div className="space-y-1">
                  <div className="text-sm text-foreground/80 py-1 px-2 rounded hover:bg-white/10 cursor-pointer">
                    Featured Projects
                  </div>
                  <div className="text-sm text-foreground/80 py-1 px-2 rounded hover:bg-white/10 cursor-pointer">
                    Recent Work
                  </div>
                  <div className="text-sm text-foreground/80 py-1 px-2 rounded hover:bg-white/10 cursor-pointer">
                    Personal Projects
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                  Categories
                </h3>
                <div className="space-y-1">
                  <div className="text-sm text-foreground/80 py-1 px-2 rounded hover:bg-white/10 cursor-pointer">
                    Web Development
                  </div>
                  <div className="text-sm text-foreground/80 py-1 px-2 rounded hover:bg-white/10 cursor-pointer">
                    Mobile Apps
                  </div>
                  <div className="text-sm text-foreground/80 py-1 px-2 rounded hover:bg-white/10 cursor-pointer">
                    AI/ML Projects
                  </div>
                  <div className="text-sm text-foreground/80 py-1 px-2 rounded hover:bg-white/10 cursor-pointer">
                    Open Source
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex-1 p-6 bg-gradient-to-br from-window via-window/95 to-window/90">
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center space-x-4 p-4 bg-window-header/20 rounded-lg border border-window-border/30 hover:bg-window-header/30 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mt-1">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-foreground/60">
                        {project.tech}
                      </span>
                      <span className="text-xs text-foreground/50">
                        {project.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsWindow; 