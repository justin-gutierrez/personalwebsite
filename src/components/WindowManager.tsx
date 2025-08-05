import { AnimatePresence } from "framer-motion";
import AboutMeWindow from "./AboutMeWindow";
import ProjectsWindow from "./ProjectsWindow";
import ResumeWindow from "./ResumeWindow";

export type WindowType = "about" | "projects" | "resume" | "contact";

interface WindowManagerProps {
  activeWindow: WindowType;
  onWindowChange: (windowType: WindowType) => void;
}

const WindowManager = ({ activeWindow, onWindowChange }: WindowManagerProps) => {
  const renderWindow = () => {
    switch (activeWindow) {
      case "about":
        return <AboutMeWindow key="about" onWindowChange={onWindowChange} />;
      case "projects":
        return <ProjectsWindow key="projects" onWindowChange={onWindowChange} />;
      case "resume":
        return <ResumeWindow key="resume" onWindowChange={onWindowChange} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {renderWindow()}
    </AnimatePresence>
  );
};

export default WindowManager; 