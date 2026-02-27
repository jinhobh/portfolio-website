import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-lavender-400/10 bg-gradient-to-br from-twilight-800/60 to-twilight-900/60 p-6 transition-all duration-500 hover:border-gold-400/30 hover:shadow-[0_0_40px_-10px_rgba(245,197,66,0.2)]"
        >
            {/* Hover glow orb */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-400/0 blur-3xl transition-all duration-500 group-hover:bg-gold-400/10" />

            <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-gold-400">
                {project.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-lavender-300/40">
                {project.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-lavender-400/10 px-2.5 py-0.5 font-mono text-[11px] text-lavender-400/40 transition-all duration-300 group-hover:border-gold-400/20 group-hover:text-gold-300/60"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold-400/0 to-transparent transition-all duration-500 group-hover:via-gold-400/30" />
        </Link>
    );
}
