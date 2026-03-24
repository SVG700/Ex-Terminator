import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const currentImplementation = [
  "Cable-suspended robotic platform",
  "Pulley-guided horizontal travel on fixed rope",
  "Rotating brush + suction for sludge removal",
  "Stable, efficient, and already implemented",
];

const futureConcept = [
  "Drone-assisted deployment for closed tanks",
  "No fixed support required",
  "Multi-directional movement flexibility",
  "Planned conceptual extension for future scope",
];

function SolutionSection() {
  return (
    <section id="solution" className="section-shell scroll-mt-28">
      <Reveal delay={100}>
        <SectionHeading
          eyebrow="The Solution"
          title="Dual-Path Solution Strategy"
          description="Ex-Terminator combines a fully working open-tank implementation with a future-ready concept for closed-tank operations."
          icon="solution"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-surface border border-cyan-300/40 bg-cyan-400/5 hover:-translate-y-1 hover:border-cyan-300/55 hover:shadow-neon">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/85">
              Current Implementation (Open Tanks)
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-100">Production-Ready Cable System</h3>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {currentImplementation.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface border border-sky-300/35 bg-sky-400/5 hover:-translate-y-1 hover:border-sky-300/55 hover:shadow-neon">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/90">
              Future Concept (Closed Tanks)
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-100">Drone-Assisted Expansion Layer</h3>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {futureConcept.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

export default SolutionSection;