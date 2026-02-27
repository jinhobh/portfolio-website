import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import PredictWidget from "@/components/PredictWidget";
import type { Metadata } from "next";

interface PageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
    const project = getProjectBySlug(params.slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} | Jinho`,
        description: project.excerpt,
    };
}

export default function ProjectPage({ params }: PageProps) {
    const project = getProjectBySlug(params.slug);
    if (!project) notFound();

    return (
        <section className="relative mx-auto max-w-3xl px-6 py-24">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-10 left-1/2 h-[250px] w-[400px] -translate-x-1/2 rounded-full bg-gold-400/[0.03] blur-[100px]" />

            <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-lavender-300/40 transition-colors hover:text-gold-400"
            >
                <span>←</span> Back to projects
            </Link>

            <div className="animate-fade-in mt-8">
                <p className="font-mono text-sm tracking-widest text-gold-400/80">
                    ~/projects/{project.slug}
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                    {project.title}
                </h1>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-gold-400/15 px-3 py-0.5 font-mono text-xs text-gold-400/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="animate-fade-in-delay mt-10">
                <p className="text-base leading-relaxed text-lavender-300/50">
                    {project.description}
                </p>
            </div>

            <div className="animate-fade-in-delay-2 mt-10 flex gap-4">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-lavender-400/10 px-5 py-2 text-sm text-lavender-300/50 transition-all hover:border-lavender-400/25 hover:text-lavender-300"
                    >
                        GitHub →
                    </a>
                )}
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 px-5 py-2 text-sm font-semibold text-twilight-950 transition-all hover:shadow-[0_0_25px_-5px_rgba(245,197,66,0.4)]"
                    >
                        Live Demo →
                    </a>
                )}
            </div>

            {/* Live Inference Widget */}
            <div className="animate-fade-in-delay-2 mt-14">
                <PredictWidget />
            </div>
        </section>
    );
}
