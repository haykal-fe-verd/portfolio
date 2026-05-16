"use client";

import { useClock } from "@/hooks/useClock";
import type { WindowId } from "@/lib/types";

type WindowInfo = {
    id: WindowId;
    title: string;
    icon?: string;
    open: boolean;
    minimized: boolean;
    isFocused: boolean;
};

type Props = {
    windows: WindowInfo[];
    onWindowClick: (id: WindowId) => void;
    onStartClick: () => void;
    startMenuOpen: boolean;
};

export default function W95Taskbar({ windows, onWindowClick, onStartClick, startMenuOpen }: Props) {
    const time = useClock();

    const openWindows = windows.filter((w) => w.open);

    return (
        // role="toolbar" is an interactive composite role — satisfies no-static-element-interactions
        <div
            className="w95-taskbar"
            role="toolbar"
            aria-label="Taskbar"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
        >
            {/* Start button */}
            <button
                type="button"
                className="w95-start-btn"
                style={{
                    gap: 4,
                    borderColor: startMenuOpen
                        ? "var(--w95-gray-dark) var(--w95-white) var(--w95-white) var(--w95-gray-dark)"
                        : undefined,
                    boxShadow: startMenuOpen
                        ? "inset 1px 1px 0 var(--w95-gray-darker), inset -1px -1px 0 var(--w95-gray-light)"
                        : undefined,
                }}
                onClick={onStartClick}>
                <span style={{ fontSize: 13 }}>🪟</span>
                <span>Start</span>
            </button>

            {/* Separator */}
            <div
                style={{
                    width: 2,
                    alignSelf: "stretch",
                    margin: "2px 4px",
                    borderLeft: "1px solid var(--w95-gray-dark)",
                    borderRight: "1px solid var(--w95-white)",
                }}
            />

            {/* Open window buttons */}
            <div className="flex-1 flex gap-1 overflow-hidden">
                {openWindows.map((w) => (
                    <button
                        type="button"
                        key={w.id}
                        onClick={() => onWindowClick(w.id)}
                        style={{
                            height: 22,
                            maxWidth: 160,
                            padding: "0 8px",
                            fontSize: 11,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            fontFamily: "var(--font-ui)",
                            color: "var(--w95-black)",
                            background: w.isFocused && !w.minimized ? "var(--w95-gray-light)" : "var(--w95-gray)",
                            borderStyle: "solid",
                            borderWidth: 2,
                            borderColor:
                                w.isFocused && !w.minimized
                                    ? "var(--w95-gray-dark) var(--w95-white) var(--w95-white) var(--w95-gray-dark)"
                                    : "var(--w95-white) var(--w95-gray-dark) var(--w95-gray-dark) var(--w95-white)",
                            boxShadow:
                                w.isFocused && !w.minimized
                                    ? "inset 1px 1px 0 var(--w95-gray-darker), inset -1px -1px 0 var(--w95-gray-light)"
                                    : "inset 1px 1px 0 var(--w95-gray-light), inset -1px -1px 0 var(--w95-gray-darker)",
                            cursor: "pointer",
                            userSelect: "none",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            minWidth: 0,
                        }}>
                        {w.icon && <span style={{ flexShrink: 0 }}>{w.icon}</span>}
                        <span
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}>
                            {w.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Systray */}
            <div className="w95-systray" style={{ height: 22, padding: "0 8px", fontSize: 11 }}>
                <span>🔊</span>
                <span>{time}</span>
            </div>
        </div>
    );
}
