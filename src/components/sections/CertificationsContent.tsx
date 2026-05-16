import portfolio from "@/config/portfolio";

export default function CertificationsContent() {
    return (
        <div className="w95-groupbox" style={{ marginTop: 0 }}>
            <span className="w95-groupbox-legend">Certification & Bootcamp</span>
            <ul style={{ paddingLeft: 16 }}>
                {portfolio.certifications.map((cert) => (
                    <li key={cert.name} style={{ fontSize: 11, lineHeight: 1.8 }}>
                        <span style={{ fontWeight: "bold" }}>{cert.name}</span>
                        {" — "}
                        <span style={{ fontStyle: "italic" }}>{cert.issuer}, {cert.year}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
