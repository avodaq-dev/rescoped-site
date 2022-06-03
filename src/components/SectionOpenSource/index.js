import React from "react";
import {Reveal} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import Button from "@site/src/components/Button";

export default function SectionOpenSource() {
    return (
        <section className="px-4 sm:px-16 mx-auto py-32" id="section-about">
            <article className='flex flex-col gap-16 lg:gap-24'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={"col-span-3 ease-out"}>
                    <h2 className="text-3xl sm:text-6xl !leading-tight font-medium sm:font-light pr-8 sm:pr-16">
                        Open-source is our focus <br/>
                        — not a feature
                    </h2>
                    <div>
                        <h3 className="font-bold text-xl mb-8">Secure, Reliable & Affordable</h3>
                        <p className='text-lg max-w-[74ch]'>
                            Our code is open for all to see, so more developers can identify and
                            fix potential security vulnerabilities faster. And because the open-source community is huge
                            and active, more people are looking for bugs and fixing them more often. Open source products
                            are not restricted by licensing agreements, so they are affordable for people and
                            organizations of all sizes.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-16">
                        <p className='text-lg'>Still not convinced yet? <br/> These are just a few benefits!</p>
                        <Button text={"Read more"} link={"/blog/"}/>
                    </div>
                </Reveal>
            </article>
        </section>
    );
}


