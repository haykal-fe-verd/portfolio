import portfolio from "@/config/portfolio";

export default function SkillsContent() {
    return (
        <div className="flex flex-col gap-3">
            {portfolio.skills.map((group) => (
                <div key={group.category} className="w95-groupbox" style={{ marginTop: 0 }}>
                    <span className="w95-groupbox-legend">{group.category}</span>
                    <div className="flex flex-wrap gap-1">
                        {group.items.map((skill) => (
                            <div
                                key={skill}
                                className="w95-raised"
                                style={{ fontSize: 11, padding: "1px 8px", background: "var(--w95-gray)" }}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
