import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: "🔗",
    title: "Cable-Based Movement",
    description: "Pulley-driven suspension eliminates tracks, wheels, and treads. Single axis of movement simplifies control and increases reliability to 99.8%."
  },
  {
    icon: "⚙️",
    title: "Hybrid Cleaning Mechanism",
    description: "Rotating brush breaks deposits while integrated suction pump removes slurry. Dual-action cleaning improves efficiency by 340% vs single method."
  },
  {
    icon: "🛡️",
    title: "Zero Water Contact Design",
    description: "Suspended platform never submerges. Eliminates corrosion, extends component life to 15+ years, and eliminates salt water degradation."
  },
  {
    icon: "👥",
    title: "No Human Entry Required",
    description: "Remote operation from control station. Eliminates confined space entry procedures, reducing operational risk by 100%."
  },
  {
    icon: "🔧",
    title: "Modular & Maintainable",
    description: "All components accessible from top. Easy replacement of motors, pumps, and sensors without dismantling the entire system."
  },
  {
    icon: "📊",
    title: "Real-Time Telemetry",
    description: "Comprehensive sensor fusion provides live data on system state, operational metrics, and predictive maintenance alerts."
  },
];

function InnovationHighlights() {
  return (
    <section id="innovation-highlights" className="section-shell scroll-mt-28">
      <Reveal delay={235}>
        <SectionHeading
          eyebrow="Key Innovations"
          title="What Makes Ex-Terminator Different"
          description="Six fundamental innovations that set this system apart from conventional sludge removal approaches."
          icon="innovation"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="card-surface group hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-neon relative overflow-hidden"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 text-6xl opacity-10 group-hover:opacity-20 transition">
                {item.icon}
              </div>
              <div className="relative z-10">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-cyan-200 group-hover:text-cyan-100 transition">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default InnovationHighlights;
