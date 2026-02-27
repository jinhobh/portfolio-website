export const metadata = {
    title: "About | Jinho",
    description: "Background, skills, and interests.",
};

const skills = [
    { category: "Languages", items: ["Python", "C++", "TypeScript", "SQL"] },
    {
        category: "Quantitative",
        items: [
            "Stochastic Calculus",
            "Time Series Analysis",
            "Monte Carlo Methods",
            "Optimization",
        ],
    },
    {
        category: "Engineering",
        items: ["System Design", "Data Pipelines", "Cloud (AWS/GCP)", "CI/CD"],
    },
    {
        category: "ML / Stats",
        items: [
            "PyTorch",
            "Scikit-learn",
            "Bayesian Inference",
            "Deep Learning",
        ],
    },
];

export default function AboutPage() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-24">
            <div className="animate-fade-in">
                <p className="font-mono text-sm tracking-widest text-emerald-400">
                    ~/about
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                    About Me
                </h1>
            </div>

            <div className="animate-fade-in-delay mt-10 space-y-5 text-base leading-relaxed text-neutral-400">
                <p>
                    I&apos;m a quantitative developer with a passion for building
                    high-performance systems that sit at the intersection of mathematics
                    and software engineering. My work spans pricing engines, systematic
                    trading infrastructure, and machine-learning pipelines for financial
                    data.
                </p>
                <p>
                    I believe in writing clean, well-tested code and in the power of
                    open-source collaboration. When I&apos;m not building, I&apos;m
                    usually reading about stochastic processes, exploring new datasets, or
                    contributing to open-source quant libraries.
                </p>
            </div>

            <div className="animate-fade-in-delay-2 mt-14">
                <h2 className="font-mono text-sm tracking-widest text-emerald-400">
                    Skills &amp; Tools
                </h2>

                <div className="mt-6 grid gap-8 sm:grid-cols-2">
                    {skills.map(({ category, items }) => (
                        <div key={category}>
                            <h3 className="text-sm font-semibold text-neutral-200">
                                {category}
                            </h3>
                            <ul className="mt-2 space-y-1">
                                {items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2 text-sm text-neutral-500"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-emerald-400/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
