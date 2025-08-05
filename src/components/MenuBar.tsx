import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wifi, Battery, Volume2 } from "lucide-react";
import pineappleLogo from "@/assets/pineapple-logo.png";
import { WindowType } from "./WindowManager";

interface MenuBarProps {
  onWindowChange: (windowType: WindowType) => void;
  activeWindow: WindowType;
}

const MenuBar = ({ onWindowChange, activeWindow }: MenuBarProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    
    return `${dayOfWeek} ${month} ${day} ${displayHours}:${displayMinutes} ${ampm}`;
  };

  const menuItems = [
    { label: "About", type: "about" as WindowType },
    { label: "Projects", type: "projects" as WindowType },
    { label: "Resume", type: "resume" as WindowType },
    { label: "Contact", type: "contact" as WindowType },
  ];

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-8 bg-gray-600/60 backdrop-blur-macos border-b border-gray-500/30"
    >
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center space-x-6">
          <motion.div 
            className="w-5 h-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-lg font-bold">
              🍐
            </div>
          </motion.div>
          
          <nav className="flex items-center space-x-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                className={`text-sm font-medium transition-colors text-white ${
                  activeWindow === item.type 
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onWindowChange(item.type)}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Right side - System indicators */}
        <div className="flex items-center space-x-3 text-white/80">
          <motion.div 
            className="flex items-center space-x-1"
            whileHover={{ scale: 1.1 }}
          >
            <Volume2 size={14} className="text-white" />
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-1"
            whileHover={{ scale: 1.1 }}
          >
            <Wifi size={14} className="text-white" />
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-1"
            whileHover={{ scale: 1.1 }}
          >
            <Battery size={14} className="text-white" />
            <span className="text-xs text-white">87%</span>
          </motion.div>
          
          <div className="text-xs font-mono text-white">
            {formatDateTime(currentTime)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuBar;