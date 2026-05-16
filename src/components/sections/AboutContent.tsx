import Image from "next/image";
import portfolio from "@/config/portfolio";
import { isMediaPath } from "@/lib/utils";

export default function AboutContent() {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1 shrink-0">
                <div
                    className="w95-sunken flex items-center justify-center"
                    style={{ width: 96, height: 96, fontSize: 48, overflow: "hidden" }}>
                    {isMediaPath(portfolio.avatar) ? (
                        <Image
                            src={portfolio.avatar}
                            alt={portfolio.name}
                            width={100}
                            height={100}
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                        />
                    ) : (
                        portfolio.avatar
                    )}
                </div>
                {portfolio.badge && (
                    <div style={{
                        fontSize: 9,
                        fontWeight: "bold",
                        padding: "2px 6px",
                        background: "var(--w95-navy)",
                        color: "var(--w95-white)",
                        border: "1px solid var(--w95-black)",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.3px",
                        width: "100%",
                        textAlign: "center",
                    }}>
                        ● {portfolio.badge}
                    </div>
                )}
                {portfolio.location && (
                    <div style={{ fontSize: 9, padding: "2px 4px", color: "var(--w95-black)", whiteSpace: "nowrap", textAlign: "center" }}>
                        📍 {portfolio.location}
                    </div>
                )}
                {portfolio.yearsOfExperience && (
                    <div style={{ fontSize: 9, padding: "2px 4px", color: "var(--w95-black)", whiteSpace: "nowrap", textAlign: "center" }}>
                        ⏱ {portfolio.yearsOfExperience}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2 min-w-0">
                <div>
                    <p className="font-bold" style={{ fontSize: 13 }}>{portfolio.name}</p>
                    <p style={{ fontSize: 11, color: "var(--w95-gray-dark)" }}>{portfolio.title}</p>
                </div>

                <div className="w95-groupbox" style={{ marginTop: 0 }}>
                    <span className="w95-groupbox-legend">Bio</span>
                    <p style={{ fontSize: 11, lineHeight: 1.6 }}>{portfolio.bio}</p>
                </div>

                <div className="flex gap-2 mt-1 flex-wrap">
                    <a className="w95-btn" style={{ fontSize: 11, textDecoration: "none" }} href={portfolio.cvUrl}>
                        📄 Download CV
                    </a>
                    <a className="w95-btn" style={{ fontSize: 11, textDecoration: "none" }} href={portfolio.contact[0]?.href}>
                        ✉️ Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
}
