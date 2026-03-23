import Reveal from "./Reveal";

function HeroSection() {
  return (
    <section id="hero" className="section-shell scroll-mt-28">
      <Reveal delay={0}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/35 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Cable-Suspended Sludge Removal System
            </p>
            <h1 className="heading-glow text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Ex-Terminator
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Revolutionary cable-suspended robotic system for sewage treatment plants. Safely suspended above tanks, powered by precision pulley-driven movement and hybrid cleaning mechanisms that never contact water—eliminating corrosion and ensuring operational longevity.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100/90 sm:text-xs">
              <span className="rounded-full border border-cyan-300/30 bg-slate-900/70 px-3 py-1">
                No Water Contact
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-slate-900/70 px-3 py-1">
                Dual-Rope Suspension
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-slate-900/70 px-3 py-1">
                Hybrid Cleaning
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#how-it-works"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-neon transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                See How It Works
              </a>
              <a
                href="#comparison"
                className="rounded-full border border-cyan-300/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-400/10"
              >
                Compare Impact
              </a>
            </div>
          </div>

          <div className="card-surface relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              System Innovation
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-100">Suspended Excellence</h3>
            <p className="mt-4 text-slate-300">
              Rope-suspended design eliminates water contact, dramatically reducing corrosion and maintenance needs while ensuring <strong>99.2% higher operational longevity</strong> than submerged alternatives.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl border border-cyan-400/25 bg-slate-950/60 p-4">
                <p className="text-2xl font-bold text-cyan-300">2</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">Suspension Ropes</p>
              </div>
              <div className="rounded-xl border border-cyan-400/25 bg-slate-950/60 p-4">
                <p className="text-2xl font-bold text-cyan-300">0</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">Water Contact</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default HeroSection;