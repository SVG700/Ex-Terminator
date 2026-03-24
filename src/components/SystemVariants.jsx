import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const variants = [
  {
    title: "Open Tank System",
    badge: "Current Implementation",
    status: "Fully Implemented",
    points: [
      "Cable-suspended robotic platform",
      "Pulley-based horizontal movement",
      "Stable and efficient operation",
      "Validated in current prototype",
    ],
    style: "border-cyan-300/45 bg-cyan-400/5",
  },
  {
    title: "Closed Tank Concept",
    badge: "Future Concept",
    status: "Conceptual (Future Scope)",
    points: [
      "Drone-assisted deployment architecture",
      "No fixed support required",
      "Multi-directional movement flexibility",
      "Designed for covered/restricted tanks",
    ],
    style: "border-sky-300/35 bg-sky-400/5",
  },
];

function SystemVariants() {
  return (
    <section id="system-variants" className="section-shell scroll-mt-28">
      <Reveal delay={145}>
        <SectionHeading
          eyebrow="System Variants"
          title="Current Build and Expansion Roadmap"
          description="Ex-Terminator is engineered as a deployable open-tank solution today, with a planned drone-assisted variant for future closed-tank operations."
          icon="variants"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {variants.map((variant, index) => (
            <article
              key={variant.title}
              className={`card-surface group border ${variant.style} hover:-translate-y-1 hover:shadow-neon`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                  {variant.badge}
                </p>
                <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                  {variant.status}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-slate-100 group-hover:text-cyan-100">
                {variant.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {variant.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {variant.title === "Closed Tank Concept" && (
                <div className="mt-6 rounded-xl border border-dashed border-cyan-300/35 bg-slate-900/45 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
                    Drone Concept Visualization
                  </p>
                  <div className="mt-3 grid min-h-28 place-items-center rounded-lg border border-cyan-300/20 bg-slate-950/70">
                    <p className="text-center text-sm text-slate-400">
                      Placeholder for future drone-assisted deployment render
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default SystemVariants;
