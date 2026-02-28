import React from "react";

export type SkillCategory = "Frontend" | "Backend" | "Machine Learning" | "Infrastructure";

export interface Skill {
    name: string;
    category: SkillCategory;
    icon: React.ReactNode;
    tooltip: string;
    whatIBuilt: string;
    relatedProjects: string[];
    techExplanation: string;
}

export const skillsData: Skill[] = [
    // --- Frontend ---
    {
        name: "React & Next.js",
        category: "Frontend",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.022-12.756l3.58 4.773 2.193-2.613-5.773-2.16z" />
                <circle cx="12" cy="12" r="2" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" stroke="currentColor" fill="none" strokeWidth="1" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" stroke="currentColor" fill="none" strokeWidth="1" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" stroke="currentColor" fill="none" strokeWidth="1" />
            </svg>
        ),
        tooltip: "Built responsive, SSR apps with modern hooks.",
        whatIBuilt: "Interactive dashboards, creative portfolios, and complex layout orchestrations with app router.",
        relatedProjects: ["Portfolio Website", "La La Land Redesign"],
        techExplanation: "Leveraged Server Components for initial load speed and Client Components for rich interactions."
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
        ),
        tooltip: "Utility-first design and custom token architecture.",
        whatIBuilt: "Complex themes, dark/light modes, and custom animations like glow orbs and gradient text.",
        relatedProjects: ["Portfolio Website", "Design System"],
        techExplanation: "Utilized arbitrary values and CSS variable mapping. Wrote custom PostCSS plugins for specific aesthetic behaviors."
    },
    // --- Backend ---
    {
        name: "Python (FastAPI)",
        category: "Backend",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-5.5 0-9.5 4-9.5 9.5s4 9.5 9.5 9.5 9.5-4 9.5-9.5S17.5 2 12 2zM8.5 7h7c.5 0 1 .5 1 1v4h-6v-1h5V8H9v8h2v-3h4v4H8.5c-.5 0-1-.5-1-1V8c0-.5.5-1 1-1zM11 9h2v2h-2V9zm0 6h2v2h-2v-2z" />
            </svg>
        ),
        tooltip: "High-performance async APIs for ML inference.",
        whatIBuilt: "Inference servers for diffusion models, RESTful endpoints wrapping PyTorch logic.",
        relatedProjects: ["ML Inference Server", "WTI Signature CVAE"],
        techExplanation: "Used Pydantic for rigorous I/O validation. Handled async backgrounds tasks to prevent long-running blockages."
    },
    {
        name: "PostgreSQL",
        category: "Backend",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm0 3c3.86 0 7 3.14 7 7 0 1.2-.29 2.34-.81 3.36l-1.39-1.39C16.92 13.43 17 12.73 17 12c0-2.76-2.24-5-5-5-2.76 0-5 2.24-5 5 0 .73.08 1.43.2 2.08L5.81 15.36C5.29 14.34 5 13.2 5 12c0-3.86 3.14-7 7-7zm-3.5 8c.83 0 1.5.67 1.5 1.5S9.33 16 8.5 16 7 15.33 7 14.5 7.67 13 8.5 13zm7 0c.83 0 1.5.67 1.5 1.5S16.33 16 15.5 16 14 15.33 14 14.5 14.67 13 15.5 13z" />
            </svg>
        ),
        tooltip: "Relational modeling and complex aggregations.",
        whatIBuilt: "User authentications, transaction logs, and vector embeddings for RAG systems.",
        relatedProjects: ["Auth Service", "RAG Database"],
        techExplanation: "Optimized queries with B-tree indices on heavily filtered columns and implemented pgvector."
    },
    // --- Machine Learning ---
    {
        name: "PyTorch & JAX",
        category: "Machine Learning",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 2.5a6.5 6.5 0 0 0-5.875 3.662 6.5 6.5 0 0 0-6.108 5.7L0 12l2.365 2.593c.96 5.522 6.643 8.32 11.233 5.432A6.5 6.5 0 0 0 24 16.5C24 8.768 16.038 2.316 16 2.5zm0 1.127c3.96 1.838 5.495 6.561 3.4 10.3A6.47 6.47 0 0 0 15 9a6.47 6.47 0 0 0 3.328-1.57A5.365 5.365 0 0 1 16 3.627zM6.91 9.77a5.366 5.366 0 0 1 2.341-3.155A5.385 5.385 0 0 1 15 8.995a5.372 5.372 0 0 1-5.115 5.45c-1.325.044-2.585-.436-3.518-1.312a5.418 5.418 0 0 1-1.385-3.363h1.928zm3.037 8.355a5.377 5.377 0 0 1-2.91-1.465A5.39 5.39 0 0 1 11.455 12h-1.92a4.29 4.29 0 0 0-2.43 1.05 4.274 4.274 0 0 0-1.157 2.457c-.501 2.872 1.348 5.674 4.145 6.27a4.293 4.293 0 0 0 4.146-1.573c.094-.122.18-.25.26-.381A6.502 6.502 0 0 0 22.868 15a5.352 5.352 0 0 1-3.665.25A5.363 5.363 0 0 1 15 11h-2a6.476 6.476 0 0 0 5.4 6.35 6.477 6.477 0 0 0 3.2-13.064c1.192 1.956.883 4.568-.748 6.13a5.405 5.405 0 0 1-3.8 1.48A6.452 6.452 0 0 0 16 21a6.473 6.473 0 0 0-6.053-2.875z" />
            </svg>
        ),
        tooltip: "Custom neural network architectures and auto-diff.",
        whatIBuilt: "CVAEs, Diffusion Models, and Physics-Informed Neural Networks.",
        relatedProjects: ["WTI Signature CVAE", "Meta-Optimizer"],
        techExplanation: "Built custom training loops, modified decoder states, and custom forward/backward passes."
    },
    {
        name: "OpenCV",
        category: "Machine Learning",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a9.98 9.98 0 00-8.66 5l8.66 5 8.66-5A9.98 9.98 0 0012 2zm-8.66 11l8.66-5v10a9.98 9.98 0 00-8.66-5zm17.32 0a9.98 9.98 0 00-8.66 5V8l8.66 5z" />
                <circle cx="12" cy="7" r="2" fill="#fff" />
                <circle cx="7.6" cy="14.5" r="2" fill="#fff" />
                <circle cx="16.4" cy="14.5" r="2" fill="#fff" />
            </svg>
        ),
        tooltip: "Image segmentation, masking, and feature extraction.",
        whatIBuilt: "Sprite extraction pipelines, bounding box detection, and auto-cropping algorithms.",
        relatedProjects: ["Photo Ingester", "Sprite Extraction"],
        techExplanation: "Used OpenCV to handle RGBA masks, extract dominant non-background colors using k-means clustering."
    },
    // --- Infrastructure ---
    {
        name: "Railway & Vercel",
        category: "Infrastructure",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
            </svg>
        ),
        tooltip: "CI/CD and hybrid cloud deployments.",
        whatIBuilt: "Automated pipelines deploying Next.js frontend to Edge and FastAPI backend to Nixpacks containers.",
        relatedProjects: ["Portfolio Website", "ML Inference Server"],
        techExplanation: "Configured CORS environments, managed serverless function region alignment, and set up branch-preview environments."
    },
    {
        name: "Docker",
        category: "Infrastructure",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.95 0h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.94 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.185-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.953 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.185-.186H5.14a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m2.953-2.949h2.12a.186.186 0 0 0 .184-.185V6.056a.186.186 0 0 0-.185-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .101.083.185.185.185m2.94 0h2.118a.186.186 0 0 0 .186-.185V6.056a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .101.082.185.185.185m2.95 0h2.119a.186.186 0 0 0 .186-.185V6.056a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .101.083.185.185.185m-5.89-2.95h2.118a.186.186 0 0 0 .186-.185V3.106a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.94 0h2.12a.186.186 0 0 0 .184-.185V3.106a.185.185 0 0 0-.185-.186H5.14a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.897c-.065-.051-.67-.51-1.954-.51-.338.001-.676.03-1.01.087-.215-1.1-1.196-1.921-2.333-1.921h-.1v-2.05h-.624V11.23h-.146v.385.002h.146V22.21a2.6 2.6 0 0 1-2.6 2.6H4.07v.52h2.247c1.33 0 2.501-.58 3.328-1.503a4.7 4.7 0 0 0 2.87 1.13h6.918a2.6 2.6 0 0 0 2.6-2.6V12.98c1.352-.084 1.93-1.242 1.95-1.28.064-.108.083-.23.056-.35-.025-.118-.093-.22-.192-.293zM1.996 11.23h.624V5.501h.6v5.728h8.541l2.585.666V13.5l-4.593.456-4.57 1.055L2.593 11.23v-.001h-.597z" />
            </svg>
        ),
        tooltip: "Containerization and local parity.",
        whatIBuilt: "Reproducible environments for ML training without polluting host systems.",
        relatedProjects: ["Meta-Optimizer"],
        techExplanation: "Used multi-stage builds to dramatically reduce image sizes for production deployments."
    }
];
