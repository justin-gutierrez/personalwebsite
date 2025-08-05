import { motion } from "framer-motion";
import { useState } from "react";
import { Minimize2, Maximize2, X, Search, ZoomIn, ZoomOut, Printer, Share2 } from "lucide-react";
import { WindowType } from "./WindowManager";

interface ResumeWindowProps {
  onWindowChange: (windowType: WindowType) => void;
}

const ResumeWindow = ({ onWindowChange }: ResumeWindowProps) => {
  const [searchQuery, setSearchQuery] = useState("");

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
      <div className="w-[900px] h-[700px] bg-window/95 backdrop-blur-macos rounded-lg shadow-window border border-window-border/50 overflow-hidden flex flex-col">
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
            Resume - Preview
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
          {/* PDF Viewer Label */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-foreground/60">PDF Viewer</span>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-2">
            <Search size={16} className="text-foreground/60" />
            <input
              type="text"
              placeholder="Search in document..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 h-6 text-xs bg-window-header/20 border border-window-border/30 rounded px-2 text-foreground/80 focus:outline-none focus:border-primary/50"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 ml-auto">
            <motion.button
              className="p-1 rounded hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Printer size={16} className="text-foreground/60" />
            </motion.button>
            <motion.button
              className="p-1 rounded hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 size={16} className="text-foreground/60" />
            </motion.button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* PDF Viewer */}
          <div className="flex-1 p-6 bg-gradient-to-br from-window via-window/95 to-window/90 overflow-auto">
            <div className="flex justify-center h-full">
              <div className="bg-white rounded-lg shadow-lg border border-window-border/30 w-full h-full">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full rounded-lg"
                  title="Resume PDF"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeWindow; 