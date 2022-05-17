import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import ArrowMD from "@site/static/img/arrow_md.svg";

export default function Button({text, link, colorOverride = "shadow-avo-pink-pink/20 bg-avo-pink-pink"}) {
    return (
        <button className="flex">
            <Link to={link}
                className={clsx("relative inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-4 overflow-hidden transition  rounded-full group shadow-md", colorOverride)}>
                <span
                    className={clsx("absolute inset-0 flex items-center justify-center w-full h-full text-white duration-200 -translate-x-full group-hover:translate-x-0 ease", colorOverride)}>
                    <ArrowMD className="h-6 w-auto"/>
                </span>
                <span
                    className="absolute flex items-center justify-center w-full h-full text-white font-medium sm:text-lg transition duration-200 group-hover:opacity-0 ease">
                    {text}
                </span>
                <span className="relative invisible">{text}</span>
            </Link>
        </button>
    )
}
