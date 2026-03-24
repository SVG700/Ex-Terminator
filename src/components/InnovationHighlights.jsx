import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: "A",
    title: "Above-Water Cleaning System",
    description: "The robot operates above sludge surfaces, avoiding hazardous immersion and simplifying maintenance access."
  },
  {
    icon: "N",
    title: "No Direct Water Contact",
    description: "Suspended operation minimizes corrosion risk and improves long-term durability in harsh sewage environments."
  },
  {
    icon: "H",
    title: "Hybrid Cleaning Mechanism",
    description: "A rotating brush disrupts sludge while a suction unit extracts slurry, delivering consistent cleaning throughput."
  },
  {
    icon: "F",
    title: "Future-Ready Scalable Design",
    description: "The architecture supports a drone-assisted deployment extension for closed tanks without redesigning core cleaning logic."
  },
];

function InnovationHighlights() {
  return (
    <section id="innovation-highlights" className="section-shell scroll-mt-28">
      <Reveal delay={235}>
        <SectionHeading
          eyebrow="Key Innovations"
          title="What Makes Ex-Terminator Different"
          description="Core innovations that make the current prototype practical today and scalable for future deployment models."
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
