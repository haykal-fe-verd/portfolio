import portfolio from "@/config/portfolio";

export default function LanguagesContent() {
    return (
        <div className="w95-groupbox" style={{ marginTop: 0 }}>
            <span className="w95-groupbox-legend">Languages</span>
            <div className="flex flex-col gap-1">
                {portfolio.languages.map((lang) => (
                    <p key={lang.name} style={{ fontSize: 11, lineHeight: 1.8 }}>
                        <span style={{ fontWeight: "bold" }}>{lang.name}</span>
                        {" — "}
                        {lang.level}
                    </p>
                ))}
            </div>
        </div>
    );
}
