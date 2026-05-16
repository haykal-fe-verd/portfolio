/** biome-ignore-all lint/a11y/noNoninteractiveTabindex: <because it's a custom focusable element> */

"use client";

import { useEffect, useRef } from "react";

type Props = {
    title: string;
    icon?: string;
    children: React.ReactNode;
    position: { x: number; y: number };
    onPositionChange: (pos: { x: number; y: number }) => void;
    onClose: () => void;
    onFocus: () => void;
    onMinimize: () => void;
    isFocused: boolean;
    zIndex: number;
    width?: number;
};

export default function W95Window({
    title,
    icon,
    children,
    position,
    onPositionChange,
    onClose,
    onFocus,
    onMinimize,
    isFocused,
    zIndex,
    width = 420,
}: Props) {
    const posRef = useRef(position);
    // Direct ref to the window DOM node — used during drag to avoid ev.target lookups
    const windowRef = useRef<HTMLDivElement>(null);

    // Sync ref when position prop changes (e.g. restored from parent)
    useEffect(() => {
        posRef.current = position;
    }, [position]);

    const handleTitlebarMouseDown = (e: React.MouseEvent): void => {
        if ((e.target as HTMLElement).closest(".w95-titlebar-btn")) return;
        e.preventDefault();
        onFocus();

        const startX = e.clientX - posRef.current.x;
        const startY = e.clientY - posRef.current.y;

        const onMouseMove = (ev: MouseEvent): void => {
            const newPos = { x: ev.clientX - startX, y: ev.clientY - startY };
            posRef.current = newPos;
            // Update DOM directly for smooth drag — no React re-render needed
            if (windowRef.current) {
                windowRef.current.style.left = `${newPos.x}px`;
                windowRef.current.style.top = `${newPos.y}px`;
            }
        };

        const onMouseUp = (): void => {
            // Persist final position to parent on drag end
            onPositionChange(posRef.current);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    return (
        // role="dialog" makes the window an interactive region, satisfying no-static-element-interactions
        // tabIndex={-1} keeps it programmatically focusable without entering the tab order
        <div
            ref={windowRef}
            className="w95-window absolute"
            style={{ left: position.x, top: position.y, width, zIndex }}
            onMouseDown={onFocus}
            role="dialog"
            aria-label={title}
            tabIndex={-1}>
            {/* Titlebar — role="toolbar" is an interactive composite role */}
            <div
                className="w95-titlebar"
                style={{
                    background: isFocused ? "var(--w95-navy)" : "var(--w95-gray-dark)",
                    cursor: "move",
                }}
                onMouseDown={handleTitlebarMouseDown}
                onKeyDown={(e) => { if (e.key === "Enter") onFocus(); }}
                role="toolbar"
                aria-label={`${title} title bar`}
                tabIndex={0}>
                <div className="flex items-center gap-1 overflow-hidden min-w-0">
                    {icon && <span style={{ fontSize: 14, lineHeight: 1, flexShrink: 0 }}>{icon}</span>}
                    <span className="w95-titlebar-title">{title}</span>
                </div>
                <div className="flex shrink-0 ml-1">
                    <button
                        type="button"
                        className="w95-titlebar-btn"
                        onClick={(e) => { e.stopPropagation(); onMinimize(); }}>
                        _
                    </button>
                    <button
                        type="button"
                        className="w95-titlebar-btn"
                        onClick={(e) => e.stopPropagation()}>
                        □
                    </button>
                    <button
                        type="button"
                        className="w95-titlebar-btn"
                        onClick={(e) => { e.stopPropagation(); onClose(); }}>
                        ✕
                    </button>
                </div>
            </div>

            {/* Content area */}
            <div className="p-3 overflow-auto" style={{ maxHeight: "70vh" }}>
                {children}
            </div>
        </div>
    );
}
