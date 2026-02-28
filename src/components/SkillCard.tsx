"use client";

import React, { useState } from "react";
import { Skill } from "../data/skills";

export default function SkillCard({ skill }: { skill: Skill }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-lavender-400/30 hover:bg-white/10">

            {/* Top Header - Always Visible */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-white/5 text-gold-400 transition-colors group-hover:text-lavender-400">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-5 w-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d={skill.iconPath} />
                        </svg>
                    </div>
                    <span className="font-medium text-white/90">{skill.name}</span>
                </div>

                {/* Expand indicator chevron */}
                <div className="text-white/40 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Hover Tooltip - Only visible when NOT expanded */}
            <div
                className={`pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-background px-3 py-1.5 text-xs text-lavender-300 shadow-xl ring-1 ring-white/10 transition-all duration-200 z-10
          ${isExpanded ? 'opacity-0' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}`}
            >
                {skill.tooltip}
                {/* Tooltip arrow */}
                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-background ring-1 ring-white/10"></div>
            </div>

            {/* Expandable Content Panel */}
            <div
                className="grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out"
                style={{
                    gridTemplateRows: isExpanded ? "1fr" : "0fr",
                    opacity: isExpanded ? 1 : 0,
                    marginTop: isExpanded ? "1rem" : "0"
                }}
            >
                <div className="overflow-hidden">
                    <div className="space-y-4 border-t border-white/10 pt-4 text-sm">

                        {/* What I Built */}
                        <div>
                            <h4 className="font-mono text-xs uppercase tracking-wider text-gold-400/80 mb-1">
                                What I Built
                            </h4>
                            <p className="text-lavender-100/70 leading-relaxed">
                                {skill.whatIBuilt}
                            </p>
                        </div>

                        {/* Technical Context */}
                        <div>
                            <h4 className="font-mono text-xs uppercase tracking-wider text-gold-400/80 mb-1">
                                Technical Context
                            </h4>
                            <p className="text-lavender-100/70 leading-relaxed">
                                {skill.techExplanation}
                            </p>
                        </div>

                        {/* Related Projects Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {skill.relatedProjects.map((project) => (
                                <span
                                    key={project}
                                    className="rounded-full bg-lavender-400/10 px-2.5 py-1 text-xs text-lavender-300/90 ring-1 ring-lavender-400/20"
                                >
                                    {project}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
