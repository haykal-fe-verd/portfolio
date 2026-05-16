import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                // Force PDF downloads instead of browser inline display
                source: "/pdf/:path*",
                headers: [
                    { key: "Content-Disposition", value: "attachment" },
                    { key: "Content-Type",        value: "application/pdf" },
                    { key: "Cache-Control",        value: "public, max-age=86400" },
                ],
            },
            {
                // Cache static assets aggressively
                source: "/images/:path*",
                headers: [
                    { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
                ],
            },
        ];
    },
};

export default nextConfig;
