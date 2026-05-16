import portfolio from "@/config/portfolio";

const SPECS = [
    { icon: "🖥️", label: "OS",        value: "Windows 95 (Portfolio Edition)" },
    { icon: "👤", label: "User",       value: portfolio.name },
    { icon: "📍", label: "Location",   value: portfolio.location },
    { icon: "⚡", label: "Processor",  value: `${portfolio.title} @ 3+ Years` },
    { icon: "🧠", label: "RAM",        value: "Unlimited Creativity" },
    { icon: "💾", label: "Disk",       value: "∞ GB Free" },
    { icon: "🔢", label: "Version",    value: `v${portfolio.version}` },
    { icon: "🛠️", label: "Built With", value: portfolio.builtWith.join(", ") },
];

const DRIVES = [
    { icon: "💿", letter: "C:\\", label: "Portfolio Drive",  size: "∞ GB" },
    { icon: "📀", letter: "D:\\", label: "Projects Drive",   size: `${portfolio.projects.length} projects` },
    { icon: "🖨️", letter: "E:\\", label: "Experience Drive", size: `${portfolio.experience.length} companies` },
];

export default function MyComputerContent() {
    return (
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 12 }}>
            {/* Drives */}
            <p style={{ fontWeight: "bold", marginBottom: 8, fontSize: 11, color: "var(--w95-gray-dark)" }}>
                STORAGE DEVICES
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 16 }}>
                {DRIVES.map((d) => (
                    <div
                        key={d.letter}
                        className="w95-raised"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 8px",
                            cursor: "default",
                        }}>
                        <span style={{ fontSize: 20 }}>{d.icon}</span>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontWeight: "bold" }}>{d.letter}</span>{" "}
                            <span style={{ color: "var(--w95-gray-dark)" }}>{d.label}</span>
                        </div>
                        <span style={{ color: "var(--w95-gray-dark)", fontSize: 11 }}>{d.size}</span>
                    </div>
                ))}
            </div>

            {/* Specs */}
            <p style={{ fontWeight: "bold", marginBottom: 8, fontSize: 11, color: "var(--w95-gray-dark)" }}>
                SYSTEM PROPERTIES
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {SPECS.map((s) => (
                    <div
                        key={s.label}
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                            padding: "4px 0",
                            borderBottom: "1px dotted var(--w95-gray-dark)",
                        }}>
                        <span style={{ fontSize: 14, width: 20, flexShrink: 0 }}>{s.icon}</span>
                        <span style={{ width: 70, flexShrink: 0, color: "var(--w95-gray-dark)" }}>{s.label}:</span>
                        <span style={{ fontWeight: "bold", wordBreak: "break-word" }}>{s.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
