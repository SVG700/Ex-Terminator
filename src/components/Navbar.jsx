import { useEffect, useState } from "react";

const navItems = [
  { label: "Problem", target: "problem" },
  { label: "Solution", target: "solution" },
  { label: "Architecture", target: "system-architecture" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Live Data", target: "live-data" },
  { label: "Components", target: "components" },
  { label: "Challenges", target: "engineering-challenges" },
  { label: "Innovation", target: "innovation-highlights" },
  { label: "Why Us", target: "why-our-approach" },
  { label: "Mentor", target: "mentor" },
  { label: "Team", target: "team" },
  { label: "Gallery", target: "gallery" },
];

const navIcons = {
  problem: "M12 3l9 16H3l9-16zm0 6v4m0 3h.01",
  solution: "M6 12l4 4 8-8M12 3a9 9 0 100 18 9 9 0 000-18z",
  "system-architecture": "M4 6h2v12H4zm7 0h2v12h-2zm7 0h2v12h-2zM4 6h16M4 12h16M4 18h16",
  "how-it-works": "M4 7h10m0 0l-3-3m3 3l-3 3M20 17H10m0 0l3-3m-3 3l3 3",
  "live-data": "M4 17l4-4 3 3 5-7 4 4M4 7h16",
  components: "M8 8h8v8H8zM4 4h4M16 4h4M4 20h4M16 20h4",
  "engineering-challenges": "M12 2l2 3.5h4l-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5h4l2-3.5zm0 8v6M8 14h8",
  "innovation-highlights": "M12 2c2 0 3.5 1 4.5 2.5M12 2C9 2 7 3 6 4.5M4 12l2-1 2 2 3-4 2 1M20 12l-2-1-2 2-3-4-2 1M8 16h8v3H8z",
  "why-our-approach": "M3 3h8v8H3zm10 0h8v8h-8zM4 13h6v6H4zm8 0h6v6h-6z",
  mentor: "M12 4l7 4v6c0 4-3 6-7 8-4-2-7-4-7-8V8l7-4z",
  team: "M7 11a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm10 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5z",
  gallery: "M4 6h16v12H4zM8 11a1.2 1.2 0 100-2.4A1.2 1.2 0 008 11zm12 7l-5-5-4 4-2-2-5 5",
};

function NavIcon({ target }) {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d={navIcons[target]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navbar() {
  const [activeTarget, setActiveTarget] = useState("problem");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.target))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveTarget(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-cyan-400/15 bg-slate-950/80 backdrop-blur-xl">
      <nav className="section-shell" aria-label="Primary">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="text-lg font-bold tracking-wide text-cyan-300">
            Ex-Terminator
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.target}>
                <a
                  href={`#${item.target}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition ${
                    activeTarget === item.target
                      ? "text-cyan-200"
                      : "text-slate-200 hover:text-cyan-300"
                  }`}
                  aria-current={activeTarget === item.target ? "page" : undefined}
                >
                  <NavIcon target={item.target} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#solution"
            className="rounded-full border border-cyan-300/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200 transition hover:bg-cyan-400/10 md:text-sm"
          >
            Explore
          </a>
        </div>

        <div className="-mx-1 flex gap-2 overflow-x-auto pb-3 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                activeTarget === item.target
                  ? "border-cyan-300/70 bg-cyan-400/15 text-cyan-100"
                  : "border-cyan-400/25 bg-slate-900/60 text-slate-200 hover:border-cyan-300/60 hover:text-cyan-200"
              }`}
              aria-current={activeTarget === item.target ? "page" : undefined}
            >
              <NavIcon target={item.target} />
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;