import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  "Position via Pulley",
  "Detect Sludge Layer",
  "Activate Rotating Brush",
  "Break & Loosen Deposits",
  "Activate Suction Pump",
  "Remove & Dispose",
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-shell scroll-mt-28">
      <Reveal delay={130}>
        <SectionHeading
          eyebrow="Cleaning Process"
          title="How Ex-Terminator Works"
          description="A six-step automated workflow designed for efficient sludge removal from tank suspension."
          icon="workflow"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step}
              className="card-surface hover:border-cyan-300/45 hover:shadow-neon"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <p className="text-sm font-semibold text-cyan-300">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-100">{step}</h3>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default HowItWorksSection;