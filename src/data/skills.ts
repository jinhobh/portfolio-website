export type SkillCategory = "Frontend" | "Backend" | "Machine Learning" | "Infrastructure";

export interface Skill {
    name: string;
    category: SkillCategory;
    // SVG path definition (d attribute) for a modern, minimal logo
    iconPath: string;
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
        iconPath: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z", // Generic tech circle
        tooltip: "Built responsive, SSR apps with modern hooks.",
        whatIBuilt: "Interactive dashboards, creative portfolios, and complex layout orchestrations with app router.",
        relatedProjects: ["Portfolio Website", "La La Land Redesign"],
        techExplanation: "Leveraged Server Components for initial load speed and Client Components for rich interactions. Managed complex local state with hooks and Context API."
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        iconPath: "M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12", // Layered design
        tooltip: "Utility-first design and custom token architecture.",
        whatIBuilt: "Complex themes, dark/light modes, and custom animations like glow orbs and gradient text.",
        relatedProjects: ["Portfolio Website", "Design System"],
        techExplanation: "Utilized arbitrary values and CSS variable mapping. Wrote custom PostCSS plugins for specific aesthetic behaviors and deep color palettes."
    },
    // --- Backend ---
    {
        name: "Python (FastAPI)",
        category: "Backend",
        iconPath: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.43 4 16.05 4 12C4 7.95 7.06 4.57 11 4.07V19.93ZM13 4.07C16.94 4.57 20 7.95 20 12C20 16.05 16.94 19.43 13 19.93V4.07Z", // Split generic symbol
        tooltip: "High-performance async APIs for ML inference.",
        whatIBuilt: "Inference servers for diffusion models, RESTful endpoints wrapping PyTorch logic.",
        relatedProjects: ["ML Inference Server", "WTI Signature CVAE"],
        techExplanation: "Used Pydantic for rigorous I/O validation. Handled async backgrounds tasks to prevent long-running ML model predictions from blocking the main event loop."
    },
    {
        name: "PostgreSQL",
        category: "Backend",
        iconPath: "M3 5C3 3.34315 7.02944 2 12 2C16.9706 2 21 3.34315 21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5ZM3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12 M3 19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19", // Database symbol
        tooltip: "Relational modeling and complex aggregations.",
        whatIBuilt: "User authentications, transaction logs, and vector embeddings for RAG systems.",
        relatedProjects: ["Auth Service", "RAG Database"],
        techExplanation: "Optimized queries with B-tree indices on heavily filtered columns and implemented pgvector for efficient cosine distance searches on high-dimensional data."
    },
    // --- Machine Learning ---
    {
        name: "PyTorch & JAX",
        category: "Machine Learning",
        iconPath: "M12 2L2 22H22L12 2ZM12 7.5L17.5 18H6.5L12 7.5Z", // Triangle / network
        tooltip: "Custom neural network architectures and auto-diff.",
        whatIBuilt: "CVAEs, Diffusion Models, and Physics-Informed Neural Networks.",
        relatedProjects: ["WTI Signature CVAE", "Meta-Optimizer"],
        techExplanation: "Built custom training loops, modified decoder states to prevent posterior collapse, and implemented custom forward/backward passes for gradient penalty."
    },
    {
        name: "Computer Vision",
        category: "Machine Learning",
        iconPath: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z", // Eye
        tooltip: "Image segmentation, masking, and feature extraction.",
        whatIBuilt: "Sprite extraction pipelines, bounding box detection, and auto-cropping algorithms.",
        relatedProjects: ["Photo Ingester", "Sprite Extraction"],
        techExplanation: "Used OpenCV to handle RGBA masks, extract dominant non-background colors using k-means clustering, and convert tensors directly to UI elements."
    },
    // --- Infrastructure ---
    {
        name: "Railway & Vercel",
        category: "Infrastructure",
        iconPath: "M12 2L4 6V18L12 22L20 18V6L12 2Z", // Hexagon block
        tooltip: "CI/CD and hybrid cloud deployments.",
        whatIBuilt: "Automated pipelines deploying Next.js frontend to Edge and FastAPI backend to Nixpacks containers.",
        relatedProjects: ["Portfolio Website", "ML Inference Server"],
        techExplanation: "Configured CORS environments, managed serverless function region alignment, and set up branch-preview environments for staging tests."
    },
    {
        name: "Docker",
        category: "Infrastructure",
        iconPath: "M4 10V14H8V10H4ZM10 10V14H14V10H10ZM16 10V14H20V10H16ZM4 16V20H8V16H4ZM10 16V20H14V16H10ZM16 16V20H20V16H16ZM10 4V8H14V4H10Z", // Grid
        tooltip: "Containerization and local parity.",
        whatIBuilt: "Reproducible environments for ML training without polluting host systems.",
        relatedProjects: ["Meta-Optimizer"],
        techExplanation: "Used multi-stage builds to dramatically reduce image sizes for production deployments, compiled PyTorch binaries with specific CUDA versions."
    }
];
