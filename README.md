# 🖥️ Portfolio — Windows 95 Theme

A personal portfolio website built with a retro **Windows 95** desktop aesthetic. Features draggable windows, a functional taskbar, Start menu, right-click context menu, and full mobile responsiveness.

![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)

---

## ✨ Features

- 🪟 **Draggable windows** — click, focus, minimize, and close each section as a real Win95 window
- 📌 **Taskbar** — shows all open windows, click to minimize/restore
- 🚀 **Start Menu** — navigate to any section from the bottom-left button
- 🖱️ **Right-click context menu** — Refresh, Arrange Icons, View Source, Properties
- 📱 **Mobile responsive** — collapsible accordion layout on small screens
- ⌨️ **Keyboard accessible** — all interactive elements support keyboard navigation

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── mobile/
│   │   ├── MobileSection.tsx       # Collapsible accordion section
│   │   └── MobileTaskbar.tsx       # Mobile bottom bar with clock
│   ├── sections/
│   │   ├── AboutContent.tsx
│   │   ├── CertificationsContent.tsx
│   │   ├── ContactContent.tsx
│   │   ├── EducationContent.tsx
│   │   ├── ExperienceContent.tsx
│   │   ├── LanguagesContent.tsx
│   │   ├── ProjectsContent.tsx
│   │   ├── SkillsContent.tsx
│   │   └── WindowContent.tsx       # Window content router
│   ├── W95ContextMenu.tsx          # Right-click context menu
│   ├── W95Desktop.tsx              # Main orchestrator
│   ├── W95Properties.tsx           # Properties dialog
│   ├── W95StartMenu.tsx            # Start menu
│   ├── W95Taskbar.tsx              # Bottom taskbar
│   └── W95Window.tsx               # Draggable window wrapper
├── config/
│   └── portfolio.ts                # ✏️ Single source of truth — edit here
├── hooks/
│   ├── useClock.ts                 # Live clock
│   └── useDesktopWindows.ts        # Window state management
├── lib/
│   ├── constants.ts                # INITIAL_WINDOWS, DESKTOP_ICONS, Z_INDEX
│   ├── types.ts                    # WindowId, WindowState
│   └── utils.ts                    # Shared utilities
├── stores/
│   └── useDesktopStore.ts          # UI state (start menu, context menu, etc.)
└── styles/
    └── globals.css                 # Win95 CSS variables and component classes
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- [Bun](https://bun.sh/) (recommended) or npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/haykal-fe-verd/portfolio.git
cd portfolio

# Install dependencies
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
bun run build
bun start
```

---

## ✏️ Customization

All personal content lives in a **single file**:

```
src/config/portfolio.ts
```

Edit it to update your name, bio, skills, experience, projects, education, certifications, languages, and contact links. Everything on the site updates automatically.

### Replacing assets

| Asset | Path |
|-------|------|
| Profile photo | `public/images/photo.jpg` |
| CV / Resume | `public/pdf/cv.pdf` |
| Desktop wallpaper | `public/images/background.jpg` |

---

## 🎨 Win95 Design System

All Win95 styles are defined as CSS classes and variables in `src/styles/globals.css`.

### Color variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--w95-gray` | `#c0c0c0` | Default surface color |
| `--w95-navy` | `#000080` | Titlebar, selection highlight |
| `--w95-teal` | `#008080` | Desktop background |
| `--w95-white` | `#ffffff` | Raised border highlight side |
| `--w95-gray-dark` | `#808080` | Raised border shadow side |

### Utility classes

| Class | Description |
|-------|-------------|
| `.w95-window` | Panel with raised bevel border |
| `.w95-raised` | Raised 3D element |
| `.w95-sunken` | Sunken / inset element |
| `.w95-titlebar` | Window title bar |
| `.w95-btn` | Standard button |
| `.w95-btn-default` | Default / primary button |
| `.w95-groupbox` | Labeled group box |
| `.w95-menu-item` | Hoverable menu button (navy on hover) |
| `.w95-desktop-icon` | Desktop icon with label |
| `.w95-systray` | System tray / clock area |

---

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

```bash
# Deploy with Vercel CLI
vercel --prod
```

Or connect your GitHub repository directly on the Vercel dashboard for automatic deployments on every push.

---

## 📄 License

MIT — feel free to fork and customize for your own portfolio.

---

<p align="center">Built with ❤️ by <a href="https://github.com/haykal-fe-verd">Muhammad Haykal</a></p>
