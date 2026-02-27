export const metadata = {
    title: "Resume | Jinho",
    description: "Professional experience and education.",
};

const experience = [
    {
        period: "2023 — Present",
        role: "Quantitative Developer",
        company: "Independent / Open Source",
        description:
            "Building open-source quant tools: pricing engines, backtesting frameworks, and ML pipelines for market data. Contributing to community projects in systematic trading and risk management.",
    },
    {
        period: "2021 — 2023",
        role: "Software Engineer",
        company: "Fintech Startup",
        description:
            "Designed and implemented real-time data ingestion pipelines processing 50K+ messages/sec. Built portfolio analytics dashboards and automated report generation systems.",
    },
    {
        period: "2019 — 2021",
        role: "Research Assistant",
        company: "University Lab",
        description:
            "Conducted research in computational finance: implemented numerical PDE solvers for option pricing and developed statistical arbitrage detection algorithms.",
    },
];

const education = [
    {
        period: "2017 — 2021",
        degree: "B.S. Computer Science & Mathematics",
        school: "University",
        description:
            "Focus on numerical methods, probability theory, and algorithm design. Senior thesis on volatility surface interpolation using Gaussian processes.",
    },
];

function TimelineItem({
    period,
    title,
    subtitle,
    description,
}: {
    period: string;
    title: string;
    subtitle: string;
    description: string;
}) {
    return (
        <div className="group relative grid gap-2 pb-8 sm:grid-cols-[140px_1fr] sm:gap-8">
            <p className="font-mono text-xs text-neutral-600 sm:text-right">
                {period}
            </p>
            <div className="relative border-l border-white/5 pl-6 before:absolute before:-left-[5px] before:top-1.5 before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-emerald-400/50 before:bg-[#0a0a0a] before:transition-colors group-hover:before:border-emerald-400">
                <h3 className="text-sm font-semibold text-neutral-200">{title}</h3>
                <p className="mt-0.5 text-sm text-emerald-400/60">{subtitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function ResumePage() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-24">
            <div className="animate-fade-in">
                <p className="font-mono text-sm tracking-widest text-emerald-400">
                    ~/resume
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                    Resume
                </h1>
            </div>

            {/* Download */}
            <div className="animate-fade-in-delay mt-8">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-neutral-300 transition-all hover:border-white/25 hover:text-white"
                >
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
                        />
                    </svg>
                    Download PDF
                </a>
            </div>

            {/* Experience */}
            <div className="animate-fade-in-delay mt-14">
                <h2 className="font-mono text-sm tracking-widest text-emerald-400">
                    Experience
                </h2>
                <div className="mt-8">
                    {experience.map((item) => (
                        <TimelineItem
                            key={item.period}
                            period={item.period}
                            title={item.role}
                            subtitle={item.company}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>

            {/* Education */}
            <div className="animate-fade-in-delay-2 mt-6">
                <h2 className="font-mono text-sm tracking-widest text-emerald-400">
                    Education
                </h2>
                <div className="mt-8">
                    {education.map((item) => (
                        <TimelineItem
                            key={item.period}
                            period={item.period}
                            title={item.degree}
                            subtitle={item.school}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
