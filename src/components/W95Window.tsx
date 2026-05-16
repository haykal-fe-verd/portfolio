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
    onMaximize: () => void;
    onSizeChange?: (size: { width: number; height: number }) => void;
    isFocused: boolean;
    isMaximized: boolean;
    zIndex: number;
    width?: number;
    height?: number;
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
    onMaximize,
    onSizeChange,
    isFocused,
    isMaximized,
    zIndex,
    width = 420,
    height,
}: Props) {
    const posRef = useRef(position);
    // Direct ref to the window DOM node — used during drag to avoid ev.target lookups
    const windowRef = useRef<HTMLDivElement>(null);
    // Track current size for resize handle
    const sizeRef = useRef({ width: width ?? 420, height: height ?? 400 });

    // Sync refs when props change (e.g. restored from parent)
    useEffect(() => {
        posRef.current = position;
    }, [position]);

    useEffect(() => {
        sizeRef.current = { width: width ?? 420, height: height ?? 400 };
    }, [width, height]);

    const handleTitlebarMouseDown = (e: React.MouseEvent): void => {
        if ((e.target as HTMLElement).closest(".w95-titlebar-btn")) return;
        if (isMaximized) return;
        e.preventDefault();
        onFocus();

        const startX = e.clientX - posRef.current.x;
        const startY = e.clientY - posRef.current.y;

        const onMouseMove = (ev: MouseEvent): void => {
            const w = width ?? 420;
            // Clamp so at least 100px of window is always visible, and titlebar never above top
            const clampedX = Math.max(-(w - 100), Math.min(ev.clientX - startX, window.innerWidth - 100));
            const clampedY = Math.max(0, Math.min(ev.clientY - startY, window.innerHeight - 56));
            const newPos = { x: clampedX, y: clampedY };
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

    const handleResizeMouseDown = (e: React.MouseEvent): void => {
        if (isMaximized) return;
        e.preventDefault();
        e.stopPropagation();
        onFocus();

        const startX = e.clientX;
        const startY = e.clientY;
        // Read actual rendered dimensions from the DOM — more accurate than stale ref
        const startW = windowRef.current?.offsetWidth  ?? sizeRef.current.width;
        const startH = windowRef.current?.offsetHeight ?? sizeRef.current.height;

        const onMouseMove = (ev: MouseEvent): void => {
            const newW = Math.max(200, startW + (ev.clientX - startX));
            const newH = Math.max(120, startH + (ev.clientY - startY));
            sizeRef.current = { width: newW, height: newH };
            if (windowRef.current) {
                // Update both width AND height on the container so the resize is fully live
                windowRef.current.style.width  = `${newW}px`;
                windowRef.current.style.height = `${newH}px`;
                const content = windowRef.current.querySelector<HTMLElement>(".w95-content");
                if (content) {
                    // 28px titlebar + top/bottom borders (4px) + content padding (12px) ≈ 46px overhead
                    content.style.maxHeight = `${newH - 46}px`;
                    content.style.height    = `${newH - 46}px`;
                }
            }
        };

        const onMouseUp = (): void => {
            onSizeChange?.(sizeRef.current);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    const windowStyle = isMaximized
        ? { position: "fixed" as const, left: 0, top: 0, width: "100vw", height: "calc(100vh - 28px)", zIndex }
        : { left: position.x, top: position.y, width: width ?? 420, height: height, zIndex };

    const contentStyle = isMaximized
        ? { maxHeight: "calc(100vh - 46px)" }
        : height
            ? { maxHeight: `${height - 46}px` }
            : { maxHeight: "70vh" };

    return (
        // role="dialog" makes the window an interactive region, satisfying no-static-element-interactions
        // tabIndex={-1} keeps it programmatically focusable without entering the tab order
        <div
            ref={windowRef}
            className={`w95-window${isMaximized ? "" : " absolute"}`}
            style={windowStyle}
            onMouseDown={onFocus}
            role="dialog"
            aria-label={title}
            tabIndex={-1}>
            {/* Titlebar — role="toolbar" is an interactive composite role */}
            <div
                className="w95-titlebar"
                style={{
                    background: isFocused ? "var(--w95-navy)" : "var(--w95-gray-dark)",
                    cursor: isMaximized ? "default" : "move",
                }}
                onMouseDown={handleTitlebarMouseDown}
                onDoubleClick={(e) => {
                    if ((e.target as HTMLElement).closest(".w95-titlebar-btn")) return;
                    onMaximize();
                }}
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
                        onClick={(e) => { e.stopPropagation(); onMaximize(); }}>
                        {isMaximized ? "❐" : "□"}
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
            <div className="p-3 overflow-auto w95-content" style={contentStyle}>
                {children}
            </div>

            {/* Resize grip — bottom-right corner */}
            {!isMaximized && (
                <div
                    style={{ position: "absolute", bottom: 0, right: 0, width: 12, height: 12,
                             cursor: "nwse-resize", zIndex: 1 }}
                    role="separator"
                    aria-label="Resize window"
                    onMouseDown={handleResizeMouseDown}
                    onKeyDown={(e) => { if (e.key === "Enter") e.preventDefault(); }}
                    tabIndex={-1}
                />
            )}
        </div>
    );
}
