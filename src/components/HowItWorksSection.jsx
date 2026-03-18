import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  "Deployment",
  "Detection using ultrasonic sensors",
  "Sludge breakdown",
  "Water jet loosening",
  "Suction extraction",
  "Disposal",
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-shell scroll-mt-28">
      <Reveal delay={130}>
        <SectionHeading
          eyebrow="Workflow"
          title="How Ex-Terminator Works"
          description="A step-by-step automated process engineered for consistency and safety."
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