"use client";

import { useEffect } from "react";
import { Z_INDEX } from "@/lib/constants";

type Props = { onComplete: () => void };

export default function W95BootScreen({ onComplete }: Props) {
    useEffect(() => {
        const id = setTimeout(onComplete, 3000);
        return () => clearTimeout(id);
    }, [onComplete]);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ zIndex: Z_INDEX.BOOT, background: "#000" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, width: 280 }}>
                {/* Logo area */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 48, lineHeight: 1 }}>🪟</span>
                    <div>
                        <p style={{
                            fontFamily: "var(--font-ui)",
                            fontSize: 22,
                            fontWeight: "bold",
                            color: "#fff",
                            letterSpacing: 1,
                            lineHeight: 1.2,
                        }}>
                            Microsoft
                        </p>
                        <p style={{
                            fontFamily: "var(--font-ui)",
                            fontSize: 22,
                            color: "#fff",
                            letterSpacing: 1,
                            lineHeight: 1.2,
                        }}>
                            Windows<span style={{ fontWeight: "bold" }}> 95</span>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ width: "100%", height: 1, background: "#444" }} />

                {/* Progress bar */}
                <div style={{ width: "100%" }}>
                    <div className="w95-progress" style={{ width: "100%" }}>
                        <div className="w95-boot-progress-fill" />
                    </div>
                    <p style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 11,
                        color: "#888",
                        marginTop: 8,
                        textAlign: "center",
                    }}>
                        Starting Windows...
                    </p>
                </div>
            </div>
        </div>
    );
}
