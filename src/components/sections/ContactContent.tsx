import portfolio from "@/config/portfolio";

export default function ContactContent() {
    return (
        <div className="flex flex-col gap-1">
            <p style={{ fontSize: 11, marginBottom: 8 }}>Feel free to reach out through any of the channels below.</p>
            {portfolio.contact.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w95-raised flex items-center gap-3"
                    style={{
                        padding: "6px 10px",
                        background: "var(--w95-gray)",
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        marginBottom: 4,
                    }}>
                    <span style={{ fontSize: 18, lineHeight: 1 }}>{link.icon}</span>
                    <div>
                        <div style={{ fontSize: 11, fontWeight: "bold" }}>{link.label}</div>
                        <div style={{ fontSize: 11, color: "#0000ff", textDecoration: "underline" }}>{link.value}</div>
                    </div>
                </a>
            ))}
        </div>
    );
}
