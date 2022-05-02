import React from 'react';
import {Reveal} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {FeatureListAbout} from "./FeatureListAbout";
import Button from '@site/src/components/Button';

function Feature({Svg, title, description}) {
    return (
        <>
            <h3 className="font-bold text-xl mb-8">{title}</h3>
            <p className='text-lg max-w-[74ch]'>{description}</p>
        </>
    );
}

export default function About() {
    return (
        <section className="px-4 sm:px-16 mx-auto py-32 grid gap-12" id="section-about">
            <article className='grid grid-cols-3 gap-16 lg:gap-24 article-grid'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={`col-span-3 ease-out`}>
                    <h2 className="text-3xl sm:text-6xl !leading-tight font-medium sm:font-light pr-8 sm:pr-16 text-avo-pink-pink">
                        We got <br/> you covered
                    </h2>

                    <div>
                        <h3 className="font-bold text-xl mb-8">Open-source is our focus — not a feature</h3>
                        <p className="text-lg max-w-[74ch]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                            commodi consequatur dicta dignissimos dolor dolorem iusto, minus mollitia nemo perferendis
                            perspiciatis quisquam tenetur?</p>
                    </div>
                </Reveal>
            </article>
            <article className='grid grid-cols-3 gap-16 lg:gap-24 article-grid'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={`col-span-3 ease-out`}>
                    <span className="hidden"></span>
                    {FeatureListAbout.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                    <div className="flex flex-col sm:flex-row gap-16">
                        <p className='text-lg'>Still not convinced yet? <br/> These are just a few benefits!</p>
                        <Button text={'Read more'} link={'/blog/'}/>
                    </div>
                </Reveal>
            </article>
        </section>
    );
}


