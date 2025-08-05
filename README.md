# Personal Portfolio - macOS Style

A personal portfolio website designed to mimic a macOS desktop environment with a sci-fi theme. Built with React, TypeScript, and TailwindCSS.

## Features

- **macOS-inspired UI**: Menu bar, dock, and window styling with traffic light controls
- **Window Management System**: Smooth transitions between different portfolio sections
- **Four Interactive Windows**:
  - **About Me**: TextEdit-style window with personal information
  - **Projects**: Finder-style window showcasing projects with GitHub/DevPost links
  - **Resume**: Preview-style window displaying PDF resume
  - **Contact**: Messages-style window with contact links and chat bubbles
- **Animated Background**: Interactive particle system with react-tsparticles
- **Responsive Design**: Works across different screen sizes
- **Smooth Animations**: Powered by Framer Motion with macOS-like minimize/maximize effects
- **Modern Tech Stack**: React 18, TypeScript, Vite, TailwindCSS

## Window Features

### About Me Window
- TextEdit app styling with glassmorphism effects
- Personal information and background
- macOS traffic light window controls

### Projects Window
- Finder-style layout with sidebar and toolbar
- Three featured projects with icons and descriptions
- Interactive GitHub and DevPost buttons with radiating color effects
- Project details including tech stacks and dates

### Resume Window
- Preview app styling with PDF viewer
- Browser-native PDF rendering for reliability
- macOS-style window controls and toolbar

### Contact Window
- Messages app styling with iMessage blue chat bubbles
- Contact sidebar with avatar
- Interactive links for GitHub, LinkedIn, and Email
- Staggered animation entrance for chat bubbles

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: TailwindCSS, Framer Motion
- **Build Tool**: Vite
- **UI Components**: Radix UI, Lucide React Icons, shadcn/ui
- **Animations**: react-tsparticles, Framer Motion
- **Routing**: React Router DOM
- **Data Fetching**: React Query (TanStack Query)
- **Form Handling**: React Hook Form, Zod
- **PDF Rendering**: Browser-native iframe for PDF display

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd personalwebsitenewrepo
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/           # React components
│   ├── AboutMeWindow.tsx    # About Me window component
│   ├── ProjectsWindow.tsx   # Projects window component
│   ├── ResumeWindow.tsx     # Resume window component
│   ├── ContactWindow.tsx    # Contact window component
│   ├── WindowManager.tsx    # Window management system
│   ├── MenuBar.tsx          # macOS-style menu bar
│   └── Dock.tsx             # Interactive dock component
├── pages/               # Page components
├── assets/              # Static assets
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions
public/
├── resume.pdf           # Resume PDF file
└── ...                  # Other static assets
```

## Window Management

The application features a sophisticated window management system:

- **Menu Bar Navigation**: Click menu items to switch between windows
- **Smooth Transitions**: macOS-like minimize/maximize animations
- **AnimatePresence**: Proper animation handling for window transitions
- **State Management**: Centralized window state management

## Customization

### Adding New Windows
1. Create a new window component in `src/components/`
2. Add the window type to `WindowType` in `WindowManager.tsx`
3. Add the case in the `renderWindow` function
4. Add menu item in `MenuBar.tsx`

### Updating Contact Links
Edit the `contactLinks` array in `ContactWindow.tsx`:
```typescript
const contactLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/your-username",
    // ... other properties
  }
];
```

### Updating Projects
Edit the `projects` array in `ProjectsWindow.tsx`:
```typescript
const projects = [
  {
    name: "Project Name",
    icon: "💻",
    description: "Project description",
    tech: "Tech stack",
    date: "Date",
    hasGitHub: true,
    githubUrl: "https://github.com/...",
    // ... other properties
  }
];
```

## License

This project is open source and available under the [MIT License](LICENSE).
