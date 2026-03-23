import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const basePath = import.meta.env.BASE_URL;

// Video data for the demo section
const demoVideos = [
  {
    id: "demo-clip-1",
    label: "System Demo Clip 1",
    description: "Cable-suspended Ex-Terminator operation demo.",
    src: `${basePath}videos/demo1.mp4`,
    poster: `${basePath}favicon.svg`,
  },
  {
    id: "demo-clip-2",
    label: "System Demo Clip 2",
    description: "Cable-suspended Ex-Terminator operation demo.",
    src: `${basePath}videos/demo2.mp4`,
    poster: `${basePath}favicon.svg`,
  },
];

function ProjectDemo() {
  return (
    <section id="project-demo" className="section-shell scroll-mt-28">
      <Reveal delay={205}>
        <div className="flex flex-col items-center">
          {/* Section heading */}
          <SectionHeading
            eyebrow="Live Demonstration"
            title="Project Demo"
            description="Watch how the Ex-Terminator operates using a cable-suspended system to efficiently remove sludge without human intervention."
            icon="demo"
          />

          {/* Videos grid */}
          <div className="mt-12 grid gap-6 w-full sm:grid-cols-1 lg:grid-cols-2 max-w-5xl">
            {demoVideos.map((video, index) => (
              <article
                key={video.id}
                className="flex flex-col"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Video label */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-cyan-200">{video.label}</h3>
                  <p className="mt-1 text-sm text-slate-400">{video.description}</p>
                </div>

                {/* Video container with frame */}
                <div className="relative group overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-900/40 p-1 shadow-2xl">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 via-transparent to-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Video element */}
                  <div className="relative overflow-hidden rounded-xl bg-black aspect-video group-hover:scale-105 transition-transform duration-500">
                    <video
                      controls
                      poster={video.poster}
                      className="h-full w-full object-cover"
                      aria-label={video.label}
                    >
                      <source src={video.src} type="video/mp4" />
                      <p className="absolute inset-0 flex items-center justify-center text-slate-300">
                        Your browser does not support the video tag. Please use Chrome, Firefox, or Safari.
                      </p>
                    </video>

                    {/* Fallback overlay if video doesn't load */}
                    <div className="absolute inset-0 hidden items-center justify-center bg-slate-950/70 backdrop-blur-sm group-hover:hidden">
                      <div className="text-center">
                        <p className="text-sm text-cyan-300/70">Video Loading...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Instructions below videos */}
          <div className="mt-12 rounded-lg border border-cyan-300/20 bg-slate-900/40 p-6 max-w-2xl w-full">
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-cyan-300">Demo Note:</span> Both clips show the same
              Ex-Terminator workflow from similar runs. They are intentionally labeled as clip 1 and clip 2
              for clean presentation.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ProjectDemo;
