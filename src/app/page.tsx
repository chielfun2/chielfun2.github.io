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
    title: "Poker Game",
    description:
      "A working poker game I built to learn C++ from the ground up, then wrapped in a Next.js front-end so it can be played through a UI instead of just the terminal.",
    tech: ["C++", "Next.js", "React", "TypeScript"],
    href: "https://github.com/chielfun2/poker-game",
  },
  {
    title: "Coming Soon",
    description:
      "A new project is in the works. Check back later to see what I'm building next.",
    tech: ["TBD"],
    href: "#",
  },
];

const skills = ["Kotlin", "DevOps", "Git", "Next.js", "React", "TypeScript"];

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
            <p className={styles.eyebrow}>3rd year Software Engineer Student</p>
            <h1 className={styles.heroTitle}>
              A hub for the <span className={styles.accent}>projects I build.</span>
            </h1>
            <p className={styles.heroText}>
              I am a third year student at HVA, studying Software Engineering. I am passionate about building web applications and continuously improving my skills in front-end and back-end development.
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
            <h2>Expanding my knowledge in these areas</h2>
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
            <a href="https://github.com/chielfun2" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chiel-kramer-15b39b257"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className={styles.emailLink} href="mailto:chielkramer04@gmail.com">
              Email me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
