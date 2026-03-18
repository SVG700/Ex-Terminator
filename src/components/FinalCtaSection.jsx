import Reveal from "./Reveal";

function FinalCtaSection() {
  return (
    <section id="final-cta" className="section-shell scroll-mt-28">
      {/* Closing CTA for judges and stakeholders */}
      <Reveal delay={340}>
        <div className="card-surface overflow-hidden border-cyan-300/35 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-cyan-950/30">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/85">
                Ready for Demonstration
              </p>
              <h2 className="mt-3 heading-glow text-3xl font-bold leading-tight sm:text-4xl">
                Built to Protect Workers and Modernize Sewage Operations
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Ex-Terminator is positioned as a practical, scalable safety solution for hazardous
                sludge removal. Ideal for pilot deployments, smart-city sanitation initiatives, and
                industrial treatment modernization.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#gallery"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-neon transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                View Showcase
              </a>
              <a
                href="#team"
                className="rounded-full border border-cyan-300/55 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-100 transition hover:bg-cyan-400/10"
              >
                Meet Team
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default FinalCtaSection;
