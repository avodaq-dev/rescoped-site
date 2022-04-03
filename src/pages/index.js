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
import {fadeProps} from "@avo/monorepo/doku_libs/props/fadeAnimation";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    const {isDarkTheme} = useColorMode();
    const darkTheme = isDarkTheme ? '' : 'bg-amber-50';
    const darkThemehide = isDarkTheme ? 'hidden' : '';
    const lightThemehide = !isDarkTheme ? 'hidden' : '';

    return (
        <>
            <header className={clsx('px-4 sm:px-16 pt-8 md:pt-24 pb-8 md:pb-24', darkTheme, styles.header)}>
                <Fade duration={750} triggerOnce={true} delay={750}>
                    <PixiComp/>
                </Fade>


                <div className={'arthur flex flex-col gap-12 drop-shadow-xl'}>

                    <Fade {...fadeProps}>

                        <div className="flex justify-between -mb-8">
                            <p className="text-xl sm:text-3xl font-bold">
                                Make good even better
                            </p>
                        </div>

                        <h2 className="text-5xl !leading-tight md:text-7xl font-normal md:font-light">
                            Advanced tooling for <br className='hidden sm:block'/> cutting edge engineers.
                        </h2>
                        <div className='flex flex-col sm:flex-row gap-8 text-center sm:text-left'>
                            <Link
                                className="bg-avo-pink-pink hover:bg-white text-white hover:text-avo-pink-pink transition px-8 py-4 font-bold text-xl"
                                to="#fontend-solutions">
                                Frontend solutions
                            </Link>
                            <Link
                                className="bg-avo-pink-pink hover:bg-white text-white hover:text-avo-pink-pink transition px-8 py-4 font-bold text-xl"
                                to="#backend-solutions">
                                Backend solutions
                            </Link>
                        </div>
                    </Fade>


                    <div className="flex justify-end mt-auto mt-8">
                        <Fade cascade={'true'} triggerOnce={'true'} damping={0.25} duration={750} delay={1000}>
                            <Dots1 className="h-[4rem] w-auto mt-3 absolute top-0 right-0"/>
                            <Dots2 className="h-[4rem] md:h-[5.75rem] w-auto absolute bottom-0 left-0"/>
                            <h1 className="w-[16rem] md:w-[24rem] flex -mb-3">
                                <ReLogoColor title="rescoped Logo" className={clsx('relogo mt-auto', darkThemehide)}/>
                                <ReLogoWhite title="rescoped Logo" className={clsx('relogo mt-auto', lightThemehide)}/>
                            </h1>
                        </Fade>
                    </div>
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
