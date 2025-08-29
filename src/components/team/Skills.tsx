import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/types";

interface SkillsProps {
    skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
    if (!skills || skills.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            {skills.map((skill, index) => (
                <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-medium text-muted-foreground">
                            {skill.name}
                        </h4>
                        {skill.type !== "circle" && (
                            <span className="text-sm font-semibold text-primary">
                                {skill.level}%
                            </span>
                        )}
                    </div>
                    <Progress
                        value={skill.level}
                        type={skill.type}
                        aria-label={`Уровень владения ${skill.name}: ${skill.level}%`}
                    />
                </div>
            ))}
        </div>
    );
};

export default Skills;
