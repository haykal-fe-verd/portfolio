"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
    "It looks like you're viewing a portfolio! Would you like help hiring this developer?",
    "Tip: You can drag windows around and resize them!",
    "Did you know? Press Ctrl+Shift+B for a surprise…",
    "Psst — check out My Projects for some cool stuff!",
];

type Props = { onDismiss: () => void };

export default function W95Clippy({ onDismiss }: Props) {
    const [msg] = useState(() => MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);

    // Auto-dismiss after 8 seconds
    useEffect(() => {
        const t = setTimeout(onDismiss, 8000);
        return () => clearTimeout(t);
    }, [onDismiss]);

    return (
        <div
            style={{ position: "fixed", bottom: 48, right: 16, zIndex: 10000,
                     display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}
            role="status"
            aria-live="polite">
            {/* Speech bubble */}
            <div className="w95-window" style={{ maxWidth: 240, padding: 0 }}>
                <div style={{ padding: "8px 10px", position: "relative" }}>
                    <button
                        type="button"
                        style={{ position: "absolute", top: 4, right: 4, background: "none", border: "none",
                                 cursor: "pointer", fontSize: 10, lineHeight: 1, color: "var(--w95-gray-dark)" }}
                        onClick={onDismiss}
                        aria-label="Dismiss Clippy">
                        ✕
                    </button>
                    <p style={{ fontSize: 11, lineHeight: 1.5, paddingRight: 14 }}>{msg}</p>
                </div>
            </div>
            {/* Clippy */}
            <span style={{ fontSize: 36, lineHeight: 1, filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.4))" }}
                  aria-hidden="true">
                📎
            </span>
        </div>
    );
}
