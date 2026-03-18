import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const members = [
  {
    name: "Samhith V Gupta",
    title: "Project Director & Lead Systems Architect",
    rank: "Team Leader",
    featured: true,
  },
  {
    name: "Madhan B V",
    title: "Robotics and Motion Control Engineer",
    rank: "Core Team",
    featured: false,
  },
  {
    name: "Avyum Chhettri",
    title: "Embedded Electronics and Sensor Engineer",
    rank: "Core Team",
    featured: false,
  },
  {
    name: "Skanda Naik",
    title: "Mechanical Design and Integration Engineer",
    rank: "Core Team",
    featured: false,
  },
];

function TeamSection() {
  return (
    <section id="team" className="section-shell scroll-mt-28">
      <Reveal delay={280}>
        <SectionHeading
          eyebrow="Team"
          title="Built by a Multi-Disciplinary Team"
          description="A clearly structured team with defined ownership across systems, electronics, and mechanical design."
          icon="team"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.name}
              className={`card-surface text-center hover:border-cyan-300/45 ${
                member.featured ? "border-cyan-300/60 shadow-neon" : ""
              }`}
            >
              <p
                className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  member.featured
                    ? "bg-cyan-300/15 text-cyan-200"
                    : "bg-slate-800/80 text-slate-300"
                }`}
              >
                {member.rank}
              </p>

              <div
                className={`mx-auto mb-4 h-14 w-14 rounded-full border bg-cyan-400/10 ${
                  member.featured ? "border-cyan-200/70" : "border-cyan-300/40"
                }`}
              />

              <h3 className="text-lg font-semibold text-slate-100">{member.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cyan-100/90">{member.title}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default TeamSection;