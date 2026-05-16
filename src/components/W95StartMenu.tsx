/** biome-ignore-all lint/a11y/useSemanticElements: <because it's a custom focusable element> */

"use client";

import { Z_INDEX } from "@/lib/constants";

type MenuItem = {
    icon: string;
    label: string;
    onClick: () => void;
};

type Props = {
    items: MenuItem[];
    onShutDown: () => void;
    onBsod: () => void;
    onClose: () => void;
};

export default function W95StartMenu({ items, onShutDown, onBsod, onClose }: Props) {
    return (
        <>
            {/* Backdrop — klik di luar untuk tutup */}
            <div
                className="fixed inset-0"
                style={{ zIndex: Z_INDEX.BACKDROP }}
                role="button"
                tabIndex={0}
                aria-label="Close Start Menu"
                onClick={onClose}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " " || e.key === "Escape") onClose(); }}
            />

            {/* Menu */}
            <div
                className="fixed"
                style={{
                    bottom: 28,
                    left: 0,
                    zIndex: Z_INDEX.MENU,
                    display: "flex",
                    background: "var(--w95-gray)",
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: "var(--w95-white) var(--w95-gray-dark) var(--w95-gray-dark) var(--w95-white)",
                    boxShadow: "inset 1px 1px 0 var(--w95-gray-light), inset -1px -1px 0 var(--w95-gray-darker), 2px 0 4px rgba(0,0,0,0.3)",
                }}>
                {/* Banner vertikal kiri */}
                <div
                    style={{
                        width: 24,
                        background: "linear-gradient(to top, #000080, #1084d0)",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        paddingBottom: 8,
                        flexShrink: 0,
                    }}>
                    <span
                        style={{
                            color: "rgba(255,255,255,0.15)",
                            fontSize: 13,
                            fontWeight: "bold",
                            fontFamily: "var(--font-ui)",
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                            transform: "rotate(180deg)",
                            letterSpacing: 1,
                            userSelect: "none",
                            lineHeight: 1,
                        }}>
                        <span style={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>Windows</span>
                        <span style={{ color: "white", fontStyle: "normal" }}> 95</span>
                    </span>
                </div>

                {/* Items */}
                <div style={{ minWidth: 180, padding: "2px 0" }}>
                    {items.map((item) => (
                        <button
                            type="button"
                            key={item.label}
                            className="w95-menu-item"
                            style={{ gap: 10, padding: "5px 12px 5px 8px" }}
                            onClick={() => { item.onClick(); onClose(); }}>
                            <span style={{ fontSize: 20, lineHeight: 1, width: 24, textAlign: "center" }}>
                                {item.icon}
                            </span>
                            <span style={{ fontWeight: "bold" }}>{item.label}</span>
                        </button>
                    ))}

                    {/* Separator */}
                    <div className="w95-menu-separator" />

                    {/* Shut Down */}
                    <button
                        type="button"
                        className="w95-menu-item"
                        style={{ gap: 10, padding: "5px 12px 5px 8px" }}
                        onClick={() => { onShutDown(); onClose(); }}>
                        <span style={{ fontSize: 20, lineHeight: 1, width: 24, textAlign: "center" }}>🔴</span>
                        <span>Shut Down...</span>
                    </button>

                    {/* Separator + BSOD Easter Egg */}
                    <div className="w95-menu-separator" />
                    <button
                        type="button"
                        className="w95-menu-item"
                        style={{ gap: 10, padding: "5px 12px 5px 8px", opacity: 0.7 }}
                        onClick={() => { onBsod(); onClose(); }}>
                        <span style={{ fontSize: 20, lineHeight: 1, width: 24, textAlign: "center" }}>💀</span>
                        <span>Panic...</span>
                    </button>
                </div>
            </div>
        </>
    );
}
