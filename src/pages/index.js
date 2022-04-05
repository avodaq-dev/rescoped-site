import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageHeader from '@site/src/components/HomepageHeader';
import SectionFrontendBackend from '@site/src/components/SectionFrontendBackend';
import About from '@site/src/components/About';
import DividerColor2 from '@site/src/components/DividerColor2';
import DividerColor1 from '@site/src/components/DividerColor1';
import DividerImage from '@site/src/components/DividerImage';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Advanced tooling for cutting edge engineers">
            <HomepageHeader/>
            <main>
                <DividerColor1/>
                <SectionFrontendBackend/>
                <DividerColor2/>
                <About/>
                <DividerImage/>
            </main>
        </Layout>
    );
}
