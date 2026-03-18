import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const rows = [
  { metric: "Safety", traditional: "High human risk", modern: "Remote + protected" },
  { metric: "Efficiency", traditional: "Slow, inconsistent", modern: "Fast, repeatable" },
  { metric: "Automation", traditional: "Manual labor", modern: "Sensor-guided process" },
  { metric: "Scalability", traditional: "Resource-heavy", modern: "Modular deployment" },
];

function ComparisonSection() {
  return (
    <section id="comparison" className="section-shell scroll-mt-28">
      <Reveal delay={190}>
        <SectionHeading
          eyebrow="Performance"
          title="Traditional Method vs Ex-Terminator"
          description="Clear operational gains across critical treatment plant metrics."
          icon="performance"
        />

        <div className="overflow-x-auto rounded-2xl border border-cyan-400/20 bg-slate-900/55 backdrop-blur-sm">
          <table className="min-w-full text-left">
            <thead className="border-b border-cyan-400/20 bg-slate-950/60">
              <tr>
                <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">Metric</th>
                <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">
                  Traditional
                </th>
                <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">
                  Ex-Terminator
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-cyan-400/10 transition hover:bg-cyan-400/5 last:border-b-0"
                >
                  <td className="px-5 py-4 font-medium text-slate-100">{row.metric}</td>
                  <td className="px-5 py-4 text-slate-300">{row.traditional}</td>
                  <td className="px-5 py-4 font-medium text-cyan-100">{row.modern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

export default ComparisonSection;