// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'rescoped',
    tagline: 'Advanced tooling for cutting edge engineers',
    url: 'https://avodaq-dev.github.io',
    baseUrl: '/rescoped-site/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/fav_re.svg',
    trailingSlash: true, //for GitHub
    organizationName: 'avodaq-dev', // Usually your GitHub org/user name.
    projectName: 'rescoped-site', // Usually your repo name.
    deploymentBranch: 'main',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: [require.resolve('./src/scss/styles.scss')],
                },
            }),
        ],
    ],

    plugins: ['docusaurus-plugin-sass'],


    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: 'support_us',
                content:
                    'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',

                isCloseable: true,
            },
            navbar: {
                hideOnScroll: true,
                logo: {
                    alt: 'rescoped logo',
                    src: 'img/re_logo.svg',
                    srcDark: 'img/re_logo_dark.svg',
                },
                items: [
                    {
                        label: 'learn',
                        position: 'left',
                        items: [
                            {
                                href: 'https://www.hyper.rescoped.io',
                                label: 'hyperdocs',
                                target: '_blank',
                                rel: null,
                            }, {
                                href: 'https://www.super.rescoped.io',
                                label: 'superdocs',
                                target: '_blank',
                                rel: null,
                            },

                        ],
                    }, {
                        label: 'news',
                        position: 'left',
                        items: [
                            {
                                href: '/blog',
                                label: 'rescoped',
                                rel: null,
                            },
                            {
                                href: '/',
                                label: 'hypernews',
                                target: '_blank',
                                rel: null,
                            }, {
                                href: '/',
                                label: 'supernews',
                                target: '_blank',
                                rel: null,
                            },

                        ],
                    },
                    {to: '#contact', label: 'contact', position: 'left'},
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'News',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `<span id="contact">Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.</span>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
