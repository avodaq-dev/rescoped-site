import React from 'react';
import {Reveal, Fade} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {FeatureListBackend} from "./FeatureListBackend";
import Button from '@site/src/components/Button';

function Feature({Svg, title, description}) {
    return (
        <>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <p className='text-lg'>{description}</p>
        </>
    );
}

export default function SectionBackend() {
    return (
        <>
            <article className='grid grid-cols-3 gap-16 lg:gap-24 article-grid'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={`col-span-3`}>

                    <h2 className="text-2xl font-bold text-avo-pink-pink">
                        Backend <br/>solutions
                    </h2>
                    {FeatureListBackend.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                    <Button text={'Read more'} link={'#backend-solutions'}/>

                </Reveal>
            </article>
        </>
    );
}
