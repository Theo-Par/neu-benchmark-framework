import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Introducing New Metrics',
    Svg: require('@site/static/img/idea-svgrepo-com.svg').default,
    description: (
      <>
        Introducing Energy-per-TCU and Energy-per-Neuron, which are task-
        and plaform-platform agnostic energy metrics that enable meaningful
        efficiency comparisons across diverse neuromorphic systems.
      </>
    ),
  },
  {
    title: 'Unifying Neuromorphic Systems',
    Svg: require('@site/static/img/merge-svgrepo-com.svg').default,
    description: (
      <>
        Providing a common benchmarking framework that brings together
        fundamentally different neuromorphic architectures, technologies,
        and application domains.
      </>
    ),
  },
  {
    title: 'Revealing Technological Trends',
    Svg: require('@site/static/img/trend-svgrepo-com.svg').default,
    description: (
      <>
        Enabling benchmark data to reveal emerging relationships between energy
        efficiency, system complexity, connectivity, and architectural design.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
