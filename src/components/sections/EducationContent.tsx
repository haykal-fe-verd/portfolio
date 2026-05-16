import portfolio from "@/config/portfolio";

export default function EducationContent() {
    return (
        <div className="flex flex-col gap-3">
            {portfolio.education.map((edu) => (
                <div key={edu.institution} className="w95-raised" style={{ padding: "8px 10px", background: "var(--w95-gray)" }}>
                    <div className="flex justify-between items-start gap-2 flex-wrap">
                        <p style={{ fontSize: 12, fontWeight: "bold" }}>{edu.institution}</p>
                        <p style={{ fontSize: 11, fontStyle: "italic", flexShrink: 0 }}>{edu.period}</p>
                    </div>
                    <div className="flex justify-between items-start gap-2 flex-wrap">
                        <p style={{ fontSize: 11, fontStyle: "italic", color: "var(--w95-gray-dark)" }}>{edu.degree}</p>
                        <p style={{ fontSize: 11, flexShrink: 0 }}>GPA: {edu.gpa}</p>
                    </div>
                    <div style={{ borderTop: "1px solid var(--w95-gray-dark)", borderBottom: "1px solid var(--w95-white)", margin: "6px 0" }} />
                    <p style={{ fontSize: 11, lineHeight: 1.6 }}>
                        <span style={{ fontStyle: "italic" }}>Final Project: </span>
                        {edu.finalProject}
                    </p>
                </div>
            ))}
        </div>
    );
}
