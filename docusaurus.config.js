// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '蓋索林 Gasolin',
  tagline: '人們總是高估一年可以完成的事，卻低估十年能完成的事',
  url: 'https://blog.gasolin.idv.tw/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gasolin', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/gasolin/blog/edit/main/website/',
        // },
        // docs: false,
        blog: {
          blogDescription: '人們總是高估一年可以完成的事，卻低估十年能完成的事',
          routeBasePath: '/', //blog only
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gasolin/blog/edit/main/website/blog/',
          remarkPlugins: [
            [
              require('remark-emoji'), {padSpaceAfter: true}],
              // [require('remark-plugin-twemoji'), { size: '12x12', ext: '.svg' }],
              require('mdx-mermaid'), // charts
              require('remark-pangu'), // chinese/english space
              require('remark-oembed'), // youtube, twitter
          ],
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // sitemap: {
        //   changefreq: 'weekly',
        //   priority: 0.5,
        //   trailingSlash: false,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '蓋索林 Gasolin',
        logo: {
          alt: 'gasolin blog',
          src: 'img/avatar.jpg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/tags', label: 'Tags', position: 'left'},
          {
            href: 'https://gasolin.idv.tw/',
            label: 'Homepage',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'Personal',
            items: [
              {
                label: 'Homepage',
                href: 'https://www.gasolin.idv.tw',
              },
              {
                label: 'Blog',
                href: 'https://blog.gasolin.idv.tw',
              },
              {
                label: 'Traveled',
                href: 'http://www.mytravelmap.tk/u/gg112695256249584453237',
              }
            ],
          },
          {
            title: 'Career',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/gasolin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} gasolin. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAnalytics: {
        trackingID: 'UA-2833924-9',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
    }),
};

module.exports = config;
