function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 bg-slate-950/90 pt-12">
      <div className="section-shell">
        <div className="grid gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300/90">Project</p>
            <h3 className="mt-3 text-2xl font-bold heading-glow">Ex-Terminator</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Automated Sludge Removal System for safer sewage treatment plants.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300/90">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a href="#problem" className="transition hover:text-cyan-200">
                  Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="transition hover:text-cyan-200">
                  Solution
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition hover:text-cyan-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#mentor" className="transition hover:text-cyan-200">
                  Mentor and Team
                </a>
              </li>
              <li>
                <a href="#hero" className="transition hover:text-cyan-200">
                  Back to Top
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300/90">Leadership</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="text-cyan-100">Divya Rani</span> | Chief Mentor
              </li>
              <li>
                <span className="text-cyan-100">Samhith V Gupta</span> | Team Leader
              </li>
              <li>
                Team Ex-Terminator
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300/90">Presentation Note</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Built for hackathon showcase, industrial safety awareness, and startup-level product pitching.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cyan-400/15 py-5 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>Team Ex-Terminator</p>
          <p>&copy; {new Date().getFullYear()} Ex-Terminator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;