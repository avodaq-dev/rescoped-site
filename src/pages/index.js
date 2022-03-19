import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import ReLogo from '@site/static/img/re_logo.svg';
import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/reveal_animations/fadeAnimation";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    console.log('GH actions work');
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">

                <Fade {...fadeProps}>
                    <ReLogo title="Docusaurus Logo" className="logo"/>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Docusaurus Tutorial - 5min ⏱️
                        </Link>
                    </div>
                </Fade>

            </div>
        </header>

    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>


                <section style={{maxWith: 1024, marginTop: 120}}>
                    <h2 id="about">About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at, corporis cum
                        cumque debitis ducimus eligendi, error et id ipsa maiores minus modi molestias nemo optio,
                        possimus praesentium quaerat reprehenderit tempora tempore tenetur totam velit voluptatem
                        voluptatibus. A accusantium amet est facere iusto neque officiis rem ut, vitae voluptas!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at, corporis cum
                        cumque debitis ducimus eligendi, error et id ipsa maiores minus modi molestias nemo optio,
                        possimus praesentium quaerat reprehenderit tempora tempore tenetur totam velit voluptatem
                        voluptatibus. A accusantium amet est facere iusto neque officiis rem ut, vitae voluptas!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at, corporis cum
                        cumque debitis ducimus eligendi, error et id ipsa maiores minus modi molestias nemo optio,
                        possimus praesentium quaerat reprehenderit tempora tempore tenetur totam velit voluptatem
                        voluptatibus. A accusantium amet est facere iusto neque officiis rem ut, vitae voluptas!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at, corporis cum
                        cumque debitis ducimus eligendi, error et id ipsa maiores minus modi molestias nemo optio,
                        possimus praesentium quaerat reprehenderit tempora tempore tenetur totam velit voluptatem
                        voluptatibus. A accusantium amet est facere iusto neque officiis rem ut, vitae voluptas!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at, corporis cum
                        cumque debitis ducimus eligendi, error et id ipsa maiores minus modi molestias nemo optio,
                        possimus praesentium quaerat reprehenderit tempora tempore tenetur totam velit voluptatem
                        voluptatibus. A accusantium amet est facere iusto neque officiis rem ut, vitae voluptas!</p>
                </section>
            </main>
        </Layout>
    );
}
