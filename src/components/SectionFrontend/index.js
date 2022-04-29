import React from 'react';
import {Reveal} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {FeatureListFrontend} from "./FeatureListFrontend";
import Button from '@site/src/components/Button';

function Feature({Svg, title, description}) {
    return (
        <>
            <h3 className="font-medium text-3xl mb-8">{title}</h3>
            <p className='text-xl'>{description}</p>
        </>
    );
}

export default function SectionFrontend() {
    return (
        <>
            <article className='grid grid-cols-3 gap-16 article-grid'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={`col-span-3 ease-out`}>
                    <h2 className="text-xl font-medium text-avo-pink-pink">
                        Frontend <br/>solutions
                    </h2>
                    {FeatureListFrontend.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}

                    <div className="flex gap-16">
                        <p className='text-xl'>You would like to know in detail <br/> how we help you achieve your goals?</p>
                        <Button text={'Read more'} link={'#fontend-solutions'}/>
                    </div>
                </Reveal>
            </article>
        </>
    );
}


