import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-stars relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      {/* Layered ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-gold-400/[0.04] blur-[130px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-sunset-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 h-[350px] w-[350px] rounded-full bg-lavender-400/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="animate-fade-in font-mono text-sm tracking-widest text-gold-400/80">
          Hello, I&apos;m
        </p>

        <h1 className="animate-fade-in-delay mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">Bruce Bae
        </h1>

        <p className="animate-fade-in-delay mt-2 text-2xl font-light sm:text-3xl">
          <span className="text-gradient-gold">ML Research</span>
          <span className="text-lavender-300/50"> &amp; </span>
          <span className="text-gradient-lavender">Physics</span>
        </p>

        <p className="animate-fade-in-delay-2 mt-6 max-w-lg text-base leading-relaxed text-lavender-300/40">
          CS student at Cornell researching physics-informed neural networks,
          kinetic ODE models, and generative models. I build from scratch to
          understand deeply — from Navier-Stokes PINNs to variational
          autoencoders for financial time-series.
        </p>

        <div className="animate-fade-in-delay-3 mt-10 flex gap-4">
          <Link
            href="/projects"
            className="rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2.5 text-sm font-semibold text-twilight-950 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(245,197,66,0.4)]"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-lavender-400/15 px-6 py-2.5 text-sm font-medium text-lavender-300/60 transition-all duration-300 hover:border-lavender-400/30 hover:text-lavender-300"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
