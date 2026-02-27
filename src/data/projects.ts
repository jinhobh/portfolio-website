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
    slug: "market-regime-detector",
    title: "Market Regime Detector",
    excerpt:
      "Hidden Markov Model pipeline that classifies equity markets into bull, bear, and sideways regimes using volatility and momentum features.",
    description:
      "A quantitative research tool that applies Hidden Markov Models to daily equity returns, classifying market environments into distinct regimes. The pipeline ingests OHLCV data, engineers features (realized volatility, momentum z-scores, volume profiles), fits an HMM via the Baum-Welch algorithm, and outputs regime probabilities with transition matrices. Includes a Streamlit dashboard for interactive exploration of regime histories across multiple tickers.",
    tags: ["Python", "HMM", "Time Series", "Streamlit"],
    github: "https://github.com/jinho/market-regime-detector",
  },
  {
    slug: "options-pricing-engine",
    title: "Options Pricing Engine",
    excerpt:
      "High-performance Monte Carlo and Black-Scholes pricing engine for vanilla and exotic options with Greeks computation.",
    description:
      "A from-scratch options pricing library supporting Black-Scholes analytical solutions, binomial trees, and GPU-accelerated Monte Carlo simulation for path-dependent exotics (Asian, barrier, lookback). Computes first- and second-order Greeks via finite differences and algorithmic differentiation. Benchmarked against QuantLib with <0.1% deviation on vanilla contracts. Written in C++ with Python bindings via pybind11.",
    tags: ["C++", "Python", "Monte Carlo", "Quantitative Finance"],
    github: "https://github.com/jinho/options-pricing-engine",
    live: "https://options-engine-demo.vercel.app",
  },
  {
    slug: "signal-backtest-framework",
    title: "Signal Backtest Framework",
    excerpt:
      "Event-driven backtesting framework for systematic trading strategies with realistic execution modeling.",
    description:
      "An event-driven backtesting engine designed for alpha research. Supports vectorized signal generation, order management with slippage/commission models, and portfolio-level risk attribution. Features include walk-forward optimization, Monte Carlo performance analysis, and automated report generation with tear sheets. Processes 10 years of minutely data for 500 names in under 3 minutes on commodity hardware.",
    tags: ["Python", "Pandas", "NumPy", "Risk Management"],
    github: "https://github.com/jinho/signal-backtest",
  },
  {
    slug: "portfolio-optimizer",
    title: "Portfolio Optimizer",
    excerpt:
      "Mean-variance and risk-parity portfolio construction tool with constraint handling and regime-aware allocation.",
    description:
      "Implements classical Markowitz mean-variance optimization alongside modern risk-parity and hierarchical risk parity (HRP) approaches. Supports box constraints, sector exposure limits, and turnover penalties. Integrates with the Market Regime Detector to dynamically shift allocation weights based on detected market regimes. Includes an interactive efficient frontier visualization built with D3.js.",
    tags: ["Python", "Optimization", "D3.js", "Finance"],
    github: "https://github.com/jinho/portfolio-optimizer",
    live: "https://portfolio-opt.vercel.app",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
