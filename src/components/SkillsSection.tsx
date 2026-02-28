"use client";

import React from "react";
import { skillsData } from "../data/skillsData";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
    // Organizing the 8 skills into a fashionable 3-2-3 staggered diamond shape
    const row1 = skillsData.slice(0, 3);
    const row2 = skillsData.slice(3, 5);
    const row3 = skillsData.slice(5, 8);

    return (
        <div className="mt-8 flex w-full flex-col items-center py-10">
            <div className="relative flex flex-col items-center gap-4 md:gap-6">

                {/* Ambient background glow for the whole shape */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender-400/5 blur-[80px]" />

                {/* Row 1 */}
                <div className="flex justify-center gap-4 md:gap-8">
                    {row1.map((skill, i) => (
                        <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                            <SkillCard skill={skill} />
                        </div>
                    ))}
                </div>

                {/* Row 2 (Staggered offset) */}
                <div className="flex justify-center gap-4 md:gap-8 px-6 md:px-12">
                    {row2.map((skill, i) => (
                        <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${(i + 3) * 0.1}s` }}>
                            <SkillCard skill={skill} />
                        </div>
                    ))}
                </div>

                {/* Row 3 */}
                <div className="flex justify-center gap-4 md:gap-8">
                    {row3.map((skill, i) => (
                        <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${(i + 5) * 0.1}s` }}>
                            <SkillCard skill={skill} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
