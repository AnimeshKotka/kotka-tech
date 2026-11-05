import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const CloudIcon = () => (
  <svg {...iconProps}>
    <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78A6 6 0 0 0 4.5 12.5 3.5 3.5 0 0 0 6 19h11.5z" />
  </svg>
);

const SparkIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </svg>
);

const ChainIcon = () => (
  <svg {...iconProps}>
    <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
    <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
  </svg>
);

const PenIcon = () => (
  <svg {...iconProps}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
);

const TopicList = [
  {
    title: 'AWS Solutions Architect',
    Icon: CloudIcon,
    to: '/docs/category/aws',
    description:
      'Exam-focused notes on IAM, regions, availability zones and core AWS services for SAA-C03.',
  },
  {
    title: 'AI Engineering',
    Icon: SparkIcon,
    to: '/docs/category/ai-engineering',
    description:
      'A 6-month roadmap to AI engineering plus a Python-for-AI syntax cheat sheet.',
  },
  {
    title: 'Blockchain',
    Icon: ChainIcon,
    to: '/docs/category/blockchain',
    description:
      'Hashing, consensus and the fundamentals behind distributed ledgers and smart contracts.',
  },
  {
    title: 'Blog',
    Icon: PenIcon,
    to: '/blog',
    description:
      'Hands-on guides on developer tooling, workflows and the latest in tech.',
  },
];

function Topic({Icon, title, description, to}) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <Heading as="h3" className={styles.title}>
        {title}
      </Heading>
      <p className={styles.description}>{description}</p>
      <span className={styles.cta}>Explore →</span>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <Heading as="h2">What you'll find here</Heading>
          <p>Structured notes you can skim before an exam, an interview, or your next project.</p>
        </div>
        <div className={styles.grid}>
          {TopicList.map((props) => (
            <Topic key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
