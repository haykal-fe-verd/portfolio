/** biome-ignore-all lint/a11y/useSemanticElements: <because it's a custom focusable element> */

"use client";

import { useState } from "react";
import portfolio from "@/config/portfolio";
import { useDesktopWindows } from "@/hooks/useDesktopWindows";
import { DESKTOP_ICONS, Z_INDEX } from "@/lib/constants";
import { useDesktopStore } from "@/stores/useDesktopStore";
import MobileSection from "./mobile/MobileSection";
import MobileTaskbar from "./mobile/MobileTaskbar";
import AboutContent from "./sections/AboutContent";
import CertificationsContent from "./sections/CertificationsContent";
import ContactContent from "./sections/ContactContent";
import EducationContent from "./sections/EducationContent";
import ExperienceContent from "./sections/ExperienceContent";
import LanguagesContent from "./sections/LanguagesContent";
import ProjectsContent from "./sections/ProjectsContent";
import SkillsContent from "./sections/SkillsContent";
import WindowContent from "./sections/WindowContent";
import W95BootScreen from "./W95BootScreen";
import W95ContextMenu from "./W95ContextMenu";
import W95Properties from "./W95Properties";
import W95StartMenu from "./W95StartMenu";
import W95Taskbar from "./W95Taskbar";
import W95Window from "./W95Window";

export default function W95Desktop() {
    const {
        windows,
        maxZ,
        openWindow,
        closeWindow,
        minimizeWindow,
        focusWindow,
        maximizeWindow,
        updatePosition,
        arrangeIcons,
        handleTaskbarClick,
        closeAll,
    } = useDesktopWindows();

    const {
        bootComplete,
        finishBoot,
        selected,
        setSelected,
        startMenuOpen,
        toggleStartMenu,
        closeStartMenu,
        shutDownVisible,
        triggerShutDown,
        cancelShutDown,
        contextMenu,
        openContextMenu,
        closeContextMenu,
        propertiesOpen,
        openProperties,
        closeProperties,
    } = useDesktopStore();

    const [tooltip, setTooltip] = useState<{ id: string; x: number; y: number } | null>(null);

    const handleShutDown = () => {
        closeAll();
        triggerShutDown();
    };

    const CONTEXT_MENU_ITEMS = [
        {
            type: "item" as const,
            icon: "🔄",
            label: "Refresh",
            onClick: () => window.location.reload(),
        },
        { type: "separator" as const },
        {
            type: "item" as const,
            icon: "📐",
            label: "Arrange Icons",
            onClick: arrangeIcons,
        },
        {
            type: "item" as const,
            icon: "💻",
            label: "View Source",
            onClick: () => window.open(portfolio.githubRepo, "_blank"),
        },
        { type: "separator" as const },
        {
            type: "item" as const,
            icon: "🖥️",
            label: "Properties",
            onClick: openProperties,
        },
    ];

    const START_MENU_ITEMS = [
        { icon: "🖥️", label: "About", onClick: () => openWindow("about") },
        { icon: "⚙️", label: "Skills", onClick: () => openWindow("skills") },
        {
            icon: "💼",
            label: "Experience",
            onClick: () => openWindow("experience"),
        },
        { icon: "📁", label: "My Projects", onClick: () => openWindow("projects") },
        { icon: "🎓", label: "Education", onClick: () => openWindow("education") },
        {
            icon: "🏆",
            label: "Certifications",
            onClick: () => openWindow("certifications"),
        },
        { icon: "🌐", label: "Languages", onClick: () => openWindow("languages") },
        { icon: "✉️", label: "Contact", onClick: () => openWindow("contact") },
    ];

    if (!bootComplete) return <W95BootScreen onComplete={finishBoot} />;

    return (
        <>
            {/* Shut Down overlay */}
            {shutDownVisible && (
                <div
                    className="fixed inset-0 flex items-center justify-center"
                    style={{ zIndex: Z_INDEX.SHUTDOWN, background: "#000" }}>
                    <div className="w95-window" style={{ width: 320, textAlign: "center" }}>
                        <div className="w95-titlebar" style={{ background: "var(--w95-navy)", cursor: "default" }}>
                            <span className="w95-titlebar-title">Shut Down</span>
                        </div>
                        <div style={{ padding: 24 }}>
                            <p style={{ fontSize: 13, marginBottom: 16 }}>It is now safe to turn off your computer.</p>
                            <p
                                style={{
                                    fontSize: 11,
                                    color: "var(--w95-gray-dark)",
                                    marginBottom: 20,
                                }}>
                                (Just kidding — thanks for visiting! 👋)
                            </p>
                            <button
                                type="button"
                                className="w95-btn w95-btn-default"
                                style={{ fontSize: 11 }}
                                onClick={cancelShutDown}>
                                Restart
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop (md+) */}
            <div
                className="relative w-full h-full hidden md:block"
                style={{ paddingBottom: 28 }}
                role="application"
                aria-label="Desktop"
                onClick={() => {
                    setSelected(null);
                    closeStartMenu();
                }}
                onKeyDown={(e) => {
                    if (e.key === "Escape") {
                        setSelected(null);
                        closeStartMenu();
                    }
                }}
                onContextMenu={(e) => {
                    e.preventDefault();
                    openContextMenu(e.clientX, e.clientY);
                    closeStartMenu();
                }}>
                {/* Desktop icons */}
                <div className="absolute top-4 left-4 flex flex-col gap-2" style={{ zIndex: 1 }}>
                    {DESKTOP_ICONS.map((icon) => (
                        <div
                            key={icon.id}
                            className={`w95-desktop-icon ${selected === icon.id ? "selected" : ""}`}
                            role="button"
                            tabIndex={0}
                            aria-label={icon.label}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelected(icon.id);
                            }}
                            onDoubleClick={(e) => {
                                e.stopPropagation();
                                openWindow(icon.id);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.stopPropagation();
                                    openWindow(icon.id);
                                }
                                if (e.key === " ") {
                                    e.stopPropagation();
                                    setSelected(icon.id);
                                }
                            }}
                            onMouseEnter={(e) => {
                                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                                setTooltip({ id: icon.id, x: rect.left + rect.width / 2, y: rect.bottom + 4 });
                            }}
                            onMouseLeave={() => setTooltip(null)}>
                            <span style={{ fontSize: 32, lineHeight: 1 }}>{icon.icon}</span>
                            <span>{icon.label}</span>
                        </div>
                    ))}
                </div>

                {/* Desktop icon tooltip */}
                {tooltip && (
                    <div
                        className="w95-tooltip"
                        style={{ position: "fixed", left: tooltip.x, top: tooltip.y, transform: "translateX(-50%)", pointerEvents: "none" }}>
                        {DESKTOP_ICONS.find((i) => i.id === tooltip.id)?.label}
                    </div>
                )}

                {/* Windows */}
                {windows.map((w) => {
                    if (!w.open || w.minimized) return null;
                    return (
                        <W95Window
                            key={w.id}
                            title={w.title}
                            icon={w.icon}
                            position={w.position}
                            onPositionChange={(pos) => updatePosition(w.id, pos)}
                            onClose={() => closeWindow(w.id)}
                            onFocus={() => focusWindow(w.id)}
                            onMinimize={() => minimizeWindow(w.id)}
                            onMaximize={() => maximizeWindow(w.id)}
                            isFocused={w.zIndex === maxZ}
                            isMaximized={w.maximized}
                            zIndex={w.zIndex}
                            width={w.width}>
                            <WindowContent id={w.id} />
                        </W95Window>
                    );
                })}

                {contextMenu && (
                    <W95ContextMenu
                        x={contextMenu.x}
                        y={contextMenu.y}
                        items={CONTEXT_MENU_ITEMS}
                        onClose={closeContextMenu}
                    />
                )}

                {propertiesOpen && <W95Properties onClose={closeProperties} />}

                {startMenuOpen && (
                    <W95StartMenu items={START_MENU_ITEMS} onShutDown={handleShutDown} onClose={closeStartMenu} />
                )}

                <W95Taskbar
                    windows={windows.map((w) => ({
                        id: w.id,
                        title: w.title,
                        icon: w.icon,
                        open: w.open,
                        minimized: w.minimized,
                        isFocused: w.zIndex === maxZ,
                    }))}
                    onWindowClick={handleTaskbarClick}
                    onStartClick={toggleStartMenu}
                    startMenuOpen={startMenuOpen}
                />
            </div>

            {/* Mobile (< md) */}
            <div className="flex flex-col w-full h-full md:hidden" style={{ background: "var(--w95-teal)" }}>
                {/* Top bar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        height: 28,
                        padding: "0 8px",
                        background: "var(--w95-gray)",
                        borderBottom: "2px solid var(--w95-gray-dark)",
                        boxShadow: "0 1px 0 var(--w95-white) inset",
                        flexShrink: 0,
                        fontFamily: "var(--font-ui)",
                        fontSize: 11,
                        fontWeight: "bold",
                    }}>
                    <span style={{ fontSize: 14 }}>🪟</span>
                    <span>Portfolio</span>
                </div>

                {/* Scrollable sections */}
                <div className="flex-1 overflow-y-auto" style={{ padding: 8 }}>
                    <MobileSection title="About" icon="🖥️">
                        <AboutContent />
                    </MobileSection>
                    <MobileSection title="Skills" icon="⚙️">
                        <SkillsContent />
                    </MobileSection>
                    <MobileSection title="Experience" icon="💼">
                        <ExperienceContent />
                    </MobileSection>
                    <MobileSection title="My Projects" icon="📁">
                        <ProjectsContent />
                    </MobileSection>
                    <MobileSection title="Education" icon="🎓">
                        <EducationContent />
                    </MobileSection>
                    <MobileSection title="Certification & Bootcamp" icon="🏆">
                        <CertificationsContent />
                    </MobileSection>
                    <MobileSection title="Languages" icon="🌐">
                        <LanguagesContent />
                    </MobileSection>
                    <MobileSection title="Contact" icon="✉️">
                        <ContactContent />
                    </MobileSection>
                </div>

                {startMenuOpen && (
                    <W95StartMenu items={START_MENU_ITEMS} onShutDown={handleShutDown} onClose={closeStartMenu} />
                )}

                <MobileTaskbar startMenuOpen={startMenuOpen} onStartClick={toggleStartMenu} />
            </div>
        </>
    );
}
