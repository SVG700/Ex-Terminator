import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const architecture = [
  {
    title: "Dual-Rope Suspension",
    description: "Two industrial-grade nylon ropes provide redundancy and prevent swing instability. Weight distributed equally across both attachment points."
  },
  {
    title: "Pulley Motor Drive",
    description: "DC gear motor with precise speed control enables repeatable 1cm positioning accuracy. Independent movement control for each axis."
  },
  {
    title: "Rotating Brush Assembly",
    description: "High-torque drone motor drives rotating brush at variable speeds (500-5000 RPM). Breaks compacted sludge deposits effectively."
  },
  {
    title: "Onboard Suction Pump",
    description: "Centrifugal pump removes loosened slurry directly into collection tank. No additional equipment required at tank site."
  },
  {
    title: "Sensor Array",
    description: "Three ultrasonic distance sensors + two HD cameras provide real-time feedback. Complete situational awareness during operation."
  },
  {
    title: "Modular Control System",
    description: "Four ESP32 units coordinate motor control, sensor fusion, and data logging. Completely programmable and updated remotely."
  },
];

function SystemArchitecture() {
  return (
    <section id="system-architecture" className="section-shell scroll-mt-28">
      <Reveal delay={175}>
        <SectionHeading
          eyebrow="Technical Architecture"
          title="System Design Overview"
          description="A comprehensive look at how each component works together to create a reliable, efficient sludge removal platform."
          icon="architecture"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {architecture.map((item, index) => (
            <article
              key={item.title}
              className="card-surface group hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-neon"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3 className="font-semibold text-cyan-200 group-hover:text-cyan-100 transition">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default SystemArchitecture;
