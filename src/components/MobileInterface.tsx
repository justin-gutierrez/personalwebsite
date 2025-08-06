import { motion, AnimatePresence } from "framer-motion";
import { WindowType } from "./WindowManager";
import MobileWindows from "./MobileWindows";
import MobileDock from "./MobileDock";
import profileAvatar from "../assets/profileavatorpicture.jpg";

interface MobileInterfaceProps {
  activeWindow: WindowType;
  onWindowChange: (windowType: WindowType) => void;
}

const MobileInterface = ({ activeWindow, onWindowChange }: MobileInterfaceProps) => {
  const menuItems = [
    { label: "About", type: "about" as WindowType },
    { label: "Projects", type: "projects" as WindowType },
    { label: "Resume", type: "resume" as WindowType },
    { label: "Contact", type: "contact" as WindowType },
  ];

  return (
    <div className="relative z-10 min-h-screen">
      {/* Main Content Area - Scrollable */}
      <div className="pt-8 pb-32 px-4 h-screen overflow-y-auto">
        {/* Welcome Screen - Show when no window is active */}
        <AnimatePresence mode="wait">
          {activeWindow === "about" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >


              {/* About Me Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                                                                   {/* Profile Avatar */}
                 <div className="flex justify-center mb-4">
                   <motion.div 
                     className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/20"
                     whileHover={{ scale: 1.05 }}
                   >
                                           <img 
                        src={profileAvatar} 
                        alt="Profile Avatar" 
                        className="w-full h-full object-contain"
                        style={{
                          transform: 'scale(2)',
                          transformOrigin: 'center'
                        }}
                      />
                   </motion.div>
                 </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    Hello, I'm <span className="text-blue-400">Justin</span>
                  </h3>
                  <p className="text-white/70 text-sm">Software Engineer</p>
                </div>

                {/* Bio Text */}
                <div className="space-y-3 text-white/80 text-sm leading-relaxed text-left">
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
                    Below you'll find some of my current focuses, as well as some languages and frameworks I've utilized displayed in the dock at the bottom.
                  </p>
                </div>

                {/* Current Focus */}
                <motion.div 
                  className="mt-6 p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-ios rounded-ios-lg border border-blue-400/30 shadow-ios"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-blue-300 font-semibold mb-2 text-sm">Current Focus</h3>
                  <div className="text-white/80 text-xs space-y-1">
                    <p>• Building IDE plugins that connects developers to a CLI tool to deliver optimized documentation context into their workflow.</p>
                    <p>• Finishing a freelance website frontend and backend deployment on Vercel</p>
                  </div>
                </motion.div>

                {/* App Icons Section - Below Current Focus */}
                <div className="mt-8 mb-8">
                  <h3 className="text-white text-lg font-semibold mb-6">Quick Access</h3>
                  <div className="flex justify-center">
                    <div className="flex space-x-8">
                      {/* Projects App Icon */}
                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center space-y-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onWindowChange("projects")}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-ios-lg border border-white/20">
                          <div className="text-2xl">📁</div>
                        </div>
                        <span className="text-white text-xs font-medium">Projects</span>
                      </motion.button>

                      {/* Resume App Icon */}
                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center space-y-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onWindowChange("resume")}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-ios-lg border border-white/20">
                          <div className="text-2xl">📄</div>
                        </div>
                        <span className="text-white text-xs font-medium">Resume</span>
                      </motion.button>

                      {/* Contact App Icon */}
                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center space-y-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onWindowChange("contact")}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-ios-lg border border-white/20">
                          <div className="text-2xl">💬</div>
                        </div>
                        <span className="text-white text-xs font-medium">Contact</span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Extra bottom spacing for better scroll experience */}
                <div className="h-32"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* iOS Sheet Modal */}
      <AnimatePresence>
        {activeWindow !== "about" && (
          <>
            {/* Full Screen Modal for Projects and Resume */}
            {(activeWindow === "projects" || activeWindow === "resume") ? (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-0 z-50 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-ios-lg"
              >
                {/* Sheet Handle */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-12 h-1 bg-white/30 rounded-full" />
                </div>
                
                {/* Sheet Header */}
                <div className="px-6 pb-4 border-b border-white/10">
                  <div className="flex items-center justify-end">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onWindowChange("about")}
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-ios flex items-center justify-center shadow-ios"
                    >
                      <span className="text-white text-lg">×</span>
                    </motion.button>
                  </div>
                </div>
                
                {/* Sheet Content */}
                <div className="px-6 py-4 overflow-y-auto h-full" style={{ height: "calc(100vh - 120px)" }}>
                  <MobileWindows activeWindow={activeWindow} onWindowChange={onWindowChange} />
                </div>
              </motion.div>
            ) : (
              <>
                {/* Backdrop for other modals */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                  onClick={() => onWindowChange("about")}
                />
                
                {/* Sheet for other modals */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-ios-lg border-t border-white/20 rounded-t-ios-xl shadow-ios-xl"
                  style={{ maxHeight: "85vh" }}
                >
                  {/* Sheet Handle */}
                  <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1 bg-white/30 rounded-full" />
                  </div>
                  
                  {/* Sheet Header */}
                  <div className="px-6 pb-4 border-b border-white/10">
                    <div className="flex items-center justify-end">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onWindowChange("about")}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-ios flex items-center justify-center shadow-ios"
                      >
                        <span className="text-white text-lg">×</span>
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Sheet Content */}
                  <div className="px-6 py-4 overflow-y-auto" style={{ maxHeight: "calc(85vh - 120px)" }}>
                    <MobileWindows activeWindow={activeWindow} onWindowChange={onWindowChange} />
                  </div>
                </motion.div>
              </>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Mobile Dock - Fixed at Bottom */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-30 h-24 bg-gradient-to-t from-black/30 to-black/10 backdrop-blur-ios border-t border-white/10"
      >
        <div className="flex items-center justify-center h-full px-4">
          <div className="w-full max-w-lg">
            <MobileDock />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileInterface; 