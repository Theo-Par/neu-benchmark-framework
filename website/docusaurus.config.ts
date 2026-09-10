import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Neuromorphic Benchmark Framework',
  tagline:
    'An open framework for reproducible benchmarking of neuromorphic computing systems.',

  favicon: 'img/e-brain.ico',

  future: {
    v4: true,
  },

  url: 'https://Theo-Par.github.io',

  baseUrl: '/neu-benchmark-framework/',

  organizationName: 'Theo-Par',

  projectName: 'neu-benchmark-framework',

  trailingSlash: false,

  onBrokenLinks: 'throw',

  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          routeBasePath: 'docs',

          // Enable this to add the "edit this page" links.
          //editUrl:
          //  'https://github.com/Theo-Par/neu-benchmark-framework/tree/main/website/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    navbar: {
      title: 'Neu Benchmark',

      logo: {
        alt: 'Neu Benchmark Logo',
        src: 'img/e-brain.svg',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },

        {
          to: '/benchmarks',
          label: 'Benchmarks',
          position: 'left',
        },

        {
          to: '/publications',
          label: 'Publications',
          position: 'left',
        },

        {
          href: 'https://github.com/Theo-Par/neu-benchmark-framework',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentation',

          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },

            {
              label: 'Framework',
              to: '/docs/framework/overview',
            },

            {
              label: 'Hardware',
              to: '/docs/hardware',
            },
          ],
        },

        {
          title: 'Resources',

          items: [
            {
              label: 'Publication',
              to: '/publications',
            },

            {
              label: 'Benchmarks',
              to: '/benchmarks',
            },
          ],
        },

        {
          title: 'Community',

          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Theo-Par/neu-benchmark-framework',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Theodoulos Parpounas`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      defaultMode: 'light',

      disableSwitch: false,

      respectPrefersColorScheme: true,
    },
  },
};

export default config;