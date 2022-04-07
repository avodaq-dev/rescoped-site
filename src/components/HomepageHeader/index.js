import React from "react";
import {useColorMode} from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./index.module.scss";

import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/props/fadeAnimation";

import PixiComp from '@site/src/components/PixiComp';
import Button from '@site/src/components/Button';
import Dots2 from '@site/static/img/DOTS_02.svg';
import ReLogoColor from "@avo/monorepo/doku_libs/static/img/rescoped_logo_color.svg";
import ReLogoWhite from "@avo/monorepo/doku_libs/static/img/rescoped_logo_white.svg";

export default function HomepageHeader() {
    const {colorMode} = useColorMode();
    const darkThemehide = colorMode === 'light' ? '' : 'hidden';
    const lightThemehide = colorMode === 'light' ? 'hidden' : '';
    const darkThemeBG = colorMode === 'light' ? 'bg-amber-500/[.08]' : 'bg-black/[.08]';

    return (
        <>
            <header id="section-header"
                className={clsx('relative px-4 sm:px-16 pt-8 md:pt-24 pb-8 md:pb-24 max-w-[105rem] mx-auto', darkThemeBG)}>
                <Fade duration={750} triggerOnce={true} delay={750}>
                    <PixiComp/>
                </Fade>
                <div className='flex flex-col gap-12 gap-8 sm:gap-12 relative'>
                    <Fade {...fadeProps}>
                        <div className="flex justify-between -mb-8">
                            <p className="text-xl sm:text-3xl font-bold">
                                Make good even better
                            </p>
                        </div>

                        <h2 className="text-3xl sm:text-5xl  md:text-7xl !leading-tight font-normal md:font-light pr-8 sm:pr-16">
                            Advanced tooling for <br className='hidden sm:block'/> cutting edge engineers.
                        </h2>
                        <div className='flex flex-col sm:flex-row gap-8 text-center sm:text-left'>
                            <Button text={'Solutions'} link={'#section-front-back'}/>
                            <Button text={'About rescoped'} link={'#section-about'}/>
                        </div>
                    </Fade>


                    <div className="flex flex-col gap-4 md:mt-24">
                        <Fade cascade={'true'} triggerOnce={'true'} damping={0.25} duration={750} delay={1000}>
                            <Dots2
                                className="hidden sm:block h-[4rem] md:h-[5.75rem] w-auto absolute bottom-[0.35rem] right-0 md:left-0 rotate-[270deg] md:rotate-0"/>
                            <h1 className="w-[10rem] sm:w-[16rem] md:w-[24rem] md:absolute md:bottom-0 md:right-0">
                                <ReLogoColor title="rescoped Logo" className={clsx('relogo mt-auto', darkThemehide)}/>
                                <ReLogoWhite title="rescoped Logo" className={clsx('relogo mt-auto', lightThemehide)}/>
                            </h1>
                            <p className={clsx('font-bold text-xl absolute bottom-5 sm:top-0 right-0 sm:-mr-3', styles.md_verticalLR)}>
                                Give us a star on <a href="">GitHub</a>!
                            </p>
                        </Fade>
                    </div>
                </div>
            </header>
        </>
    );
}
