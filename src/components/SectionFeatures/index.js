import React from "react";
import {Reveal} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {DataFeatures} from "./DataFeatures";
import Button from "@site/src/components/Button";

function Feature({Svg, title, description}) {
    return (
        <>
            <Svg className="w-20 h-20 mb-8" role="img"/>
            <h3 className="font-bold text-xl mb-8">{title}</h3>
            <p className='text-lg max-w-[74ch]'>{description}</p>
        </>
    );
}

export default function SectionFeatures() {
    return (
        <>
            <section className='grid grid-cols-3 gap-16 article-grid' id={"section-features"}>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={"col-span-3 ease-out"}>
                    <h2 className="text-3xl sm:text-6xl !leading-tight font-medium sm:font-light pr-8 sm:pr-16">
                        We got <br/>
                        you covered
                    </h2>
                    {DataFeatures.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}

                    <div className="flex flex-col sm:flex-row gap-16">
                        <p className='text-lg'>You would like to know in detail <br/> how to work with our tools?</p>
                        <Button text="Read the docs" link="/docs/welcome/"
                            colorOverride="shadow-avo-green-green/20 bg-avo-green-green"/>
                    </div>
                </Reveal>
            </section>
        </>
    );
}


