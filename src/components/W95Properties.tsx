/** biome-ignore-all lint/a11y/useSemanticElements: <because it's a custom focusable element> */

"use client";

import portfolio from "@/config/portfolio";

type Props = { onClose: () => void };

export default function W95Properties({ onClose }: Props) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ zIndex: 99998, background: "rgba(0,0,0,0.15)" }}
            role="button"
            tabIndex={0}
            aria-label="Close Properties"
            onClick={onClose}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " " || e.key === "Escape") onClose(); }}
        >
            <div
                className="w95-window"
                style={{ width: 320 }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                role="dialog"
                aria-label="Portfolio Properties"
                tabIndex={-1}
            >
                {/* Titlebar */}
                <div className="w95-titlebar" style={{ background: "var(--w95-navy)", cursor: "default" }}>
                    <div className="flex items-center gap-1">
                        <span style={{ fontSize: 13 }}>🖥️</span>
                        <span className="w95-titlebar-title">Portfolio Properties</span>
                    </div>
                    <button type="button" className="w95-titlebar-btn" onClick={onClose}>✕</button>
                </div>

                <div style={{ padding: 16 }}>
                    {/* Icon + name */}
                    <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                        <span style={{ fontSize: 36 }}>🖥️</span>
                        <div>
                            <p style={{ fontSize: 13, fontWeight: "bold" }}>{portfolio.name}</p>
                            <p style={{ fontSize: 11, color: "var(--w95-gray-dark)" }}>{portfolio.title}</p>
                        </div>
                    </div>

                    {/* Separator */}
                    <div style={{ borderTop: "1px solid var(--w95-gray-dark)", borderBottom: "1px solid var(--w95-white)", margin: "8px 0" }} />

                    {/* Info rows */}
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                        <tbody>
                            {[
                                { label: "Version", value: `v${portfolio.version}` },
                                { label: "Location", value: portfolio.location },
                                { label: "Built with", value: portfolio.builtWith.join(", ") },
                                { label: "Source", value: portfolio.githubRepo.replace("https://", "") },
                            ].map(({ label, value }) => (
                                <tr key={label}>
                                    <td style={{ padding: "3px 0", color: "var(--w95-gray-dark)", width: 80, verticalAlign: "top" }}>
                                        {label}:
                                    </td>
                                    <td style={{ padding: "3px 0", fontWeight: "bold", wordBreak: "break-all" }}>
                                        {value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Separator */}
                    <div style={{ borderTop: "1px solid var(--w95-gray-dark)", borderBottom: "1px solid var(--w95-white)", margin: "10px 0" }} />

                    {/* OK button */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="w95-btn w95-btn-default"
                            style={{ fontSize: 11, minWidth: 72 }}
                            onClick={onClose}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
