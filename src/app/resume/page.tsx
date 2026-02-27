export const metadata = {
    title: "Resume | Bruce Bae",
    description: "Education | Research Experience",
};

const experience = [
    {
        period: "Aug 2025 — Present",
        role: "Research Assistant",
        company:
            "Computational Mechanics & Scientific AI Lab (CoMSAIL), Cornell University",
        bullets: [
            "Designed a physics-informed neural network (PINN) in PyTorch to model 3D aerodynamic forces, embedding Navier-Stokes equations into the loss function to enforce physical consistency.",
            "Parameterized boundary conditions as soft constraints and ran ablation studies to quantify their impact on L2 prediction error under sparse data.",
            "Evaluated model against finite-element baselines, analyzing generalization degradation when physical assumptions are violated.",
        ],
    },
    {
        period: "Oct 2024 — Apr 2025",
        role: "Research Assistant",
        company: "San Diego Supercomputer Center",
        bullets: [
            "Built kinetic ODE models in COPASI for BDNF/NGF cascades, calibrating ~30 rate constants to reproduce known Alzheimer's disease phosphorylation dynamics.",
            "Scripted automated pipelines in Python to execute 200+ parameterized simulations and generate comparative plots.",
            "Identified three critical pathway bottlenecks, delivering reports that directly informed subsequent wet-lab experiments.",
        ],
    },
    {
        period: "May 2024 — Sep 2024",
        role: "Research Assistant",
        company: "Wu Lab, UC San Diego School of Medicine",
        bullets: [
            "Engineered a Python and ImageJ pipeline to segment and track organelle motion across 100+ GB of confocal microscopy video.",
            "Reduced per-video processing time from ~4 hours of manual annotation to under 20 minutes.",
            "Presented findings on methodology and biological implications at the BMES Annual Meeting at Johns Hopkins University.",
        ],
    }
];

const education = [
    {
        period: "2024 — 2028",
        degree: "B.A. in Computer Science",
        school: "Cornell University, College of Arts and Sciences",
        courses:
            "Data Structures & Algorithms, Functional Programming, Machine Learning, Differential Equations, Discrete Structures",
    },
    {
        period: "Dec 2023 — Jun 2024",
        degree: "Dual Enrollment",
        school: "San Diego State University",
        courses: "Multivariable Calculus, Linear Algebra",
    },
];


function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="mt-2 space-y-2">
            {items.map((item, i) => (
                <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-lavender-300/40"
                >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400/30" />
                    {item}
                </li>
            ))}
        </ul>
    );
}

function TimelineItem({
    period,
    title,
    subtitle,
    children,
}: {
    period: string;
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) {
    return (
        <div className="group relative grid gap-2 pb-10 sm:grid-cols-[160px_1fr] sm:gap-8">
            <p className="font-mono text-xs text-lavender-400/25 sm:text-right">
                {period}
            </p>
            <div className="relative border-l border-lavender-400/10 pl-6 before:absolute before:-left-[5px] before:top-1.5 before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-gold-400/30 before:bg-twilight-950 before:transition-all group-hover:before:border-gold-400 group-hover:before:shadow-[0_0_8px_rgba(245,197,66,0.3)]">
                <h3 className="text-sm font-semibold text-white/80">{title}</h3>
                <p className="mt-0.5 text-sm text-sunset-400/50">{subtitle}</p>
                {children}
            </div>
        </div>
    );
}

export default function ResumePage() {
    return (
        <section className="relative mx-auto max-w-3xl px-6 py-24">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-10 left-0 h-[250px] w-[300px] rounded-full bg-sunset-500/[0.03] blur-[100px]" />

            <div className="animate-fade-in">
                <p className="font-mono text-sm tracking-widest text-gold-400/80">
                    ~/resume
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                    Bruce Bae
                </h1>
                <p className="mt-1 text-sm text-lavender-300/30">
                    San Diego, CA · jb2856@cornell.edu
                </p>
            </div>

            {/* Download */}
            <div className="animate-fade-in-delay mt-6">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-lavender-400/10 px-4 py-2 text-sm text-lavender-300/50 transition-all hover:border-gold-400/30 hover:text-gold-400"
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

            {/* Education */}
            <div className="animate-fade-in-delay mt-12">
                <h2 className="font-mono text-sm tracking-widest text-gold-400/80">
                    Education
                </h2>
                <div className="mt-8">
                    {education.map((item) => (
                        <TimelineItem
                            key={item.period}
                            period={item.period}
                            title={item.degree}
                            subtitle={item.school}
                        >
                            {/* <p className="mt-1 font-mono text-xs text-gold-400/40">
                                {item.detail}
                            </p> */}
                            <p className="mt-1 text-xs text-lavender-300/30">
                                {item.courses}
                            </p>
                        </TimelineItem>
                    ))}
                </div>
            </div>

            {/* Experience */}
            <div className="animate-fade-in-delay-2 mt-6">
                <h2 className="font-mono text-sm tracking-widest text-gold-400/80">
                    Research Experience
                </h2>
                <div className="mt-8">
                    {experience.map((item) => (
                        <TimelineItem
                            key={item.period}
                            period={item.period}
                            title={item.role}
                            subtitle={item.company}
                        >
                            <BulletList items={item.bullets} />
                        </TimelineItem>
                    ))}
                </div>
            </div>

        </section>
    );
}
