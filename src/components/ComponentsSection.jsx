import Reveal from "./Reveal";
import ComponentCard from "./ComponentCard";

const components = [
  {
    name: "ESP32 Microcontroller",
    description: "Control Unit",
    iconLabel: "MCU",
  },
  {
    name: "Breadboard",
    description: "Prototyping Platform",
    iconLabel: "BRD",
  },
  {
    name: "DC Motors",
    description: "Movement Mechanism",
    iconLabel: "MTR",
  },
  {
    name: "DC Pump Motor",
    description: "Sludge Suction",
    iconLabel: "PMP",
  },
  {
    name: "7.4V Li-ion Battery",
    description: "Power Supply",
    iconLabel: "BAT",
  },
  {
    name: "Jumper Wires",
    description: "Electrical Connections",
    iconLabel: "WR",
  },
];

function ComponentsSection() {
  return (
    <section id="components" className="section-shell scroll-mt-28 py-2">
      <Reveal delay={160}>
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">Hardware Stack</p>
          <h2 className="heading-glow mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
            Components Used
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Key hardware components used in building the Ex-Terminator system
          </p>
        </div>

        {/* Responsive grid: mobile 1, tablet 2, desktop 3 cards. */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((item, index) => (
            <ComponentCard
              key={item.name}
              name={item.name}
              description={item.description}
              iconLabel={item.iconLabel}
              delay={index * 60}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default ComponentsSection;