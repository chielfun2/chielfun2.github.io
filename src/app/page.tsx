import styles from "./page.module.scss";

const projects = [
  {
    title: "Portfolio Hub",
    description:
      "A Next.js starter for presenting projects, demos, source code, and the skills behind them.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
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
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <nav className={styles.nav}>
          <a className={styles.logo} href="#">
            Chielfun2
          </a>
          <div className={styles.navLinks}>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>Frontend developer portfolio</p>
            <h1 className={styles.heroTitle}>A clean hub for the projects I build.</h1>
            <p className={styles.heroText}>
              Showcase your best work, explain your technical choices, and make it easy for companies
              to view demos, source code, and contact details.
            </p>
            <div className={styles.actions}>
              <a href="#projects" className={styles.primaryButton}>
                View projects
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Contact me
              </a>
            </div>
          </div>

          <div className={styles.focusCard}>
            <p className={styles.cardLabel}>Current focus</p>
            <h2>Building useful, polished web apps.</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skillPill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Selected work</p>
            <h2>Projects</h2>
            <p>
              Start with three strong projects. For each one, show what it does, what you used, and
              why it matters.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <a key={project.title} href={project.href} className={styles.projectCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techList}>
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <span className={styles.cardLink}>View details →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactCard}>
          <h2>Ready for opportunities.</h2>
          <p>
            Add your email, GitHub, LinkedIn, and CV link here when you are ready to share the hub.
          </p>
          <div className={styles.contactLinks}>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a className={styles.emailLink} href="mailto:you@example.com">
              Email me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
