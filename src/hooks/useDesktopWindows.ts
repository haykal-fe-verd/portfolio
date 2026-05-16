"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { INITIAL_WINDOWS } from "@/lib/constants";
import type { WindowId, WindowState } from "@/lib/types";

export function useDesktopWindows() {
    // useRef instead of a module-level variable — safe for SSR and hot-reload
    const zCounterRef = useRef(10);

    const [windows, setWindows] = useState<WindowState[]>(INITIAL_WINDOWS);

    const maxZ = useMemo(() => Math.max(...windows.map((w) => w.zIndex)), [windows]);

    const openWindow = useCallback((id: WindowId): void => {
        zCounterRef.current++;
        setWindows((prev) =>
            prev.map((w) =>
                w.id === id ? { ...w, open: true, minimized: false, zIndex: zCounterRef.current } : w,
            ),
        );
    }, []);

    const closeWindow = useCallback((id: WindowId): void => {
        setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, open: false, maximized: false } : w)));
    }, []);

    const minimizeWindow = useCallback((id: WindowId): void => {
        setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
    }, []);

    const focusWindow = useCallback((id: WindowId): void => {
        zCounterRef.current++;
        setWindows((prev) =>
            prev.map((w) =>
                w.id === id ? { ...w, zIndex: zCounterRef.current, minimized: false } : w,
            ),
        );
    }, []);

    const maximizeWindow = useCallback((id: WindowId): void => {
        zCounterRef.current++;
        setWindows((prev) =>
            prev.map((w) =>
                w.id === id
                    ? { ...w, maximized: !w.maximized, zIndex: zCounterRef.current }
                    : w,
            ),
        );
    }, []);

    const updatePosition = useCallback((id: WindowId, pos: { x: number; y: number }): void => {
        setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, position: pos } : w)));
    }, []);

    const arrangeIcons = useCallback((): void => {
        setWindows((prev) => prev.map((w) => ({ ...w, position: { ...w.initialPosition } })));
    }, []);

    const handleTaskbarClick = useCallback(
        (id: WindowId): void => {
            const w = windows.find((w) => w.id === id);
            if (!w) return;
            if (w.minimized || !w.open) {
                focusWindow(id);
            } else {
                minimizeWindow(id);
            }
        },
        [windows, focusWindow, minimizeWindow],
    );

    const closeAll = useCallback((): void => {
        setWindows((prev) => prev.map((w) => ({ ...w, open: false, maximized: false })));
    }, []);

    return {
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
    };
}
