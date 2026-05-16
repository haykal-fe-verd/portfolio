/** biome-ignore-all lint/a11y/useSemanticElements: <custom Win95 BSOD overlay> */

"use client";

import { useEffect } from "react";
import { Z_INDEX } from "@/lib/constants";

type Props = { onDismiss: () => void };

export default function W95BSOD({ onDismiss }: Props) {
    useEffect(() => {
        const handler = (e: KeyboardEvent): void => {
            // Ignore Ctrl+Shift+B to prevent instant open+close on the same keydown event
            if (e.ctrlKey && e.shiftKey && e.key === "B") return;
            onDismiss();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [onDismiss]);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ zIndex: Z_INDEX.BSOD, background: "#0000AA" }}
            role="alertdialog"
            aria-label="Blue Screen of Death"
            aria-modal="true"
            tabIndex={0}
            onClick={onDismiss}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onDismiss(); }}>
            <div
                style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    color: "#fff",
                    maxWidth: 600,
                    padding: 32,
                    userSelect: "none",
                }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                role="document"
                tabIndex={-1}>
                <p style={{ fontSize: 16, fontWeight: "bold", marginBottom: 16 }}>Windows</p>
                <p style={{ marginBottom: 16, fontSize: 13, lineHeight: 1.6 }}>
                    A fatal exception 0E has occurred at 0028:C00EABCD in VXD PORTFOLIO(01) +
                    00000001. The current application will be terminated.
                </p>
                <p style={{ marginBottom: 8, fontSize: 13 }}>
                    * The developer, <strong>MUHAMMAD HAYKAL</strong>, pushed too many features
                    without testing.
                </p>
                <p style={{ marginBottom: 24, fontSize: 13 }}>
                    * If the problem persists, check his LinkedIn or just hire him.
                </p>
                <p style={{ fontSize: 12, opacity: 0.8 }}>
                    Press any key to continue_ <span className="w95-bsod-cursor">▌</span>
                </p>
            </div>
        </div>
    );
}
