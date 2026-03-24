import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ScalabilityFutureVision() {
  return (
    <section id="scalability-vision" className="section-shell scroll-mt-28">
      <Reveal delay={190}>
        <SectionHeading
          eyebrow="Scalability & Future Vision"
          title="Expanding Beyond Open Tanks"
          description="The current prototype is optimized for open sewage tanks, while future architecture planning targets closed and restricted environments."
          icon="scalability"
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <article className="card-surface hover:border-cyan-300/45 hover:shadow-neon">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Current Limitation
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-100">
              Closed Tanks Are Operationally Constrained
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Fixed rope systems are highly reliable for open tanks, but covered infrastructure limits anchor placement,
              accessibility, and safe line-of-sight operation. This creates a deployment gap in enclosed sewage zones.
            </p>
          </article>

          <article className="card-surface border border-sky-300/35 bg-sky-400/5 hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-neon">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/90">
              Proposed Drone-Assisted Extension
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-100">
              Adaptive Access for Closed Environments
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A drone-assisted deployment layer is proposed to position and stabilize cleaning modules where fixed supports
              are not feasible, enabling multi-directional movement and broader plant coverage.
            </p>
            <p className="mt-5 rounded-lg border border-amber-300/35 bg-amber-300/10 px-4 py-3 text-sm font-semibold text-amber-100">
              This is a conceptual extension and not part of the current prototype.
            </p>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

export default ScalabilityFutureVision;
