import React from 'react';
import Link from '@docusaurus/Link';
import styles from "./styles.module.scss";

import {FeatureListBackend} from "./FeatureListBackend";

import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {link_TWClasses} from "@avo/monorepo/doku_libs/props/link_TWClasses";

import Dots1 from '@site/static/img/DOTS_01.svg';


function Feature({Svg, title, description}) {
    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <p className='text-lg'>{description}</p>
        </div>
    );
}

export default function SectionBackend() {
    return (
        <>
            <article className="flex flex-col gap-4 relative mb-48">
                <Dots1 className="h-[4rem] w-auto absolute top-0 right-0"/>
                <h2 className="text-2xl font-bold mb-4 sm:mb-12 text-avo-pink-pink">
                    Backend <br/>solutions
                </h2>
                <div className="flex gap-16 lg:gap-32 flex-col md:flex-row ">
                    <Fade {...fadeProps} className={styles.linkPos}>
                        {FeatureListBackend.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                        <Link {...link_TWClasses}
                              to="#fontend-solutions">
                            Read more
                        </Link>
                    </Fade>
                </div>

            </article>

        </>

    );
}
