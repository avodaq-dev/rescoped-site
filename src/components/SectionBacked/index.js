import React from 'react';
import {Reveal, Fade} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {FeatureListBackend} from "./FeatureListBackend";
import Button from '@site/src/components/Button';

function Feature({Svg, title, description}) {
    return (
        <>
            <h3 className="font-bold text-xl mb-8">{title}</h3>
            <p className='text-lg max-w-[74ch]'>{description}</p>
        </>
    );
}

export default function SectionBackend() {
    return (
        <>
            <article className='grid grid-cols-3 gap-16 article-grid'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={`col-span-3 ease-out`}>
                    <h2 className="text-3xl sm:text-6xl !leading-tight font-medium sm:font-light pr-8 sm:pr-16 text-avo-pink-pink">
                        Backend <br/>solutions
                    </h2>
                    {FeatureListBackend.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}

                    <div className="flex flex-col sm:flex-row gap-16">
                        <p className='text-lg'>Learn more about our backend solutions <br/> and get the exclusive details.</p>
                        <Button text={'Read more'} link={'#backend-solutions'}/>
                    </div>

                </Reveal>
            </article>
        </>
    );
}
