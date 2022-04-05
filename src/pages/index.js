import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageHeader from '@site/src/components/HomepageHeader';
import Main from '@site/src/components/Main';

import clsx from "clsx";

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Advanced tooling for cutting edge engineers">
            <HomepageHeader/>
            <Main/>

        </Layout>
    );
}
