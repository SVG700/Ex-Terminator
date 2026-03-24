const iconMap = {
  problem: (
    <path
      d="M12 3l9 16H3l9-16zm0 6v4m0 3h.01"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  solution: (
    <path
      d="M6 12l4 4 8-8M12 3a9 9 0 100 18 9 9 0 000-18z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  workflow: (
    <path
      d="M4 7h10m0 0l-3-3m3 3l-3 3M20 17H10m0 0l3-3m-3 3l3 3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  live: (
    <path
      d="M4 17l4-4 3 3 5-7 4 4M4 7h16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  components: (
    <path
      d="M8 8h8v8H8zM4 4h4M16 4h4M4 20h4M16 20h4M4 8h4M16 8h4M4 16h4M16 16h4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  performance: (
    <path
      d="M4 19h16M7 15l3-4 3 2 4-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  future: (
    <path
      d="M12 3l2.5 5L20 10l-4 4 .9 6L12 17l-4.9 3 .9-6-4-4 5.5-2L12 3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  mentorship: (
    <path
      d="M12 4l7 4v6c0 4-3 6-7 8-4-2-7-4-7-8V8l7-4zm0 5v4m0 3h.01"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  team: (
    <path
      d="M7 11a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm10 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM3.5 18a3.5 3.5 0 017 0m3-7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3 7a4.5 4.5 0 019 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  gallery: (
    <path
      d="M4 6h16v12H4zM8 11a1.2 1.2 0 100-2.4A1.2 1.2 0 008 11zm12 7l-5-5-4 4-2-2-5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  architecture: (
    <path
      d="M4 6h2v12H4zm7 0h2v12h-2zm7 0h2v12h-2zM4 6h16M4 12h16M4 18h16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  variants: (
    <path
      d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  scalability: (
    <path
      d="M4 18h16M6 14l3-3 3 2 4-5 2 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  challenges: (
    <path
      d="M12 2l2 3.5h4l-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5h4l2-3.5zm0 8v6M8 14h8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  innovation: (
    <path
      d="M12 2c2 0 3.5 1 4.5 2.5M12 2C9 2 7 3 6 4.5M4 12l2-1 2 2 3-4 2 1M20 12l-2-1-2 2-3-4-2 1M8 16h8v3H8z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  comparison: (
    <path
      d="M3 3h8v8H3zm10 0h8v8h-8zM4 13h6v6H4zm8 0h6v6h-6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  demo: (
    <path
      d="M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm4 10v3m4-3v3m4-3v3M10 9l2 2 4-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function SectionHeading({ eyebrow, title, description, icon }) {
  const headingIcon = icon ? iconMap[icon] : null;

  return (
    <div className="section-frame mb-12 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        {headingIcon && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-200">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              {headingIcon}
            </svg>
          </span>
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80 sm:text-sm">
          {eyebrow}
        </p>
      </div>
      <h2 className="heading-glow text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;