"use client";

import React from "react";
import { Skill } from "../data/skillsData";

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div className="group relative flex items-center justify-center">
            {/* Fashionable Orb / Squircle */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-lavender-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_-5px_rgba(162,155,254,0.4)] md:h-20 md:w-20 md:rounded-[2rem]">
                {/* Inner glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] border border-white/0 transition-colors duration-300 group-hover:border-white/20" />

                <div className="flex items-center justify-center [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-gold-400/80 [&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-white md:[&>svg]:h-8 md:[&>svg]:w-8">
                    {skill.icon}
                </div>
            </div>

            {/* Hover Tooltip */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none z-10 w-max max-w-[180px] text-center md:-top-20">
                <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-background/90 px-3 py-2 text-xs backdrop-blur-md shadow-xl">
                    <span className="font-semibold tracking-wide text-white/90">{skill.name}</span>
                    <span className="text-[10px] leading-tight text-lavender-300/70">{skill.tooltip}</span>
                </div>
                {/* Tooltip downward arrow */}
                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-background/90"></div>
            </div>
        </div>
    );
}
