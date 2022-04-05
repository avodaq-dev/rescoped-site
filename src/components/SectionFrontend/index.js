import React from 'react';
import {FeatureListFrontend} from "./FeatureListFrontend";
import {Fade} from "react-awesome-reveal";
import {fadeProps} from "@avo/monorepo/doku_libs/props/fadeAnimation";

import Button from '@site/src/components/Button';


function Feature({Svg, title, description}) {
    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <p className='text-lg'>{description}</p>
        </div>
    );
}

export default function SectionFrontend() {
    return (
        <>
            <article className="flex flex-col gap-16 relative mb-48">
                <h2 className="text-2xl font-bold text-avo-pink-pink">
                    Frontend <br/>solutions
                </h2>
                <div className="flex gap-16 lg:gap-32 flex-col md:flex-row ">
                    <Fade {...fadeProps}>
                        {FeatureListFrontend.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </Fade>
                </div>
                <Fade className={'flex flex-col sm:flex-row gap-8 text-center sm:text-left'} direction="up" duration={750} triggerOnce={true} delay={500}>
                    <Button text={'Read more'} link={'#fontend-solutions'}/>
                </Fade>
            </article>
        </>
    );
}
