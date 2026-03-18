import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const hardware = [
  "ESP32 (x4)",
  "Drone motors (x4)",
  "Ultrasonic sensors (x3)",
  "Camera module",
  "Jumper wires",
  "Data cables",
  "Battery system",
];

function ComponentsSection() {
  return (
    <section id="components" className="section-shell scroll-mt-28">
      <Reveal delay={160}>
        <SectionHeading
          eyebrow="Hardware Stack"
          title="Components Powering the System"
          description="An industrial-focused component architecture selected for reliability and maintainability."
          icon="components"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hardware.map((item) => (
            <article key={item} className="card-surface py-5 text-center hover:border-cyan-300/45">
              <h3 className="font-semibold text-slate-100">{item}</h3>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default ComponentsSection;