import type { WindowId, WindowState } from "./types";

/** Centralised z-index ladder — change here and everything updates. */
export const Z_INDEX = {
    DESKTOP_ICONS: 1,
    BACKDROP:      9998,
    MENU:          9999,
    PROPERTIES:    99998,
    SHUTDOWN:      99999,
    BOOT:          100000,
    SCREENSAVER:   200000,
    BSOD:          300000,
} as const;

export const INITIAL_WINDOWS: WindowState[] = [
    { id: "about",          title: "About",                    icon: "🖥️", open: true,  minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 100, y: 40  }, position: { x: 100, y: 40  }, width: 480 },
    { id: "skills",         title: "Skills",                   icon: "⚙️", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 200, y: 60  }, position: { x: 200, y: 60  }, width: 380 },
    { id: "experience",     title: "Experience",               icon: "💼", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 180, y: 70  }, position: { x: 180, y: 70  }, width: 560 },
    { id: "projects",       title: "My Projects",              icon: "📁", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 150, y: 80  }, position: { x: 150, y: 80  }, width: 540 },
    { id: "education",      title: "Education",                icon: "🎓", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 220, y: 90  }, position: { x: 220, y: 90  }, width: 460 },
    { id: "certifications", title: "Certification & Bootcamp", icon: "🏆", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 240, y: 100 }, position: { x: 240, y: 100 }, width: 400 },
    { id: "languages",      title: "Languages",                icon: "🌐", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 260, y: 110 }, position: { x: 260, y: 110 }, width: 300 },
    { id: "contact",        title: "Contact",                  icon: "✉️", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 250, y: 100 }, position: { x: 250, y: 100 }, width: 340 },
    { id: "mycomputer",     title: "My Computer",              icon: "💻", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 300, y: 120 }, position: { x: 300, y: 120 }, width: 360 },
    { id: "recyclebin",     title: "Recycle Bin",              icon: "🗑️", open: false, minimized: false, maximized: false, zIndex: 1, initialPosition: { x: 280, y: 130 }, position: { x: 280, y: 130 }, width: 320 },
];

export const DESKTOP_ICONS: { id: WindowId; label: string; icon: string }[] = [
    { id: "about",          label: "About",         icon: "🖥️" },
    { id: "skills",         label: "Skills",         icon: "⚙️" },
    { id: "experience",     label: "Experience",     icon: "💼" },
    { id: "projects",       label: "My Projects",    icon: "📁" },
    { id: "education",      label: "Education",      icon: "🎓" },
    { id: "certifications", label: "Certifications", icon: "🏆" },
    { id: "languages",      label: "Languages",      icon: "🌐" },
    { id: "contact",        label: "Contact",        icon: "✉️" },
    { id: "mycomputer",     label: "My Computer",    icon: "💻" },
    { id: "recyclebin",     label: "Recycle Bin",    icon: "🗑️" },
];
