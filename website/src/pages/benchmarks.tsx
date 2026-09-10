import React from 'react';
import Layout from '@theme/Layout';

export default function Benchmarks(): JSX.Element {
  return (
    <Layout
      title="Benchmarks"
      description="Neuromorphic Benchmarking Framework benchmark database"
    >
      <main
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '4rem 2rem',
        }}
      >
        <h1>Benchmarks</h1>

        <p>
          Explore standardized benchmark results for neuromorphic computing
          systems.
        </p>

        <div
          style={{
            padding: '2rem',
            marginTop: '2rem',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '8px',
          }}
        >
          <h2>Benchmark database coming soon</h2>

          <p>
            The interactive benchmark database is currently under development.
            It will provide searchable benchmark results across neuromorphic
            hardware, algorithms, datasets, and evaluation metrics.
          </p>
        </div>
      </main>
    </Layout>
  );
}