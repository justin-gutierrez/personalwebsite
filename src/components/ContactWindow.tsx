import { motion } from "framer-motion";
import { useState } from "react";
import { Minimize2, Maximize2, X, Send, Github, Linkedin, Mail } from "lucide-react";
import { WindowType } from "./WindowManager";

interface ContactWindowProps {
  onWindowChange: (windowType: WindowType) => void;
}

const ContactWindow = ({ onWindowChange }: ContactWindowProps) => {
  const [messageInput, setMessageInput] = useState("");

  const contactLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/justin-gutierrez",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-500 hover:to-gray-700"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/justingutierrez1/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:justin.gutierrez@example.com",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:from-green-500 hover:to-green-700"
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
            Messages - Contact Justin
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

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - Contacts */}
          <div className="w-48 bg-window-header/20 border-r border-window-border/30 p-4">
            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
              Contacts
            </h3>
            <div className="space-y-2">
              <motion.div
                className="p-3 rounded-lg bg-primary/20 border border-primary/30 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">JG</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/80">Justin Gutierrez</p>
                    <p className="text-xs text-foreground/60">Online</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-gradient-to-br from-blue-50/20 via-blue-50/10 to-blue-50/20">
            {/* Chat Header */}
            <div className="h-12 bg-window-header/40 border-b border-window-border/20 flex items-center px-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-white">JG</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/80">Justin Gutierrez</p>
                  <p className="text-xs text-foreground/60">Developer</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {/* Welcome Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-start"
              >
                                 <div className="max-w-xs bg-gradient-to-r from-blue-500 to-blue-600 backdrop-blur-sm rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-blue-400/30">
                   <p className="text-sm text-white">
                     Hey there! 👋 Let's connect! Find me on:
                   </p>
                 </div>
              </motion.div>

              {/* Contact Links */}
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex justify-start"
                >
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`max-w-xs bg-gradient-to-r ${link.color} ${link.hoverColor} backdrop-blur-sm rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-window-border/20 transition-all duration-200`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <link.icon size={20} className="text-white" />
                      <div>
                        <p className="text-sm font-medium text-white">{link.name}</p>
                        <p className="text-xs text-white/80">Click to open</p>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              ))}

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-start"
              >
                                 <div className="max-w-xs bg-gradient-to-r from-blue-500 to-blue-600 backdrop-blur-sm rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-blue-400/30">
                   <p className="text-sm text-white">
                     Feel free to reach out for collaborations, opportunities, or just to say hello! 🚀
                   </p>
                 </div>
              </motion.div>
            </div>

            {/* Input Area */}
            <div className="h-16 bg-window-header/40 border-t border-window-border/20 flex items-center px-4 space-x-3">
              <input
                type="text"
                placeholder="iMessage"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 h-10 bg-white/20 backdrop-blur-sm border border-window-border/30 rounded-full px-4 text-sm text-foreground/80 placeholder-foreground/50 focus:outline-none focus:border-primary/50"
                disabled
              />
              <motion.button
                className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled
              >
                <Send size={16} className="text-primary/60" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactWindow; 