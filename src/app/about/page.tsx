export const metadata = {
    title: "About | Bruce",
    description: "Background, skills, and research interests.",
};

import SkillsSection from "../../components/SkillsSection";

export default function AboutPage() {
    return (
        <section className="relative mx-auto max-w-3xl px-6 py-24">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-10 right-0 h-[250px] w-[250px] rounded-full bg-lavender-400/[0.04] blur-[100px]" />

            <div className="animate-fade-in">
                <p className="font-mono text-sm tracking-widest text-gold-400/80">
                    ~/about
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                    About Me
                </h1>
            </div>

            <div className="animate-fade-in-delay mt-10 space-y-5 text-base leading-relaxed text-lavender-300/45">
                <p>
                    I&apos;m a student with a deep interest in machine learning research
                    and physics. I&apos;m fascinated by how neural networks can learn the
                    laws of nature — from solving differential equations to generating
                    realistic data through diffusion processes.
                </p>
                <p>
                    I learn best by building from scratch. Most of my projects start as
                    paper re-implementations or curiosity-driven experiments that grow
                    into something more substantial. I care about understanding the math,
                    writing clean code, and making research more accessible through
                    visualization and open-source tools.
                </p>
            </div>

            <div className="animate-fade-in-delay-2 mt-14">
                <h2 className="font-mono text-sm tracking-widest text-gold-400/80">
                    Skills &amp; Tools
                </h2>

                <SkillsSection />
            </div>
        </section>
    );
}
