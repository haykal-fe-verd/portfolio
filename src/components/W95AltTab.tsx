/** biome-ignore-all lint/a11y/useSemanticElements: <custom Win95 Alt+Tab switcher> */

"use client";

import { Z_INDEX } from "@/lib/constants";
import type { WindowId } from "@/lib/types";

type WindowInfo = { id: WindowId; title: string; icon?: string };

type Props = {
    windows: WindowInfo[];
    selectedIndex: number;
    onClose: () => void;
};

export default function W95AltTab({ windows, selectedIndex, onClose }: Props) {
    if (windows.length === 0) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ zIndex: Z_INDEX.ALTTAB, background: "rgba(0,0,0,0.4)" }}
            role="dialog"
            aria-label="Switch windows"
            aria-modal="true">
            <div className="w95-window" style={{ padding: 0, minWidth: 320 }}>
                <div className="w95-titlebar" style={{ background: "var(--w95-navy)", cursor: "default" }}>
                    <span className="w95-titlebar-title">Switch To...</span>
                </div>
                <div style={{ padding: 12, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                    {windows.map((w, i) => (
                        <div
                            key={w.id}
                            style={{
                                display: "flex", flexDirection: "column", alignItems: "center",
                                gap: 4, padding: "8px 10px", minWidth: 64, cursor: "pointer",
                                background: i === selectedIndex ? "var(--w95-navy)" : "transparent",
                                color: i === selectedIndex ? "var(--w95-white)" : "var(--w95-black)",
                                border: i === selectedIndex ? "1px dotted var(--w95-white)" : "1px solid transparent",
                            }}
                            role="button"
                            tabIndex={-1}
                            onClick={onClose}
                            onKeyDown={(e) => { if (e.key === "Enter") onClose(); }}>
                            <span style={{ fontSize: 28, lineHeight: 1 }}>{w.icon ?? "🪟"}</span>
                            <span style={{ fontSize: 11, textAlign: "center", maxWidth: 80,
                                           overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {w.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
