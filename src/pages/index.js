import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FrontendBackend from '@site/src/components/FrontendBackend';
import PixiComp from '@site/src/components/PixiComp';

import {useColorMode} from '@docusaurus/theme-common';

import styles from './index.module.scss';
import ReLogoColor from "@avo/monorepo/doku_libs/static/img/rescoped_logo_color.svg";
import ReLogoWhite from "@avo/monorepo/doku_libs/static/img/rescoped_logo_white.svg";
import Dots1 from '@site/static/img/DOTS_01.svg';
import Dots2 from '@site/static/img/DOTS_02.svg';

import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/reveal_animations/fadeAnimation";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    const {isDarkTheme} = useColorMode();
    const darkTheme = isDarkTheme ? '' : 'bg-amber-50';
    const darkThemehide = isDarkTheme ? 'hidden' : '';
    const lightThemehide = !isDarkTheme ? 'hidden' : '';

    return (
        <>
            <header className={clsx('px-16 md:px-16 pt-8 md:pt-24 pb-8 md:pb-24', darkTheme, styles.header)}>
                <Fade duration={750} triggerOnce={true} delay={750}>
                    <PixiComp/>
                </Fade>


                <div className={'arthur flex flex-col gap-12 drop-shadow-xl'}>

                    <Fade {...fadeProps}>

                        <div className="flex justify-between -mb-8">
                            <p className="text-3xl font-bold">
                                Make good even better
                            </p>
                            <Dots1 className="h-[4rem] w-auto mt-3"/>
                        </div>

                        <h2 className="text-5xl !leading-tight md:text-7xl font-bold">
                            Advanced tooling for <br className='hidden sm:block'/> cutting edge engineers.
                        </h2>
                        <div className='flex gap-8'>
                            <Link
                                className="bg-avo-green-400 hover:bg-avo-pink-pink text-white hover:text-white transition px-8 py-4 font-bold text-xl"
                                to="#fontend-solutions">
                                Frontend
                            </Link>
                            <Link
                                className="bg-avo-green-400 hover:bg-avo-pink-pink text-white hover:text-white transition px-8 py-4 font-bold text-xl"
                                to="#backend-solutions">
                                Backend
                            </Link>
                        </div>

                        <div className="flex justify-between mt-auto mt-8">
                            <Dots2 className="h-[4rem] md:h-[5rem] w-auto mb-3"/>
                            <h1 className="w-[16rem] md:w-[24rem] flex">
                                <ReLogoColor title="rescoped Logo" className={clsx('relogo mt-auto', darkThemehide)}/>
                                <ReLogoWhite title="rescoped Logo" className={clsx('relogo mt-auto', lightThemehide)}/>
                            </h1>
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
