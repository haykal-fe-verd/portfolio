/** biome-ignore-all lint/a11y/noNoninteractiveElementToInteractiveRole: <touch gestures on Win95 section> */

"use client";

import { useRef, useState } from "react";

type Props = {
    title: string;
    icon: string;
    children: React.ReactNode;
};

export default function MobileSection({ title, icon, children }: Props) {
    const [open, setOpen] = useState(true);
    const toggle = (): void => setOpen((o) => !o);
    const touchStartY = useRef(0);

    return (
        <div
            className="w95-window"
            style={{ marginBottom: 8 }}
            onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY; }}
            onTouchEnd={(e) => {
                const delta = touchStartY.current - e.changedTouches[0].clientY;
                if (delta > 50)  setOpen(false);  // swipe up = close
                if (delta < -50) setOpen(true);   // swipe down = open
            }}>
            <div
                className="w95-titlebar"
                style={{ background: "var(--w95-navy)", cursor: "pointer", userSelect: "none" }}
                role="button"
                tabIndex={0}
                onClick={toggle}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggle(); }}>
                <div className="flex items-center gap-1 overflow-hidden">
                    <span style={{ fontSize: 14, flexShrink: 0 }}>{icon}</span>
                    <span className="w95-titlebar-title">{title}</span>
                </div>
                <button
                    type="button"
                    className="w95-titlebar-btn"
                    onClick={(e) => { e.stopPropagation(); toggle(); }}
                    style={{ fontFamily: "monospace" }}>
                    {open ? "▲" : "▼"}
                </button>
            </div>
            {open && <div style={{ padding: 10 }}>{children}</div>}
        </div>
    );
}
