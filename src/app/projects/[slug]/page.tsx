import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
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
        <section className="mx-auto max-w-3xl px-6 py-24">
            <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-neutral-500 transition-colors hover:text-emerald-400"
            >
                <span>←</span> Back to projects
            </Link>

            <div className="animate-fade-in mt-8">
                <p className="font-mono text-sm tracking-widest text-emerald-400">
                    ~/projects/{project.slug}
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                    {project.title}
                </h1>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-emerald-400/20 px-3 py-0.5 font-mono text-xs text-emerald-400/70"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="animate-fade-in-delay mt-10">
                <p className="text-base leading-relaxed text-neutral-300">
                    {project.description}
                </p>
            </div>

            <div className="animate-fade-in-delay-2 mt-10 flex gap-4">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/10 px-5 py-2 text-sm text-neutral-300 transition-all hover:border-white/25 hover:text-white"
                    >
                        GitHub →
                    </a>
                )}
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-medium text-black transition-all hover:bg-emerald-400"
                    >
                        Live Demo →
                    </a>
                )}
            </div>
        </section>
    );
}
