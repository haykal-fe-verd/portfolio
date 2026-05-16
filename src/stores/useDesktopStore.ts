"use client";

import { useCallback, useState } from "react";
import type { WindowId } from "@/lib/types";

export function useDesktopStore() {
    const [bootComplete, setBootComplete] = useState(false);
    const [selected, setSelected] = useState<WindowId | null>(null);
    const [startMenuOpen, setStartMenuOpen] = useState(false);
    const [shutDownVisible, setShutDownVisible] = useState(false);
    const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
    const [propertiesOpen, setPropertiesOpen] = useState(false);

    const finishBoot      = useCallback((): void => setBootComplete(true), []);
    const toggleStartMenu = useCallback((): void => setStartMenuOpen((o) => !o), []);
    const closeStartMenu  = useCallback((): void => setStartMenuOpen(false), []);
    const openProperties  = useCallback((): void => setPropertiesOpen(true), []);
    const closeProperties = useCallback((): void => setPropertiesOpen(false), []);
    const closeContextMenu = useCallback((): void => setContextMenu(null), []);
    const triggerShutDown = useCallback((): void => setShutDownVisible(true), []);
    const cancelShutDown  = useCallback((): void => setShutDownVisible(false), []);

    const openContextMenu = useCallback((x: number, y: number): void => {
        setContextMenu({ x, y });
    }, []);

    const [bsodVisible, setBsodVisible] = useState(false);
    const showBsod = useCallback((): void => setBsodVisible(true), []);
    const hideBsod = useCallback((): void => setBsodVisible(false), []);

    return {
        bootComplete,
        finishBoot,
        selected,
        setSelected,
        startMenuOpen,
        toggleStartMenu,
        closeStartMenu,
        shutDownVisible,
        triggerShutDown,
        cancelShutDown,
        contextMenu,
        openContextMenu,
        closeContextMenu,
        propertiesOpen,
        openProperties,
        closeProperties,
        bsodVisible,
        showBsod,
        hideBsod,
    };
}
