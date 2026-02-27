import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-10px_rgba(110,231,183,0.15)]"
        >
            <h3 className="text-lg font-semibold text-neutral-100 transition-colors group-hover:text-emerald-400">
                {project.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {project.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-neutral-500 transition-colors group-hover:border-emerald-400/20 group-hover:text-emerald-400/70"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
