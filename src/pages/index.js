import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageHeader from '@site/src/components/HomepageHeader';
import Main from '@site/src/components/Main';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    const consoleLogStyle = [
        "background-color: #000000",
        "color: white",
        "display: block",
        "line-height: 24px",
        "text-align: center",
        "border: 1px solid #ffffff",
        "font-weight: bold",
    ].join(";");

    console.info("dev by: %c Arthur Ersosi ", consoleLogStyle);

    return (
        <div className="w-full max-w-[105rem] mx-auto">
            <Layout
                title={`${siteConfig.title}`}
                description="Advanced tooling for cutting edge engineers">
                <HomepageHeader/>
                <Main/>
            </Layout>
        </div>
    );
}
