import React from 'react';
import {Reveal} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {FeatureListAbout} from "./FeatureListAbout";
import Button from '@site/src/components/Button';

function Feature({Svg, title, description}) {
    return (
        <>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <p className='text-lg'>{description}</p>
        </>
    );
}

export default function About() {
    return (
        <section className="px-4 sm:px-16 mx-auto py-32 grid gap-32" id="section-about">
            <article className='grid grid-cols-3 gap-16 lg:gap-24 article-grid'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={`col-span-3 ease-out`}>

                    <h2 className="text-2xl font-bold text-avo-pink-pink">
                        About
                    </h2>
                    {FeatureListAbout.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                    <Button text={'Read more'} link={'#fontend-solutions'}/>

                </Reveal>
            </article>
        </section>

    );
}


