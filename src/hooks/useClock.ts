"use client";

import { useEffect, useState } from "react";

export function useClock(): string {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () =>
            setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}
