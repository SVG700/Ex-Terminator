import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const advantages = [
  {
    title: "No Water Contact",
    desc: "Suspended platform eliminates submersion corrosion damage"
  },
  {
    title: "Reduced Maintenance",
    desc: "Water-resistant design decreases service cycles by 75%"
  },
  {
    title: "Precise Movement",
    desc: "Pulley system ensures repeatable 1cm accuracy positioning"
  },
  {
    title: "Hybrid Cleaning",
    desc: "Rotating brush + suction pump for superior sludge removal"
  },
  {
    title: "Dual-Rope Stability",
    desc: "Two-point suspension prevents swing and ensures safety"
  },
  {
    title: "Modular Architecture",
    desc: "All components accessible without tank entry procedures"
  },
];

function SolutionSection() {
  return (
    <section id="solution" className="section-shell scroll-mt-28">
      <Reveal delay={100}>
        <SectionHeading
          eyebrow="The Solution"
          title="Cable-Suspended Robotic Cleaning System"
          description="Ex-Terminator replaces dangerous submerged robots with a suspended system that works from above, offering superior durability, safety, and cleaning efficiency."
          icon="solution"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="card-surface group hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-neon"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300/70">Advantage</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-100 transition group-hover:text-cyan-200">
                {advantage.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{advantage.desc}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default SolutionSection;