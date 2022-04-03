import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FrontendBackend from '@site/src/components/FrontendBackend';
import HomepageHeader from '@site/src/components/HomepageHeader';


export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Advanced tooling for cutting edge engineers">
            <HomepageHeader/>
            <main>
                <FrontendBackend/>
            </main>
        </Layout>
    );
}
