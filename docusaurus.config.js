// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "rescoped",
    tagline: "Advanced tooling for cutting edge engineers",
    url: "https://avodaq-dev.github.io",
    baseUrl: "/rescoped-site/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/fav_re.svg",
    trailingSlash: true, //for GitHub
    organizationName: "avodaq-dev", // Usually your GitHub org/user name.
    projectName: "rescoped-site", // Usually your repo name.
    deploymentBranch: "gh-pages",
    noIndex: true, // Prevent indexing by searchengines

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                // debug: true,
                docs: {
                    sidebarPath: require.resolve("./src/Sidebars/sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: [
                        require.resolve("./src/scss/tailwind.css"),
                        require.resolve("./src/scss/styles.scss")],
                },
            }),
        ],
    ],

    plugins: [
        path.resolve(__dirname, "plugin-tailwind-docusaurus"),
        "docusaurus-plugin-sass",
        ["docusaurus-plugin-typedoc",
            {
                entryPoints: ["node_modules/@avo/monorepo/index.ts"],
                tsconfig: "node_modules/@avo/monorepo/tsconfig.json",
                watch: process.env.TYPEDOC_WATCH,
            }
        ]
    ],


    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                respectPrefersColorScheme: true,
            },
            navbar: {
                hideOnScroll: true,
                logo: {
                    alt: "rescoped logo",
                    src: "img/re_logo.svg",
                    srcDark: "img/re_logo_dark.svg",
                    width: 48,
                    href: "/"
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "right",
                        label: "docs",
                    },
                    {to: "blog", label: "news", position: "right"},
                    {to: "#section-contact", label: "contact", position: "right"},
                ],
            },
            footer: {
                style: "light",
                links: [
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "News",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                // copyright: `<span id="contact">Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.</span>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
