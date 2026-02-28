export interface Project {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "neural-ode-dynamics",
    title: "Neural ODE for Physical Dynamics",
    excerpt:
      "Learning continuous-time dynamics of physical systems using Neural ODEs, trained on simulated pendulum and spring-mass data.",
    description:
      "A research project exploring Neural Ordinary Differential Equations for modeling physical systems. The model learns the governing dynamics of pendulums and spring-mass systems directly from trajectory data, without explicit knowledge of the underlying equations. Implemented a custom ODE solver with adjoint sensitivity methods for memory-efficient backpropagation. Achieved <2% trajectory prediction error over 10-second horizons on held-out initial conditions.",
    tags: ["PyTorch", "Neural ODEs", "Physics", "Differential Equations"],
    github: "https://github.com/jinho/neural-ode-dynamics",
  },
  {
    slug: "diffusion-image-gen",
    title: "Diffusion Model from Scratch",
    excerpt:
      "Minimal implementation of a denoising diffusion probabilistic model (DDPM) trained on CIFAR-10 with custom noise scheduling.",
    description:
      "Built a denoising diffusion probabilistic model from first principles to deeply understand the generative modeling pipeline. Implements the forward noising process, reverse denoising with a U-Net backbone, and both linear and cosine noise schedules. Trained on CIFAR-10 with FID score tracking. Includes a notebook walkthrough of the math behind score matching and the ELBO derivation.",
    tags: ["PyTorch", "Generative Models", "Computer Vision", "Math"],
    github: "https://github.com/jinho/diffusion-from-scratch",
  },
  {
    slug: "physics-informed-nn",
    title: "Physics-Informed Neural Networks",
    excerpt:
      "Solving PDEs with neural networks by encoding physical laws directly into the loss function.",
    description:
      "Implemented Physics-Informed Neural Networks (PINNs) to solve partial differential equations without mesh-based numerical methods. The network is trained to satisfy both boundary conditions and the governing PDE (Navier-Stokes) via a physics-based loss term.",
    tags: ["Python", "PINNs", "PDEs", "Scientific Computing"],
    github: "https://github.com/jinho/physics-informed-nn",
  },
  {
    slug: "transformer-attention-viz",
    title: "Transformer Attention Visualizer",
    excerpt:
      "Interactive tool for visualizing multi-head self-attention patterns in transformer models across different NLP tasks.",
    description:
      "An interactive web-based tool for probing and visualizing attention heads in pretrained transformer models (BERT, GPT-2). Supports token-level and head-level attention heatmaps, attention rollout, and gradient-weighted attention. Built to support a research project investigating how different attention heads specialize for syntactic vs. semantic tasks. Frontend built with Next.js and D3.js, with a FastAPI backend serving model inference.",
    tags: ["Transformers", "NLP", "D3.js", "FastAPI"],
    github: "https://github.com/jinho/attention-visualizer",
    live: "https://attention-viz-demo.vercel.app",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
