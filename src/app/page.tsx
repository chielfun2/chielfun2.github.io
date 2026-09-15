"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";

type Theme = "dark" | "light";

const projects = [
  {
    title: "Portfolio Hub",
    description:
      "A Next.js starter for presenting projects, demos, source code, and the skills behind them.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/chielfun2/chielfun2.github.io",
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
const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
const themeOptions: { label: Theme; value: Theme }[] = [
  { label: "light", value: "light" },
  { label: "dark", value: "dark" },
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const nextTheme: Theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : prefersLight ? "light" : "dark";

    setTheme(nextTheme);
    document.body.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground} />

        <nav className={styles.nav}>
          <a className={styles.logo} href="#">
            Chielfun2
          </a>

          <div className={styles.navActions}>
            <div className={styles.navLinks}>
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href}>
                  {label}
                </a>
              ))}
            </div>

            <div className={styles.themeToggleGroup} aria-label="Theme switcher">
              <button
                type="button"
                className={`${styles.themeButton} ${theme === "light" ? styles.themeButtonActive : ""}`}
                onClick={() => setTheme("light")}
                aria-pressed={theme === "light"}
                title="Light mode"
              >
                <span className={styles.themeEmoji}>☀️</span>
                <span className={styles.themeText}>Light</span>
              </button>
              <button
                type="button"
                className={`${styles.themeButton} ${theme === "dark" ? styles.themeButtonActive : ""}`}
                onClick={() => setTheme("dark")}
                aria-pressed={theme === "dark"}
                title="Dark mode"
              >
                <span className={styles.themeEmoji}>🌙</span>
                <span className={styles.themeText}>Dark</span>
              </button>
            </div>
          </div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>HVA Amsterdam • Software Engineering</p>
            <h1 className={styles.heroTitle}>
              Building software with <span className={styles.accent}>clarity, structure, and impact.</span>
            </h1>
            <p className={styles.heroText}>
              I’m a third-year software engineering student at the HVA in Amsterdam, focused on
              building clean interfaces, reliable systems, and products that are easy to trust.
            </p>

            <div className={styles.metaRow}>
              <span>3rd year</span>
              <span>Product-minded</span>
              <span>Open to opportunities</span>
            </div>

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
            <h2>Expanding my knowledge in product engineering and systems thinking.</h2>
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
              A small selection of work that reflects how I think about building products:
              practical, user-focused, and grounded in maintainable engineering.
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
          <h2>Let’s build something meaningful.</h2>
          <p>
            I’m looking to keep growing through real-world projects, collaborative teams, and
            opportunities where I can contribute with both technical thinking and a strong product
            mindset.
          </p>
          <div className={styles.contactLinks}>
            <a href="https://github.com/chielfun2" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/chiel-kramer-15b39b257" className={styles.linkedinLink}>
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

