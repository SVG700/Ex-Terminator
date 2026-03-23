import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const hardware = [
  "ESP32 Microcontroller (x4)",
  "Drone Motors - Brush Drive",
  "DC Gear Motor - Pulley",
  "Servo Motors - Precision Control",
  "Ultrasonic Sensors (x3)",
  "HD Cameras (x2)",
  "Centrifugal Pump System",
  "High-Capacity Battery Pack",
];

function ComponentsSection() {
  return (
    <section id="components" className="section-shell scroll-mt-28">
      <Reveal delay={160}>
        <SectionHeading
          eyebrow="Hardware Stack"
          title="Components Powering the System"
          description="Industrial-grade components selected for reliability, precision control, and long operational life in harsh environments."
          icon="components"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hardware.map((item) => (
            <article 
              key={item} 
              className="card-surface py-6 px-4 text-center group hover:border-cyan-300/45 hover:shadow-neon hover:-translate-y-1"
            >
              <h3 className="font-semibold text-slate-100 group-hover:text-cyan-200 transition">{item}</h3>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default ComponentsSection;