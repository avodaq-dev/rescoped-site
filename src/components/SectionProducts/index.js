import React from "react";
import {Reveal} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";
import {DataFeatures} from "./DataFeatures";
import Link from "@docusaurus/Link";

import styles from "./styles.module.scss";
import clsx from "clsx";

import ArrowMD from "@site/static/img/arrow_md.svg";



function Feature({link, src, title, description}) {
    return (
        <li className={clsx("w-40 sm:w-[clamp(10rem,calc(15rem+8vw),30rem)] hover:-mt-4 transition-all ease-in-out ",)}>
            <Link to={link} className="hover:text-white drop-shadow-md">
                <figure>
                    <picture>
                        <img alt="A placeholder image" loading="lazy" src={src} className="rounded-t-md"/>
                    </picture>
                    <div className="p-4 flex flex-col gap-4 rounded-b-md bg-avo-pink-pink">
                        <figcaption>{title}</figcaption>
                        <p className="hidden sm:block">{description}</p>
                    </div>
                </figure>
            </Link>
        </li>
    );
}

export default function SectionProducts() {
    return (
        <>
            <article className='flex flex-col gap-4 sm:gap-16 overflow-hidden'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={"col-span-3 ease-out"}>
                    <h2 className="text-3xl sm:text-6xl !leading-tight font-medium sm:font-light pr-8 sm:pr-16">
                        Our <br/>
                        Products
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-between sm:items-end">
                        <p className='text-lg'>Learn more about our products <br/> and get the exclusive details.</p>
                        <div className="font-bold text-xl flex gap-4 items-center">
                            <p>Scroll </p>
                            <ArrowMD className="w-12 h-auto"/>
                        </div>
                    </div>
                    <ul className={clsx("grid grid-flow-col gap-2 sm:gap-4 lg:gap-6 overflow-auto py-8", styles.scroller)}>
                        {DataFeatures.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </ul>

                </Reveal>
            </article>
        </>
    );
}
