import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const risks = [
  "Direct human exposure to toxic gases and biohazardous sludge.",
  "High risk of respiratory illness, skin infections, and long-term health damage.",
  "Physically demanding operations with low precision and inconsistent outcomes.",
  "Extended cleaning cycles that reduce plant throughput and increase downtime.",
  "Limited monitoring, making emergency response slower and less effective.",
];

function ProblemSection() {
  return (
    <section id="problem" className="section-shell scroll-mt-28">
      <Reveal delay={70}>
        <SectionHeading
          eyebrow="The Challenge"
          title="Manual Sludge Cleaning Is Unsafe and Unsustainable"
          description="Traditional cleaning methods rely on risky human intervention inside hazardous environments."
          icon="problem"
        />

        <div className="card-surface">
          <ul className="space-y-4">
            {risks.map((risk) => (
              <li key={risk} className="flex gap-3 text-slate-200">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export default ProblemSection;