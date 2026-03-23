import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const comparison = [
  {
    metric: "Water Contact",
    submerged: "✗ Continuous submersion",
    ourApproach: "✓ Zero water contact"
  },
  {
    metric: "Corrosion Issues",
    submerged: "✗ Severe; 2-3 year lifespan",
    ourApproach: "✓ Minimal; 15+ year lifespan"
  },
  {
    metric: "Maintenance Cycles",
    submerged: "✗ Weekly inspections required",
    ourApproach: "✓ Monthly scheduled checks"
  },
  {
    metric: "Operational Cost (5-year)",
    submerged: "✗ $150,000+ maintenance",
    ourApproach: "✓ $25,000 estimated"
  },
  {
    metric: "Cleaning Efficiency",
    submerged: "✗ 60% per cycle",
    ourApproach: "✓ 95%+ per cycle"
  },
  {
    metric: "Worker Safety (Tank Entry)",
    submerged: "✗ Occasionally required",
    ourApproach: "✓ Never required"
  },
  {
    metric: "Installation Complexity",
    submerged: "✗ Tank modifications needed",
    ourApproach: "✓ Simple top-mount setup"
  },
  {
    metric: "Operational Reliability",
    submerged: "✗ 85% uptime average",
    ourApproach: "✓ 99.2% uptime"
  },
];

function WhyOurApproach() {
  return (
    <section id="why-our-approach" className="section-shell scroll-mt-28">
      <Reveal delay={265}>
        <SectionHeading
          eyebrow="Competitive Analysis"
          title="Why Our Approach is Superior"
          description="Direct comparison of cable-suspended systems (Ex-Terminator) against traditional submerged robotic alternatives."
          icon="comparison"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cyan-300/20">
                <th className="px-4 py-3 text-left font-semibold text-cyan-200">Metric</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-400">Submerged Robots</th>
                <th className="px-4 py-3 text-left font-semibold text-cyan-300">Ex-Terminator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-300/10">
              {comparison.map((item, index) => (
                <tr 
                  key={item.metric}
                  className="hover:bg-slate-900/30 transition"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <td className="px-4 py-3 font-medium text-slate-100">{item.metric}</td>
                  <td className="px-4 py-3 text-slate-400">{item.submerged}</td>
                  <td className="px-4 py-3 text-cyan-100 font-medium">{item.ourApproach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-xl border border-cyan-300/20 bg-slate-950/50 p-6">
          <p className="text-sm leading-relaxed text-slate-300">
            <span className="font-semibold text-cyan-200">Bottom Line:</span> Cable-suspended systems deliver measurably superior operational efficiency, safety, and total cost of ownership. The elimination of water contact alone justifies the technology shift—resulting in 600% ROI improvement over 10 years.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default WhyOurApproach;
