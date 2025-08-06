import { motion, AnimatePresence } from "framer-motion";
import { WindowType } from "./WindowManager";
import profileAvatar from "@/assets/topleftpearlogo.png";

interface MobileWindowsProps {
  activeWindow: WindowType;
  onWindowChange: (windowType: WindowType) => void;
}

const MobileWindows = ({ activeWindow, onWindowChange }: MobileWindowsProps) => {
  const renderWindowContent = () => {
    switch (activeWindow) {
      case "about":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Profile Section */}
            <div className="text-center">
                                             <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white/20 shadow-ios-lg"
                >
                  <img
                    src={profileAvatar}
                    alt="Profile Avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Image failed to load:', e);
                      e.currentTarget.src = '/fallback-avatar.png';
                    }}
                    onLoad={() => console.log('Image loaded successfully')}
                  />
                                </motion.div>
               <motion.p
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="text-white/70 text-lg mb-4"
               >
                 Software Engineer
               </motion.p>
            </div>

            {/* About Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 text-white/90 leading-relaxed"
            >
              <p>
                Passionate software engineer with expertise in full-stack development, 
                machine learning, and cloud technologies. I love building innovative 
                solutions that solve real-world problems.
              </p>
              <p>
                Currently focused on developing scalable web applications and 
                exploring the latest advancements in AI and cloud computing.
              </p>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-ios rounded-ios-lg p-4 border border-white/20 shadow-ios"
            >
              <h3 className="text-white font-semibold mb-2">Current Focus</h3>
              <p className="text-white/80 text-sm">
                Building modern web applications with React, TypeScript, and cloud-native technologies.
              </p>
            </motion.div>
          </motion.div>
        );

      case "projects":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-bold text-white mb-6"
            >
              Projects
            </motion.h2>
            
            {/* Project Cards */}
            <div className="space-y-4">
              {[
                {
                  name: "LLMContext",
                  icon: "💻",
                  description: "CLI tool/sidecar for optimized documentation context",
                  tech: "Python • FastAPI • ChromaDB",
                  date: "Aug 2025",
                  hasGitHub: true,
                  githubUrl: "https://github.com/justin-gutierrez/llmcontext",
                  hasDevPost: false,
                  devPostUrl: ""
                },
                {
                  name: "TerraScopeAI",
                  icon: "🌍",
                  description: "AI-powered terrain analysis website (Berkeley AI Hackathon 2025)",
                  tech: "React • Tailwind • Supabase • Docker • FastAPI",
                  date: "Jun 2025",
                  hasGitHub: false,
                  githubUrl: "",
                  hasDevPost: true,
                  devPostUrl: "https://devpost.com/software/jawn-ai"
                },
                {
                  name: "Photography Portfolio Website",
                  icon: "💻",
                  description: "Complete web application with booking system, admin dashboard, and collection upload",
                  tech: "React • TypeScript • Tailwind • Firebase • Vercel • WebP",
                  date: "Jul 2025",
                  hasGitHub: true,
                  githubUrl: "https://github.com/justin-gutierrez/Freelance-client-website",
                  hasDevPost: false,
                  devPostUrl: ""
                }
              ].map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-ios rounded-ios-lg p-4 border border-white/20 shadow-ios hover:shadow-ios-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-2xl">
                      {project.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-1">{project.name}</h3>
                      <p className="text-white/80 text-sm mb-2">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">
                          {project.tech}
                        </span>
                        <div className="flex items-center space-x-3">
                          {project.hasGitHub && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium relative overflow-hidden px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 hover:border-cyan-400/50 transition-colors"
                              animate={{
                                background: [
                                  "linear-gradient(90deg, rgba(34, 211, 238, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(34, 211, 238, 0.2) 100%)",
                                  "linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(34, 211, 238, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)",
                                  "linear-gradient(90deg, rgba(34, 211, 238, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(34, 211, 238, 0.2) 100%)"
                                ]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="relative z-10 text-cyan-300">GitHub</span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                                animate={{
                                  x: ["-100%", "100%"]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                            </motion.a>
                          )}
                          {project.hasDevPost && (
                            <motion.a
                              href={project.devPostUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium relative overflow-hidden px-3 py-1 rounded-full bg-gradient-to-r from-purple-400/20 to-orange-400/20 border border-purple-400/30 hover:border-purple-400/50 transition-colors"
                              animate={{
                                background: [
                                  "linear-gradient(90deg, rgba(168, 85, 247, 0.2) 0%, rgba(251, 146, 60, 0.2) 50%, rgba(168, 85, 247, 0.2) 100%)",
                                  "linear-gradient(90deg, rgba(251, 146, 60, 0.2) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(251, 146, 60, 0.2) 100%)",
                                  "linear-gradient(90deg, rgba(168, 85, 247, 0.2) 0%, rgba(251, 146, 60, 0.2) 50%, rgba(168, 85, 247, 0.2) 100%)"
                                ]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="relative z-10 text-purple-300">DevPost</span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
                                animate={{
                                  x: ["-100%", "100%"]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                            </motion.a>
                          )}
                          <span className="text-xs text-white/50">
                            {project.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "resume":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-bold text-white mb-6"
            >
              Resume
            </motion.h2>

            {/* Download Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-ios-blue/20 to-ios-blue/10 backdrop-blur-ios rounded-ios-lg px-6 py-4 border border-ios-blue/30 text-white font-semibold hover:from-ios-blue/30 hover:to-ios-blue/20 transition-all duration-300 shadow-ios"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* React-PDF Viewer */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {/* Direct PDF Link for Mobile */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-green-600/10 backdrop-blur-ios rounded-ios-lg px-6 py-4 border border-green-400/30 text-white font-semibold hover:from-green-500/30 hover:to-green-600/20 transition-all duration-300 shadow-ios"
                >
                  <span>👁️</span>
                  <span>View Resume in New Tab</span>
                </a>
              </motion.div>


            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mt-6"
            >
              <h3 className="text-white font-semibold text-lg">Key Skills</h3>
                             <div className="grid grid-cols-2 gap-4">
                 {[
                   "Python",
                   "FastAPI",
                   "React",
                   "TypeScript",
                   "Tailwind CSS",
                   "ChromaDB",
                   "Supabase",
                   "Firebase",
                   "Docker",
                   "Vercel",
                   "WebP",
                   "JavaScript"
                 ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-ios rounded-ios p-3 border border-white/20 text-center shadow-ios"
                  >
                    <span className="text-white/90 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-bold text-white mb-6"
            >
              Contact
            </motion.h2>

            {/* Contact Methods */}
            <div className="space-y-4">
                             {[
                 { icon: "📧", label: "Email", value: "gutierrezjustin48@gmail.com", action: "mailto:gutierrezjustin48@gmail.com" },
                 { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/justingutierrez1", action: "https://linkedin.com/in/justingutierrez1" },
                 { icon: "🐙", label: "GitHub", value: "github.com/justin-gutierrez", action: "https://github.com/justin-gutierrez" }
               ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.action}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-4 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-ios rounded-ios-lg p-4 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 shadow-ios"
                >
                  <span className="text-2xl">{contact.icon}</span>
                  <div className="flex-1">
                    <p className="text-white font-semibold">{contact.label}</p>
                    <p className="text-white/70 text-sm">{contact.value}</p>
                  </div>
                  <span className="text-white/50">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeWindow}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-full overflow-y-auto"
      >
        {renderWindowContent()}
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileWindows; 