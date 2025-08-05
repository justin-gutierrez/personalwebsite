import { motion } from "framer-motion";
import { Minimize2, Maximize2, X } from "lucide-react";
import { WindowType } from "./WindowManager";

interface AboutMeWindowProps {
  onWindowChange: (windowType: WindowType) => void;
}

const AboutMeWindow = ({ onWindowChange }: AboutMeWindowProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ 
        scale: 0, 
        y: 200, 
        opacity: 0,
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed inset-0 flex items-center justify-center z-40"
    >
      <div className="w-[600px] bg-window/95 backdrop-blur-macos rounded-lg shadow-window border border-window-border/50 overflow-hidden">
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
            About Me - TextEdit
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
        <div className="h-10 bg-window-header/40 border-b border-window-border/20 flex items-center px-4">
          <div className="flex items-center space-x-4 text-xs text-foreground/60">
            <span>File</span>
            <span>Edit</span>
            <span>Format</span>
            <span>View</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[400px] bg-gradient-to-br from-window via-window/95 to-window/90">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <motion.div 
                className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-primary mx-auto mb-4 flex items-center justify-center text-4xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                👨‍💻
              </motion.div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Hello, I'm <span className="text-primary">Justin</span>
              </h1>
              <p className="text-foreground/70">Software Engineer</p>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm an undergraduate student at San Jose State University, pursuing a Bachelor's degree in Computer Science.
                I am very interested in the field of AI and machine learning, ultimately mixing this passion with my desire to create.
              </p>
              
              <p>
                With experience in machine learning and full stack development, I am looking to combine these skills to build new 
                and exciting applications that can solve real-world problems. Utilizing my skills and AI, I am open to any challenge, whether it be frontend, backend, or AI development. 
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, experimenting with the latest in AI. 
                I also enjoy playing pickleball, watching the latest movies, and eating some very good sushi or mexican food.
                Below you'll find some of my current focuses, as well as some languages and frameworks I've utilized.
              </p>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-primary font-semibold mb-2">Current Focus</h3>
                <p className="text-sm text-foreground/70">
                  - Building IDE plugins that connects developers to a CLI tool to deliver optimized documentation context into their workflow. 
                  - Finishing a freelance website frontend and backend deployment on Vercel
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMeWindow;