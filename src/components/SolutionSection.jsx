import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  "Tracked locomotion",
  "Sludge breaking mechanism",
  "Water jet system",
  "Suction system",
  "Modular design",
];

function SolutionSection() {
  return (
    <section id="solution" className="section-shell scroll-mt-28">
      <Reveal delay={100}>
        <SectionHeading
          eyebrow="The Solution"
          title="A Rugged Automation Platform for Sludge Removal"
          description="Ex-Terminator combines mechanical intelligence and modular engineering to automate hazardous cleaning workflows."
          icon="solution"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature}
              className="card-surface group hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-neon"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300/70">Feature</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-100 transition group-hover:text-cyan-200">
                {feature}
              </h3>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default SolutionSection;