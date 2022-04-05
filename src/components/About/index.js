import React from "react";
import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {FeatureListAbout} from "./FeatureListAbout";
import clsx from "clsx";

import Button from '@site/src/components/Button';

import {useColorMode} from "@docusaurus/theme-common";


function Feature({Svg, title, description}) {
    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <p className='text-lg'>{description}</p>
        </div>
    );
}

export default function About() {
    const {colorMode} = useColorMode();
    const darkThemeBG = colorMode === 'dark' ? 'bg-avo-blue-light/[.08]' : 'bg-amber-500/[.07]';
    return (
        <section className={clsx('px-4 sm:px-16  mx-auto py-16', darkThemeBG)} id="section-about">
            <article className="flex flex-col gap-16" >
                <h2 className="text-2xl font-bold text-avo-pink-pink">
                    About
                </h2>
                <div className="flex gap-16 lg:gap-32 flex-col md:flex-row ">
                    <Fade {...fadeProps}>
                        {FeatureListAbout.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </Fade>
                </div>
                <Fade className={'flex flex-col sm:flex-row gap-8 text-center sm:text-left'} direction="up" duration={750} triggerOnce={true} delay={500}>
                    <Button text={'Read more'} link={'/blog/'}/>
                </Fade>
            </article>
        </section>
    );
}
