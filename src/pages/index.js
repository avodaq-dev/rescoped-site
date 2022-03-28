import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FrontendBackend from '@site/src/components/FrontendBackend';
import {useColorMode} from '@docusaurus/theme-common';

import ReLogoColor from "@avo/monorepo/doku_libs/static/img/rescoped_logo_color.svg";
import ReLogoWhite from "@avo/monorepo/doku_libs/static/img/rescoped_logo_white.svg";
import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/reveal_animations/fadeAnimation";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    const {isDarkTheme} = useColorMode();
    const darkTheme = isDarkTheme ? '' : 'bg-avo-green-50';
    const darkThemehide = isDarkTheme ? 'hidden' : '';
    const lightThemehide = !isDarkTheme ? 'hidden' : '';

    return (
        <>
            <header className={clsx('px-4 sm:px-16 py-32', darkTheme)}>
                <div className="flex flex-col gap-4">

                    <Fade {...fadeProps}>
                        <h1>
                            <ReLogoColor width="288" title="rescoped Logo" className={clsx('logo ', darkThemehide)}/>
                            <ReLogoWhite width="288" title="rescoped Logo" className={clsx('logo', lightThemehide)}/>

                        </h1>
                        <p className="text-3xl font-bold mb-4">{siteConfig.tagline}</p>
                        <div className='flex gap-4'>
                            <Link
                                className="bg-avo-green-green
                                hover:bg-avo-avo-blue-light
                                text-white hover:text-white transition px-8 py-4 font-bold text-xl"
                                to="#fontend-solutions">
                                Frontend
                            </Link>
                            <Link
                                className="bg-avo-green-green hover:bg-avo-green-500 text-white hover:text-white transition px-8 py-4 font-bold text-xl"
                                to="#backend-solutions">
                                Backend
                            </Link>
                        </div>
                    </Fade>

                </div>
            </header>
        </>

    );
}

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
