import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const challenges = [
  {
    challenge: "Swing Stabilization",
    solution: "Dual-rope system with synchronized motor control prevents lateral movement. Weight balancing and damping algorithms reduce oscillation to <2°."
  },
  {
    challenge: "Suction Efficiency",
    solution: "Wide-diameter intake pipe (8cm) minimizes friction loss. Pump positioned close to tank bottom for gravity-assisted slurry movement."
  },
  {
    challenge: "Precise Positioning",
    solution: "Pulley encoders provide feedback control. Servo motors on horizontal/vertical axes achieve ±1cm accuracy at any depth."
  },
  {
    challenge: "Water Intrusion Prevention",
    solution: "IP67-rated electronics enclosure with desiccant packs. Sealed motor compartments and waterproof connectors throughout."
  },
  {
    challenge: "Long-Duration Operation",
    solution: "High-capacity modular battery system with hot-swap capability. Can operate continuously for 8+ hours between charges."
  },
  {
    challenge: "Remote Safety Control",
    solution: "Dual-channel emergency stop system. Wireless control link with encrypted connection and 500m range. Manual override always available."
  },
];

function EngineeringChallenges() {
  return (
    <section id="engineering-challenges" className="section-shell scroll-mt-28">
      <Reveal delay={205}>
        <SectionHeading
          eyebrow="Design Solutions"
          title="Engineering Challenges & Solutions"
          description="Complex technical challenges solved through innovative mechanical and electrical design."
          icon="challenges"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {challenges.map((item, index) => (
            <article
              key={item.challenge}
              className="card-surface group hover:border-cyan-300/45 hover:shadow-neon"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/15 text-xs font-bold text-cyan-300">
                  ✓
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-cyan-200 group-hover:text-cyan-100">
                    {item.challenge}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.solution}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default EngineeringChallenges;
