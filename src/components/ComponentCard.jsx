function ComponentCard({ name, description, iconLabel, delay = 0 }) {
  return (
    <article
      className="group card-surface rounded-2xl border border-cyan-300/25 bg-slate-900/55 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-300/55 hover:shadow-neon"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Simple icon placeholder to keep the section clean and visual. */}
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-xs font-bold uppercase tracking-[0.08em] text-cyan-200">
        {iconLabel}
      </div>

      <h3 className="text-lg font-bold text-slate-100 transition group-hover:text-cyan-100">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
    </article>
  );
}

export default ComponentCard;
