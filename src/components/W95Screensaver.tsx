"use client";

import { useEffect, useRef } from "react";
import { Z_INDEX } from "@/lib/constants";

type Particle = { x: number; y: number; vx: number; vy: number; size: number };

type Props = { onDismiss: () => void };

export default function W95Screensaver({ onDismiss }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = (): void => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Initialise particles with random positions and velocities
        particlesRef.current = Array.from({ length: 12 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            size: 24 + Math.random() * 24,
        }));

        const animate = (): void => {
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            for (const p of particlesRef.current) {
                p.x += p.vx;
                p.y += p.vy;
                // Bounce off walls
                if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.font = `${p.size}px serif`;
                ctx.fillText("🪟", p.x, p.y);
            }

            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div
            className="fixed inset-0"
            style={{ zIndex: Z_INDEX.SCREENSAVER, cursor: "none" }}
            role="button"
            tabIndex={0}
            aria-label="Screensaver — click or press a key to dismiss"
            onClick={onDismiss}
            onKeyDown={() => onDismiss()}>
            {/* canvas.width/height set in px (not CSS) to avoid blurry rendering */}
            <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
        </div>
    );
}
