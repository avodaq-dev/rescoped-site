import React from "react";
import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";
import Link from "@docusaurus/core/lib/client/exports/Link";

import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {link_TWClasses} from "@avo/monorepo/doku_libs/props/link_TWClasses";

import {FeatureListAbout} from "./FeatureListAbout";
import DividerImage from '@site/src/components/DividerImage';


function Feature({Svg, title, description}) {
    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <p className='text-lg'>{description}</p>
        </div>
    );
}

export default function About() {
    const {isDarkTheme} = useColorMode();
    const darkTheme = isDarkTheme ? 'bg-white/5' : 'bg-amber-50';
    return (
        <section className={clsx('px-4 sm:px-16 max-w-[105rem] mx-auto', darkTheme)} id="section-about">
            <article className="flex flex-col gap-16 mb-48" >
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
                <Fade className={'flex flex-col sm:flex-row gap-8 text-center sm:text-left'} duration={750} triggerOnce={true} delay={500}>
                    <Link {...link_TWClasses}
                          to="#fontend-solutions">
                        Read more
                    </Link>
                </Fade>
            </article>

            <DividerImage/>
        </section>
    );
}
