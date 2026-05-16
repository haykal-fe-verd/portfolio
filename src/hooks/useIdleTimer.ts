"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns true when the user has been idle for `ms` milliseconds.
 * Resets on any mousemove, mousedown, keydown, touchstart, or scroll event.
 */
export function useIdleTimer(ms: number): boolean {
    const [idle, setIdle] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const reset = (): void => {
            setIdle(false);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setIdle(true), ms);
        };

        const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"] as const;
        events.forEach((ev) => window.addEventListener(ev, reset, { passive: true }));
        reset(); // start timer immediately

        return () => {
            events.forEach((ev) => window.removeEventListener(ev, reset));
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [ms]);

    return idle;
}
