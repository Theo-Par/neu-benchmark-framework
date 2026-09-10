import React from 'react';
import Layout from '@theme/Layout';

export default function Publications(): JSX.Element {
  return (
    <Layout
      title="Publications"
      description="Publications describing the Neuromorphic Benchmark Framework"
    >
      <main
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '4rem 2rem',
        }}
      >
        <h1>Publications</h1>

        <p>
          This page provides information about the publications describing the
          Neuromorphic Benchmark Framework.
        </p>

        <div
          style={{
            padding: '2rem',
            marginTop: '2rem',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '8px',
          }}
        >
          <h2>Publication details coming soon</h2>

          <p>
            The publications, citation information, supplementary material, and
            associated resources will be made available here.
          </p>
        </div>
      </main>
    </Layout>
  );
}