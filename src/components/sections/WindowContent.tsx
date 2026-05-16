import type { WindowId } from "@/lib/types";
import AboutContent from "./AboutContent";
import CertificationsContent from "./CertificationsContent";
import ContactContent from "./ContactContent";
import EducationContent from "./EducationContent";
import ExperienceContent from "./ExperienceContent";
import LanguagesContent from "./LanguagesContent";
import MyComputerContent from "./MyComputerContent";
import ProjectsContent from "./ProjectsContent";
import RecycleBinContent from "./RecycleBinContent";
import SkillsContent from "./SkillsContent";

export default function WindowContent({ id }: { id: WindowId }) {
    switch (id) {
        case "about":          return <AboutContent />;
        case "skills":         return <SkillsContent />;
        case "experience":     return <ExperienceContent />;
        case "education":      return <EducationContent />;
        case "certifications": return <CertificationsContent />;
        case "languages":      return <LanguagesContent />;
        case "projects":       return <ProjectsContent />;
        case "contact":        return <ContactContent />;
        case "mycomputer":     return <MyComputerContent />;
        case "recyclebin":     return <RecycleBinContent />;
    }
}
