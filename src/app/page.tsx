const projects = [
  {
    title: "Portfolio Hub",
    description:
      "A Next.js starter for presenting projects, demos, source code, and the skills behind them.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Project Two",
    description:
      "Replace this card with one of your real projects and link to the live demo or GitHub repository.",
    tech: ["React", "API", "UI"],
    href: "#",
  },
  {
    title: "Project Three",
    description:
      "Use this space to explain the problem, your solution, and what you learned while building it.",
    tech: ["Frontend", "Design", "Deployment"],
    href: "#",
  },
];

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub", "Responsive UI"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.35),_transparent_32rem),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.18),_transparent_28rem)]" />
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <a className="text-lg font-bold tracking-tight" href="#">
            Chielfun2
          </a>
          <div className="flex gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200">
              Frontend developer portfolio
            </p>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              A clean hub for the projects I build.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Showcase your best work, explain your technical choices, and make it easy for companies
              to view demos, source code, and contact details.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-violet-200"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
              Current focus
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white">Building useful, polished web apps.</h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">Projects</h2>
            <p className="mt-4 text-slate-300">
              Start with three strong projects. For each one, show what it does, what you used, and
              why it matters.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.06]"
              >
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
                      {item}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-block text-sm font-semibold text-violet-200 transition group-hover:text-white">
                  View details →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
          <h2 className="text-3xl font-black text-white">Ready for opportunities.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Add your email, GitHub, LinkedIn, and CV link here when you are ready to share the hub.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <a className="rounded-full border border-white/15 px-5 py-3 text-white hover:border-white/40" href="#">
              GitHub
            </a>
            <a className="rounded-full border border-white/15 px-5 py-3 text-white hover:border-white/40" href="#">
              LinkedIn
            </a>
            <a className="rounded-full bg-violet-400 px-5 py-3 text-slate-950 hover:bg-violet-300" href="mailto:you@example.com">
              Email me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
