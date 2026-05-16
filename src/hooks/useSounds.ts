"use client";

import { useCallback, useRef } from "react";

type SoundName = "startup" | "open" | "close" | "minimize";

const SOUND_FILES: Record<SoundName, string> = {
    startup:  "/sounds/startup.wav",
    open:     "/sounds/open.wav",
    close:    "/sounds/close.wav",
    minimize: "/sounds/minimize.wav",
};

export function useSounds() {
    // Cache Audio instances so we don't re-instantiate on every play call
    const cache = useRef<Partial<Record<SoundName, HTMLAudioElement>>>({});

    const play = useCallback((name: SoundName): void => {
        try {
            if (!cache.current[name]) {
                cache.current[name] = new Audio(SOUND_FILES[name]);
            }
            const audio = cache.current[name];
            if (!audio) return;
            // Rewind so rapid repeated actions replay from the start
            audio.currentTime = 0;
            audio.play().catch(() => {
                // Silently swallow autoplay policy rejections
            });
        } catch {
            // Silently swallow construction errors (missing file, etc.)
        }
    }, []);

    return { play };
}
