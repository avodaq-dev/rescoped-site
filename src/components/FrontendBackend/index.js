import React from 'react';
import Link from '@docusaurus/Link';
import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {link_TWClasses} from "@avo/monorepo/doku_libs/props/link_TWClasses";

import {FeatureListBackend} from "./FeatureListBackend";
import {FeatureListFrontend} from "./FeatureListFrontend";


function Feature({Svg, title, description}) {
    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <p className='text-lg'>{description}</p>
        </div>
    );
}

export default function FrontendBackend() {
    return (
        <section className="px-4 sm:px-16 py-32 bg-white/5">
            <article className="flex flex-col gap-4 mb-32" id="fontend-solutions">
                <h2 className="text-2xl font-bold mb-4 text-avo-pink-pink">
                    Frontend solutions
                </h2>
                <div className="flex gap-16 flex-col md:flex-row">
                    <Fade {...fadeProps}>
                        {FeatureListFrontend.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </Fade>
                </div>
                <Fade direction={'up'} duration={750} triggerOnce={true} delay={750} className={'mt-16'}>
                    <Link {...link_TWClasses}
                          to="#fontend-solutions">
                        Read more
                    </Link>
                </Fade>
            </article>

            <article className="flex flex-col gap-4" id="backend-solutions">
                <h2 className="text-2xl font-bold mb-4 text-avo-pink-pink">
                    Backend solutions
                </h2>
                <div className="flex gap-16 flex-col md:flex-row">
                    <Fade {...fadeProps}>
                        {FeatureListBackend.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </Fade>
                </div>
                <Fade direction={'up'} duration={750} triggerOnce={true} delay={750} className={'mt-16'}>
                    <Link {...link_TWClasses}
                          to="#fontend-solutions">
                        Read more
                    </Link>
                </Fade>
            </article>
        </section>
    );
}
