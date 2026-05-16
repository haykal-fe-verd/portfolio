const portfolio = {
    /* ── Identitas ── */
    name: "MUHAMMAD HAYKAL",
    title: "Frontend Developer",
    bio: "Frontend Developer with 3+ years of professional experience designing and delivering scalable, high-performance web applications. Specializes in React.js, TypeScript, and Next.js with a strong foundation in component architecture, state management, and RESTful API integration. Proven ability to translate UI/UX designs into responsive, pixel-accurate interfaces and optimize rendering performance on data-heavy applications. Collaborative team player experienced in Agile/Scrum environments with a consistent focus on code quality, reusability, and maintainable design systems.",
    avatar: "/images/photo.jpg",
    badge: "Open to Work", // ganti dengan "Freelance", "Hired 🎉", atau null untuk sembunyikan
    location: "Banda Aceh, Indonesia",
    yearsOfExperience: "3+ Years Experience",

    /* ── CV ── */
    cvUrl: "/pdf/cv.pdf",

    /* ── Meta ── */
    githubRepo: "https://github.com/haykal-fe-verd/portfolio",
    builtWith: ["Next.js 16", "TypeScript", "Tailwind CSS", "React 19"],
    version: "1.0.0",

    /* ── Skills ── */
    skills: [
        {
            category: "Languages",
            items: ["JavaScript (ES6+)", "TypeScript", "PHP", "HTML5", "CSS3"],
        },
        {
            category: "Frameworks & Libraries",
            items: [
                "React.js",
                "Next.js",
                "Inertia.js",
                "Vite",
                "Tailwind CSS",
                "Shadcn UI",
                "Radix UI",
                "Better Auth",
            ],
        },
        {
            category: "State & Data",
            items: [
                "Zustand",
                "TanStack Query",
                "TanStack Table",
                "TanStack Router",
                "TanStack Form",
                "React Hook Form",
                "Zod",
                "Axios",
            ],
        },
        {
            category: "Backend (Familiar)",
            items: ["Node.js", "Nest.js", "Express.js", "Laravel", "REST API", "Prisma", "PostgreSQL", "MySQL"],
        },
        {
            category: "Tools & Workflow",
            items: ["Git", "GitHub", "GitLab", "Vercel", "Agile/Scrum", "Code Review", "Figma", "Postman", "Docker"],
        },
        {
            category: "Integrations",
            items: ["PDDIKTI Neofeeder API", "Maja", "Doku", "Midtrans", "Pusher", "Vercel AI SDK"],
        },
    ],

    /* ── Experience ── */
    experience: [
        {
            role: "Frontend Developer",
            company: "PT. Solusi Cerdas Berkualitas",
            location: "Banda Aceh, Indonesia",
            period: "February 2023 – Present",
            responsibilities: [
                "Delivered 4+ enterprise web applications using React.js, TypeScript, and Tailwind CSS, translating UI/UX designs into pixel-accurate, responsive interfaces.",
                "Built a reusable component library of 50+ components and a standardized styling system, ensuring UI consistency across 4+ internal products.",
                "Integrated 100+ RESTful API endpoints with the backend team, covering authentication flows, data validation, and structured error handling.",
                "Managed application state using Zustand and Context API, optimizing data flow for complex multi-module applications.",
                "Improved performance through code splitting, lazy loading, and memoization, reducing initial load time by up to 35% on data-heavy pages.",
                "Contributed to internal component documentation and coding standards, reducing onboarding time for new developers; participated in Agile/Scrum ceremonies across 2-week sprint cycles.",
            ],
            projects: [
                {
                    name: "University Academic Information System",
                    type: "Team Project",
                    stack: "Next.js, TypeScript, Zustand, TanStack (Query, Table, Form), Zod, Axios, Tailwind CSS, Shadcn UI",
                    points: [
                        "Built core academic modules (course registration, grading, scheduling) integrated with PDDIKTI via Neofeeder API, serving 1,000+ active users.",
                        "Implemented role-based access control (RBAC) for 3 user types: admin, lecturer, and student.",
                        "Optimized table rendering on datasets exceeding 1,000 rows, reducing render time by ~40% through virtualization and pagination.",
                    ],
                },
                {
                    name: "Financial Information System",
                    type: "Team Project",
                    stack: "React.js, TypeScript, Vite, Zustand, React Hook Form, Zod, Tailwind CSS, Shadcn UI",
                    points: [
                        "Developed transaction, reporting, and dashboard modules with multi-gateway payment integration (Maja, Doku), processing high-volume financial data.",
                        "Applied strict schema validation with Zod, achieving 100% input accuracy across financial forms.",
                        "Extracted 20+ reusable components across modules, reducing code duplication by∼30%.",
                    ],
                },
                {
                    name: "Asset Management System",
                    type: "Team Project",
                    stack: "React.js, TypeScript, Vite, Zustand, React Hook Form, Zod, Tailwind CSS, Shadcn UI",
                    points: [
                        "Implemented asset registration, transfer, and maintenance modules with real-time tracking across 5,000+ asset records.",
                        "Added dynamic search and filtering with Excel and PDF export, reducing manual reporting time for operations staff.",
                        "Applied lazy loading and code splitting, improving initial page load speed by∼25%.",
                    ],
                },
                {
                    name: "Corporate Landing Page",
                    type: "Solo Project",
                    stack: "Next.js, TypeScript, Tailwind CSS",
                    points: [
                        "Delivered full development cycle from UI/UX implementation to production deployment on Company’s infrastructure.",
                        "Integrated contact form with email notification service and implemented scroll-based animations.",
                        "Achieved Lighthouse performance score of 98/100 through image optimization, lazy loading, and asset minification.",
                    ],
                },
            ],
        },
    ],

    /* ── Projects ── */
    projects: [
        {
            name: "Reseply — AI-Powered Recipe Sharing Platform",
            type: "Solo Project",
            stack: "Next.js, TypeScript, Tailwind CSS, Shadcn UI, Better Auth, Vercel AI SDK, TanStack (Query, Form), Prisma, PostgreSQL",
            desc: "A full-stack Indonesian recipe sharing platform featuring a Virtual Chef AI assistant (Vercel AI SDK + OpenRouter) for personalized cooking recommendations, advanced search and filtering by category, ingredient, and difficulty level, a favorites system, and dark/light mode. Built with Better Auth, Prisma, and PostgreSQL with fully responsive design.",
            github: "https://github.com/haykal-fe-verd/reseply",
            url: "#",
        },
        {
            name: "SPK Tanaman — Recommendation System for Plant Selection",
            type: "Solo Project",
            stack: "Laravel, React, Inertia.js, TypeScript, Tailwind CSS, Shadcn UI, MySQL",
            desc: "A web-based Decision Support System (DSS) for plant selection recommendations, implementing the AHP (Analytic Hierarchy Process) method for criteria weighting and TOPSIS (Technique for Order Preference by Similarity to Ideal Solution) for alternative ranking.",
            github: "https://github.com/haykal-fe-verd/spk-tanaman",
            url: "#",
        },
        {
            name: "GIS TPU — WebGIS for Cemetery Mapping and Management",
            type: "Solo Project",
            stack: "Leaflet, Laravel, React, Inertia.js, TypeScript, Tailwind CSS, Shadcn UI, MySQL",
            desc: "A web-based Geographic Information System (WebGIS) for cemetery (Tempat Pemakaman Umum) mapping and management, featuring an interactive map powered by Leaflet.js for visualizing burial plot locations and spatial data. ",
            github: "https://github.com/haykal-fe-verd/webgis-tpu",
            url: "#",
        },
        {
            name: "Indekos — Boarding House Finder & Booking System",
            type: "Solo Project",
            stack: "Laravel, React, Inertia.js, Tailwind CSS, MySQL, Midtrans",
            desc: "A full-stack boarding house discovery and booking platform. Enables tenants to search and filter available rooms with Midtrans payment gateway integration. Features a landlord dashboard for property management and a tenant portal for reservation tracking.",
            github: "https://github.com/kidzeroll/indekos",
            url: "#",
        },
        {
            name: "Inventaris App — Inventory Management System",
            type: "Solo Project",
            stack: "Laravel, React, Inertia.js, TypeScript, Tailwind CSS, Shadcn UI, Pusher, MySQL",
            desc: "A full-stack inventory management application with real-time updates via Pusher. Includes modules for item management, user administration, and category organization, built with Laravel Inertia.js and React TypeScript for a type-safe, SPA-like experience.",
            github: "https://github.com/kidzeroll/inventaris-app",
            url: "#",
        },
        {
            name: "Barbershop — Barbershop Management System",
            type: "Solo Project",
            stack: "Laravel, React, Inertia.js, TypeScript, Tailwind CSS, Shadcn UI, MySQL",
            desc: "Laravel Barbershop is a full-stack web application for managing barbershop operations. Built with Laravel as the backend, Inertia.js for seamless SPA-like navigation, and a React + TypeScript frontend styled with Tailwind CSS and shadcn/ui components. Data is persisted using MySQL, and the app ships with Docker support for easy local development.",
            github: "https://github.com/haykal-fe-verd/laravel-barbershop",
            url: "#",
        },
    ],

    /* ── Education ── */
    education: [
        {
            institution: "Politeknik Aceh",
            degree: "Associate Degree in Information Technology",
            period: "2019 – 2022",
            gpa: "3.64 / 4.00",
            finalProject: "SIGAM — Developed a web-based village administration information system using Laravel, MySQL, Blade, and Bootstrap to digitize population data management for Jantho Makmur village.",
        },
    ],

    /* ── Certifications ── */
    certifications: [
        { name: "React Foundations for Next.js", issuer: "Vercel", year: "2025" },
        { name: "Next.js App Router Fundamentals", issuer: "Vercel", year: "2025" },
        { name: "MERN Stack", issuer: "Udemy", year: "2023" },
        { name: "Laravel: Newbie To Pro", issuer: "Udemy", year: "2023" },
    ],

    /* ── Languages ── */
    languages: [
        { name: "Indonesian", level: "Native" },
        { name: "English", level: "Pre-Intermediate" },
    ],

    /* ── Kontak ── */
    contact: [
        {
            label: "Email",
            value: "developer.kidzeroll@gmail.com",
            icon: "✉️",
            href: "mailto:developer.kidzeroll@gmail.com",
        },
        { label: "GitHub", value: "github.com/haykal-fe-verd", icon: "🐙", href: "https://github.com/haykal-fe-verd/" },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/kidzeroll99",
            icon: "💼",
            href: "https://linkedin.com/in/kidzeroll99",
        },
        { label: "Instagram", value: "@kidz.eroll", icon: "📸", href: "https://instagram.com/kidz.eroll" },
    ],
};

export default portfolio;
