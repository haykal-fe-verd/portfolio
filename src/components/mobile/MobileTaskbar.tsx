"use client";

import { useClock } from "@/hooks/useClock";

type Props = {
    startMenuOpen: boolean;
    onStartClick: () => void;
};

export default function MobileTaskbar({ startMenuOpen, onStartClick }: Props) {
    const time = useClock();

    return (
        <div
            style={{
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 8px",
                background: "var(--w95-gray)",
                borderTop: "2px solid var(--w95-white)",
                boxShadow: "inset 0 1px 0 var(--w95-gray-light)",
                flexShrink: 0,
                fontFamily: "var(--font-ui)",
                fontSize: 11,
            }}>
            <button
                type="button"
                className="w95-start-btn"
                style={{
                    height: 20,
                    fontSize: 11,
                    borderColor: startMenuOpen
                        ? "var(--w95-gray-dark) var(--w95-white) var(--w95-white) var(--w95-gray-dark)"
                        : undefined,
                    boxShadow: startMenuOpen
                        ? "inset 1px 1px 0 var(--w95-gray-darker), inset -1px -1px 0 var(--w95-gray-light)"
                        : undefined,
                }}
                onClick={onStartClick}>
                <span style={{ fontSize: 12 }}>🪟</span>
                <span>Start</span>
            </button>
            <div className="w95-systray" style={{ height: 20, padding: "0 8px", fontSize: 11 }}>
                <span>🔊</span>
                <span>{time}</span>
            </div>
        </div>
    );
}
