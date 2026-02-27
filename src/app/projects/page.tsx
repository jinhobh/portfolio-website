import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Projects | Jinho",
    description: "Quantitative development projects and open-source tools.",
};

export default function ProjectsPage() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <div className="animate-fade-in">
                <p className="font-mono text-sm tracking-widest text-emerald-400">
                    ~/projects
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                    Projects
                </h1>
                <p className="mt-3 text-neutral-500">
                    A selection of quantitative and engineering work.
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
