import portfolio from "@/config/portfolio";

export default function ExperienceContent() {
    return (
        <div className="flex flex-col gap-3">
            {portfolio.experience.map((exp) => (
                <div key={exp.company}>
                    <div
                        className="w95-raised"
                        style={{ padding: "6px 8px", background: "var(--w95-gray)", marginBottom: 6 }}>
                        <div className="flex justify-between items-start gap-2 flex-wrap">
                            <div>
                                <p style={{ fontSize: 12, fontWeight: "bold" }}>{exp.role}</p>
                                <p style={{ fontSize: 11, color: "var(--w95-navy)", fontWeight: "bold" }}>
                                    {exp.company}
                                </p>
                            </div>
                            <div style={{ textAlign: "right", flexShrink: 0 }}>
                                <p style={{ fontSize: 10, fontStyle: "italic" }}>{exp.period}</p>
                                <p style={{ fontSize: 10, color: "var(--w95-gray-dark)" }}>{exp.location}</p>
                            </div>
                        </div>
                    </div>

                    <ul style={{ paddingLeft: 16, marginBottom: 8 }}>
                        {exp.responsibilities.map((r) => (
                            <li key={r} style={{ fontSize: 11, lineHeight: 1.6, marginBottom: 2 }}>
                                {r}
                            </li>
                        ))}
                    </ul>

                    {exp.projects.length > 0 && (
                        <div className="w95-groupbox" style={{ marginTop: 4 }}>
                            <span className="w95-groupbox-legend">Notable Projects</span>
                            <div className="flex flex-col gap-3">
                                {exp.projects.map((p) => (
                                    <div key={p.name}>
                                        <div className="flex justify-between items-baseline gap-2 flex-wrap">
                                            <p style={{ fontSize: 11, fontWeight: "bold" }}>{p.name}</p>
                                            <p style={{ fontSize: 10, fontStyle: "italic", color: "var(--w95-gray-dark)", flexShrink: 0 }}>
                                                {p.type}
                                            </p>
                                        </div>
                                        <p style={{ fontSize: 10, color: "var(--w95-gray-dark)", marginBottom: 4 }}>
                                            Stack: {p.stack}
                                        </p>
                                        <ul style={{ paddingLeft: 14 }}>
                                            {p.points.map((pt) => (
                                                <li key={pt} style={{ fontSize: 11, lineHeight: 1.6, marginBottom: 2 }}>
                                                    {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
