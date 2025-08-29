export interface Skill {
    name: string;
    level: number;
    type?: "bar" | "circle";
}

export interface SocialLinks {
    github?: string;
    linkedin?: string;
    twitter?: string;
}

export interface TeamMember {
    id: string;
    name: string;
    age: number;
    role: string;
    isLead?: boolean;
    bio: string;
    contribution: string;
    photoUrl: string;
    socials: SocialLinks;
    skills: Skill[];
    portfolio: string[];
}
