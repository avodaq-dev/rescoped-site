const { colors } = require('./node_modules/@avo/monorepo/doku_libs/configs/tailwind.colors');


module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./blog/**/*.{md,mdx}",
        "./docs/**/*.{md,mdx}"
    ],
    theme: {
        screens: {
            sm: '600px',
            md: '996px',
            lg: '1440px',
            xl: '1920px',
        },
        extend: {
            colors,
            flexGrow: {
                '2': 2
            }
        },
    },
    plugins: [],
};
