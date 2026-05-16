export default function RecycleBinContent() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "32px 16px",
                gap: 12,
                background: "var(--w95-white)",
                minHeight: 140,
            }}>
            <span style={{ fontSize: 48, lineHeight: 1 }}>🗑️</span>
            <p style={{ fontSize: 13, fontWeight: "bold", fontFamily: "var(--font-ui)" }}>
                Recycle Bin is empty
            </p>
            <p style={{ fontSize: 11, color: "var(--w95-gray-dark)", fontFamily: "var(--font-ui)" }}>
                (Your secrets are safe with us)
            </p>
        </div>
    );
}
