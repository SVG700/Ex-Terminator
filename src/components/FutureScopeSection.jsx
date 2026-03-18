import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const futureItems = ["AI automation", "Smart city integration", "Industrial scaling"];

function FutureScopeSection() {
  return (
    <section id="future-scope" className="section-shell scroll-mt-28">
      <Reveal delay={220}>
        <SectionHeading
          eyebrow="Future Scope"
          title="Roadmap for Expansion"
          description="The platform is designed to evolve into an intelligent, city-scale sanitation automation ecosystem."
          icon="future"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {futureItems.map((item) => (
            <article key={item} className="card-surface hover:border-cyan-300/45 hover:shadow-neon">
              <h3 className="text-xl font-semibold text-cyan-200">{item}</h3>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default FutureScopeSection;