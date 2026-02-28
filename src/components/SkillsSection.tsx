"use client";

import React from "react";
import { skillsData, SkillCategory } from "../data/skills";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
    const categories: SkillCategory[] = [
        "Frontend",
        "Backend",
        "Machine Learning",
        "Infrastructure",
    ];

    return (
        <div className="space-y-12 w-full mt-6">
            {categories.map((category) => {
                const categorySkills = skillsData.filter((s) => s.category === category);

                if (categorySkills.length === 0) return null;

                return (
                    <div key={category} className="space-y-4">
                        <h3 className="flex items-center gap-3 text-lg font-semibold text-white/90">
                            <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                            {category}
                            <span className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {categorySkills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
