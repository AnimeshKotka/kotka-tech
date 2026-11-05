// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const GITHUB_REPO = 'https://github.com/AnimeshKotka/kotka-tech';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  scripts: [{
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8107047368861875',
    async: true,
    crossorigin: 'anonymous'
  }],
  title: 'Ctrl + Kotka',
  tagline: 'Press to learn something new.',
  customFields: {
    subtagline:
      'Breaking things, fixing things, and writing it all down.',
  },
  favicon: 'img/test1.ico',

  // Set the production url of your site here
  // url: 'https://AnimeshKotka.github.io',
  url: 'http://test-demo-s3-11.s3-website.ap-south-1.amazonaws.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/kotka-tech',
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AnimeshKotka', // Usually your GitHub org/user name.
  projectName: 'kotka-tech', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
      },
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Animesh Kotka',
        url: 'https://animeshkotka.github.io/Animesh-Kotka-Portfolio/',
        sameAs: [
          'https://github.com/AnimeshKotka',
          'https://linkedin.com/in/animesh-kotka',
          'https://x.com/animesh_kotka',
        ],
      }),
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          exclude: ['**/demo', '**/tutorial-basics', '**/tutorial-extras'],
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AnimeshKotka/kotka-tech/tree/main',
        },
        blog: {
          // editUrl: `${GITHUB_REPO}/tree/main`,
          exclude: ['**/demo'],
          // showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // breadcrumbs: true,
          blogTitle: 'Ctrl + Kotka Blog',
          blogDescription:
            'Guides and write-ups on developer tooling, cloud, blockchain and AI.',
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Ctrl + Kotka Blog',
            copyright: `Copyright © ${new Date().getFullYear()} Animesh Kotka`,
          },
          editUrl: `${GITHUB_REPO}/tree/main`,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    '@docusaurus/theme-live-codeblock',
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: true,
        indexDocs: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcutHint: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/banner-dark.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'AWS, Solutions Architect, Blockchain, AI Engineering, Python, tutorials, developer notes',
        },
        {name: 'author', content: 'Animesh Kotka'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:creator', content: '@animesh_kotka'},
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'ai-roadmap-2026',
        content:
          '🚀 New: <a href="/docs/category/ai-engineering">AI Engineering notes</a> — a 6-month roadmap and a Python-for-AI cheat sheet.',
        isCloseable: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      navbar: {
        title: 'Ctrl + Kotka',
        hideOnScroll: true,
        logo: {
          alt: 'Ctrl + Kotka',
          src: 'img/logo-white.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Notes',
            position: 'left',
            items: [
              {label: 'AWS Solutions Architect', to: '/docs/category/aws'},
              {label: 'AI Engineering', to: '/docs/category/ai-engineering'},
              {label: 'Blockchain', to: '/docs/category/blockchain'},
              {type: 'html', value: '<hr class="dropdown-separator">'},
              {
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',
                label: 'Browse all docs',
              },
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {
            href: GITHUB_REPO,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Ctrl + Kotka',
          src: 'img/logo-dark.svg',
          width: 44,
          height: 38,
        },
        links: [
          {
            title: 'Notes',
            items: [
              {label: 'AWS Solutions Architect', to: '/docs/category/aws'},
              {label: 'AI Engineering', to: '/docs/category/ai-engineering'},
              {label: 'Blockchain', to: '/docs/category/blockchain'},
            ],
          },
          {
            title: 'Connect',
            items: [
              {label: 'LinkedIn', href: 'https://linkedin.com/in/animesh-kotka'},
              {label: 'X (Twitter)', href: 'https://x.com/animesh_kotka'},
              {label: 'GitHub', href: 'https://github.com/AnimeshKotka'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'About', to: '/about'},
              {
                label: 'Portfolio',
                href: 'https://animeshkotka.github.io/Animesh-Kotka-Portfolio/',
              },
              {label: 'RSS feed', href: 'pathname:///blog/rss.xml'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Animesh Kotka · Ctrl + Kotka. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: [
          'bash',
          'diff',
          'docker',
          'java',
          'solidity',
          'toml',
          'ini',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'error-next-line',
          },
          {
            className: 'code-block-success-line',
            line: 'success-next-line',
          },
        ],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
};

/**
 * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8107047368861875"
     crossorigin="anonymous"></script>
 */

export default config;
