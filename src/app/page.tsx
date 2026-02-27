import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-grid relative flex min-h-[calc(100vh-4rem)] items-center">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="animate-fade-in font-mono text-sm tracking-widest text-emerald-400">
          Hello, I&apos;m
        </p>

        <h1 className="animate-fade-in-delay mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Jinho
        </h1>

        <p className="animate-fade-in-delay mt-2 text-2xl font-light text-neutral-400 sm:text-3xl">
          Quantitative Developer
        </p>

        <p className="animate-fade-in-delay-2 mt-6 max-w-lg text-base leading-relaxed text-neutral-500">
          I build systems and models at the intersection of software engineering
          and quantitative finance — from pricing engines and backtesting
          frameworks to machine-learning pipelines for market data.
        </p>

        <div className="animate-fade-in-delay-2 mt-10 flex gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(110,231,183,0.3)]"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-white/10 px-6 py-2.5 text-sm font-medium text-neutral-300 transition-all duration-200 hover:border-white/25 hover:text-white"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
