import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroText}>
          <span className={styles.badge}>Notes · Tutorials · Guides</span>
          <Heading as="h1" className={styles.heroTitle}>
            <ThemedImage
              alt={siteConfig.title}
              className={styles.banner}
              sources={{
                light: useBaseUrl('/img/banner-white.png'),
                dark: useBaseUrl('/img/banner-dark.png'),
              }}
            />
          </Heading>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <p className={styles.heroSubtitle}>{siteConfig.customFields.subtagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/category/aws">
              Browse the notes
            </Link>
            <Link className="button button--secondary button--outline button--lg" to="/blog">
              Read the blog
            </Link>
          </div>
        </div>
        <div className={styles.heroCard}>
          <img
            src="https://avatars.githubusercontent.com/u/40909527"
            alt="Animesh Kotka"
            className={styles.avatar}
            width={120}
            height={120}
          />
          <div className={styles.heroCardName}>Animesh Kotka</div>
          <div className={styles.heroCardRole}>Full Stack &amp; Blockchain Developer</div>
          <ul className={styles.stats}>
            <li><strong>AWS</strong><span>Cloud</span></li>
            <li><strong>Web3</strong><span>Blockchain</span></li>
            <li><strong>LLMs</strong><span>AI</span></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function FeaturedPost() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Featured article</Heading>
          <Link to="/blog">View all posts →</Link>
        </div>
        <Link to="/blog/managing-multiple-github-accounts" className={styles.featured}>
          <div>
            <span className={styles.featuredTag}>Git · SSH</span>
            <Heading as="h3" className={styles.featuredTitle}>
              Managing Multiple GitHub Accounts with SSH
            </Heading>
            <p className={styles.featuredText}>
              Work and personal accounts on one machine, without ever pushing with the
              wrong identity. A step-by-step guide to SSH keys and host aliases.
            </p>
            <span className={styles.readMore}>Read the guide →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function ConnectBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.connect}>
          <div>
            <Heading as="h2" className={styles.connectTitle}>
              Need help building something?
            </Heading>
            <p className={styles.connectText}>
              I build web and blockchain solutions for businesses. Let's talk about your idea.
            </p>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--lg button--secondary"
              href="https://linkedin.com/in/animesh-kotka">
              Connect on LinkedIn
            </Link>
            <Link
              className={clsx('button button--lg', styles.ghostButton)}
              href="https://animeshkotka.github.io/Animesh-Kotka-Portfolio/">
              View portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Cloud, Blockchain & AI notes"
      description={`${siteConfig.tagline} ${siteConfig.customFields.subtagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <FeaturedPost />
        <ConnectBanner />
      </main>
    </Layout>
  );
}
