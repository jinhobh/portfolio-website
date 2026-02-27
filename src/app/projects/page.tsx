import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Projects | Jinho",
    description: "Machine learning research and physics projects.",
};

export default function ProjectsPage() {
    return (
        <section className="relative mx-auto max-w-5xl px-6 py-24">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-20 right-0 h-[300px] w-[300px] rounded-full bg-sunset-500/[0.03] blur-[100px]" />

            <div className="animate-fade-in">
                <p className="font-mono text-sm tracking-widest text-gold-400/80">
                    ~/projects
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                    Projects
                </h1>
                <p className="mt-3 text-lavender-300/40">
                    A selection of ML research and physics experiments.
                </p>
            </div>

            <div className="animate-fade-in-delay mt-12 grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}
