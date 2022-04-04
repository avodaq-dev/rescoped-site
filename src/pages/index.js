import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageHeader from '@site/src/components/HomepageHeader';
import SectionFrontendBackend from '@site/src/components/SectionFrontendBackend';
import About from '@site/src/components/About';


export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Advanced tooling for cutting edge engineers">
            <HomepageHeader/>
            <main>
                <SectionFrontendBackend/>
                <About/>
            </main>
        </Layout>
    );
}
