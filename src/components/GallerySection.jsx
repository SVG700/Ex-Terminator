import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const placeholders = [1, 2, 3, 4, 5, 6];

function GallerySection() {
  return (
    <section id="gallery" className="section-shell scroll-mt-28">
      <Reveal delay={310}>
        <SectionHeading
          eyebrow="Gallery"
          title="Prototype and Field Showcase"
          description="Replace placeholders with real prototype photos, demo snapshots, and test visuals."
          icon="gallery"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 transition group-hover:bg-slate-950/40">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200/85">
                  Image Placeholder {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default GallerySection;