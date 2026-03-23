import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SystemArchitecture() {
  // Get the base URL from Vite's import.meta.env
  const basePath = import.meta.env.BASE_URL;
  // Cache-busting query ensures GitHub Pages serves the latest uploaded SVG.
  const imageSrc = `${basePath}Ex-terminator.svg?v=20260323-1`;

  return (
    <section id="system-architecture" className="section-shell scroll-mt-28">
      <Reveal delay={175}>
        <div className="flex flex-col items-center">
          {/* Section heading */}
          <SectionHeading
            eyebrow="Technical Overview"
            title="System Architecture"
            description="The Ex-Terminator uses a cable-suspended robotic system to safely operate above sludge environments while performing efficient cleaning using a rotating brush and suction mechanism."
            icon="architecture"
          />

          {/* Centered image container */}
          <div className="relative mt-12 w-full max-w-4xl">
            {/* Outer frame with glow effect */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-900/40 p-1 shadow-2xl">
              {/* Inner glow background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 via-transparent to-cyan-500/10 blur-2xl" />

              {/* Actual image container */}
              <div className="relative overflow-hidden rounded-xl bg-black min-h-[400px]">
                <img
                  src={imageSrc}
                  alt="Cable-Suspended Sludge Removal System Architecture"
                  className="h-auto w-full transition-transform duration-500 hover:scale-105 object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                {/* Fallback overlay if image doesn't load */}
                <div className="absolute inset-0 hidden items-center justify-center bg-slate-950/50 backdrop-blur-sm">
                  <div className="text-center">
                    <p className="text-sm text-cyan-300/70">Image Not Found</p>
                    <p className="mt-2 text-xs text-slate-400">
                      Ensure /Ex-terminator.svg exists in public folder
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border border-cyan-400/30 bg-cyan-400/5" />
            <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full border border-cyan-400/20 bg-cyan-400/5" />
          </div>

          {/* Caption below image */}
          <p className="mt-8 max-w-2xl text-center text-sm text-slate-400">
            <span className="font-semibold text-cyan-300">Figure:</span> Cable-Suspended Sludge
            Removal System Architecture – Pulley-driven robot with rotating brush and integrated
            suction mechanism
          </p>

          {/* Key benefits grid below caption */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3 w-full max-w-3xl">
            <div className="rounded-lg border border-cyan-300/20 bg-slate-900/40 p-4 text-center">
              <p className="text-2xl font-bold text-cyan-300">↔️</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
                Horizontal Movement
              </p>
              <p className="mt-1 text-sm text-slate-400">Precise pulley-driven positioning</p>
            </div>

            <div className="rounded-lg border border-cyan-300/20 bg-slate-900/40 p-4 text-center">
              <p className="text-2xl font-bold text-cyan-300">⚙️</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
                Rotating Brush
              </p>
              <p className="mt-1 text-sm text-slate-400">Breaks sludge with variable speeds</p>
            </div>

            <div className="rounded-lg border border-cyan-300/20 bg-slate-900/40 p-4 text-center">
              <p className="text-2xl font-bold text-cyan-300">💨</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
                Suction System
              </p>
              <p className="mt-1 text-sm text-slate-400">Removes slurry efficiently</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default SystemArchitecture;

