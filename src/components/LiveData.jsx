import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function LiveData() {
  const [liveMetrics, setLiveMetrics] = useState({
    sensorA: 48,
    sensorB: 61,
    sensorC: 37,
    motorOn: true,
    battery: 86,
    sludgeDetected: true,
    updatedAt: new Date(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLiveMetrics({
        sensorA: randomInt(10, 100),
        sensorB: randomInt(10, 100),
        sensorC: randomInt(10, 100),
        motorOn: Math.random() > 0.25,
        battery: randomInt(0, 100),
        sludgeDetected: Math.random() > 0.45,
        updatedAt: new Date(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Hardware integration point:
  // Replace simulated setInterval updates with incoming data from ESP32 WebSocket or REST API.
  // Example payload shape:
  // { sensorA, sensorB, sensorC, motorOn, battery, sludgeDetected, updatedAt }

  const cards = [
    {
      title: "Ultrasonic Sensor A",
      value: `${liveMetrics.sensorA} cm`,
      icon: (
        <path
          d="M4 12h16M7 8h.01M17 8h.01M7 16h.01M17 16h.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: "Ultrasonic Sensor B",
      value: `${liveMetrics.sensorB} cm`,
      icon: (
        <path
          d="M4 12h16M7 8h.01M17 8h.01M7 16h.01M17 16h.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: "Ultrasonic Sensor C",
      value: `${liveMetrics.sensorC} cm`,
      icon: (
        <path
          d="M4 12h16M7 8h.01M17 8h.01M7 16h.01M17 16h.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: "Motor Status",
      value: liveMetrics.motorOn ? "ON" : "OFF",
      valueClass: liveMetrics.motorOn ? "text-emerald-300" : "text-rose-300",
      icon: (
        <path
          d="M6 14l3-8 3 8 3-8 3 8M4 18h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: "Battery Level",
      value: `${liveMetrics.battery}%`,
      icon: (
        <path
          d="M5 9h14v6H5zM19 11h1.5v2H19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
      bar: liveMetrics.battery,
    },
    {
      title: "Sludge Detection",
      value: liveMetrics.sludgeDetected ? "Detected" : "Not Detected",
      valueClass: liveMetrics.sludgeDetected ? "text-amber-300" : "text-cyan-200",
      icon: (
        <path
          d="M12 3c4 5 6 7.7 6 10a6 6 0 01-12 0c0-2.3 2-5 6-10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
  ];

  return (
    <section id="live-data" className="section-shell scroll-mt-28">
      {/* Live monitoring dashboard */}
      <Reveal delay={175}>
        <SectionHeading
          eyebrow="Live Monitoring"
          title="Live System Data"
          description="Real-time telemetry simulation for core robot diagnostics. Designed to be replaced with ESP32 data streaming."
          icon="live"
        />

        <div className="rounded-2xl border border-cyan-300/30 bg-slate-950/50 p-3 shadow-neon sm:p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-cyan-400/20 bg-slate-900/75 px-4 py-2 text-sm">
            <div className="flex items-center gap-2 text-cyan-200">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
              Dashboard Stream Active
            </div>
            <p className="text-slate-300">
              Updated: {liveMetrics.updatedAt.toLocaleTimeString()}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group rounded-xl border border-cyan-400/20 bg-slate-900/75 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-neon"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/35 bg-cyan-300/10 text-cyan-200">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    {card.icon}
                  </svg>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {card.title}
                </p>
                <p className={`mt-2 text-2xl font-bold text-cyan-100 ${card.valueClass || ""}`}>
                  {card.value}
                </p>

                {typeof card.bar === "number" && (
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-200 transition-all duration-500"
                      style={{ width: `${card.bar}%` }}
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default LiveData;