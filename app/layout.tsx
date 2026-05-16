import type { Metadata } from "next";
import "@/styles/globals.css";
import portfolio from "@/config/portfolio";

const BASE_URL = "https://haykal.dev";
const FULL_NAME = portfolio.name; // "MUHAMMAD HAYKAL"
const TITLE = `${FULL_NAME} — ${portfolio.title}`;
const DESCRIPTION = `${portfolio.title} with ${portfolio.yearsOfExperience} specializing in React.js, Next.js, and TypeScript. Based in ${portfolio.location}. ${portfolio.bio.slice(0, 120)}…`;
const KEYWORDS = [
    portfolio.name,
    portfolio.title,
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    portfolio.location,
    "Banda Aceh",
    "Indonesia",
    "Software Engineer",
    "UI Developer",
].join(", ");

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: {
        default: TITLE,
        template: `%s | ${FULL_NAME}`,
    },
    description: DESCRIPTION,
    keywords: KEYWORDS,
    authors: [{ name: FULL_NAME, url: BASE_URL }],
    creator: FULL_NAME,
    publisher: FULL_NAME,

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: BASE_URL,
        siteName: `${FULL_NAME} Portfolio`,
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: "/images/photo.jpg",
                width: 1200,
                height: 630,
                alt: `${FULL_NAME} — ${portfolio.title}`,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/images/photo.jpg"],
        creator: "@kidzeroll",
    },

    alternates: {
        canonical: BASE_URL,
    },

    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full overflow-hidden md:overflow-hidden">{children}</body>
        </html>
    );
}
