import portfolio from "@/config/portfolio";

export default function ProjectsContent() {
    return (
        <div className="flex flex-col gap-3">
            {portfolio.projects.map((p) => (
                <div key={p.name} className="w95-raised" style={{ padding: "8px 10px", background: "var(--w95-gray)" }}>
                    <div className="flex justify-between items-start gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span style={{ fontSize: 11, fontWeight: "bold" }}>📁 {p.name}</span>
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontSize: 10, color: "var(--w95-navy)", textDecoration: "underline", fontFamily: "monospace" }}
                                onClick={(e) => e.stopPropagation()}>
                                GitHub ↗
                            </a>
                        </div>
                        <span style={{ fontSize: 10, fontStyle: "italic", color: "var(--w95-gray-dark)", flexShrink: 0 }}>
                            {p.type}
                        </span>
                    </div>
                    <p style={{ fontSize: 10, fontStyle: "italic", color: "var(--w95-gray-dark)", margin: "3px 0" }}>
                        Stack: {p.stack}
                    </p>
                    <p style={{ fontSize: 11, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
            ))}
        </div>
    );
}
