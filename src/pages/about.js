import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

const skills = [
  'Node.js',
  'TypeScript',
  'React',
  'Solidity',
  'EVM',
  'AWS',
  'Python',
  'LLMs',
];

const links = [
  {label: 'GitHub', href: 'https://github.com/AnimeshKotka'},
  {label: 'LinkedIn', href: 'https://linkedin.com/in/animesh-kotka'},
  {label: 'X (Twitter)', href: 'https://x.com/animesh_kotka'},
  {label: 'Portfolio', href: 'https://animeshkotka.github.io/Animesh-Kotka-Portfolio/'},
];

export default function About() {
  return (
    <Layout
      title="About"
      description="About Animesh Kotka — full stack and blockchain developer, and the author of Ctrl + Kotka.">
      <main className={styles.page}>
        <div className="container">
          <div className={styles.profile}>
            <img
              src="https://avatars.githubusercontent.com/u/40909527"
              alt="Animesh Kotka"
              className={styles.avatar}
              width={160}
              height={160}
            />
            <div>
              <span className={styles.eyebrow}>About me</span>
              <Heading as="h1" className={styles.name}>
                Hi, I'm Animesh Kotka
              </Heading>
              <p className={styles.lead}>
                A full stack and blockchain developer who enjoys turning complex technology
                into clear, practical notes. Ctrl + Kotka is where I document what I learn —
                from AWS architecture to smart contracts to AI engineering.
              </p>
              <div className={styles.links}>
                {links.map(({label, href}) => (
                  <Link key={label} href={href} className="button button--outline button--primary">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            <section className={styles.panel}>
              <Heading as="h2">What I do</Heading>
              <ul>
                <li>Build backend services and web apps with Node.js and TypeScript.</li>
                <li>Design and integrate EVM smart contracts and blockchain systems.</li>
                <li>Architect cloud infrastructure on AWS.</li>
                <li>Explore LLMs, agentic AI and MLOps.</li>
              </ul>
            </section>
            <section className={styles.panel}>
              <Heading as="h2">Tech I work with</Heading>
              <div className={styles.skills}>
                {skills.map((s) => (
                  <span key={s} className={styles.skill}>
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
