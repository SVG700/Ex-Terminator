import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function MentorSection() {
  return (
    <section id="mentor" className="section-shell scroll-mt-28">
      <Reveal delay={250}>
        <SectionHeading
          eyebrow="Mentorship"
          title="Leadership and Strategic Guidance"
          description="Mentor leadership is positioned above the team structure to reflect oversight, direction, and project governance."
          icon="mentorship"
        />

        <div className="mx-auto max-w-xl">
          <article className="card-surface border-cyan-300/60 text-center shadow-neon hover:border-cyan-200/80">
            <p className="mb-4 inline-flex rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Chief Mentor
            </p>

            <div className="mx-auto mb-4 h-14 w-14 rounded-full border border-cyan-200/70 bg-cyan-400/10" />

            <h3 className="text-2xl font-bold heading-glow">Divya Rani</h3>
            <p className="mt-2 text-sm leading-relaxed text-cyan-100/90">
              Senior Technical Mentor and Project Strategy Advisor
            </p>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

export default MentorSection;