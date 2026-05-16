export type WindowId =
    | "about"
    | "skills"
    | "experience"
    | "education"
    | "certifications"
    | "languages"
    | "projects"
    | "contact";

export type WindowState = {
    id: WindowId;
    title: string;
    icon: string;
    open: boolean;
    minimized: boolean;
    zIndex: number;
    initialPosition: { x: number; y: number };
    position: { x: number; y: number };
    width: number;
};
