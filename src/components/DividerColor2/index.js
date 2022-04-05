import React from "react";
import {useColorMode} from "@docusaurus/theme-common";
import clsx from "clsx";

export default function DividerColor2() {
    const {colorMode} = useColorMode();
    const darkThemeBG = colorMode === 'dark' ? 'bg-avo-blue-light/[.08]' : 'bg-amber-500/[.07]';

    return (
        <div className={clsx('px-4 sm:px-16  mx-auto', darkThemeBG)}>
            <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
                <div className="flex h-16 sm:mb-16">
                    <div className="flex-grow grow-2"></div>
                    <div
                        className="flex-grow grow-1 bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green"></div>
                </div>
                <div className="flex h-16">
                    <p className="flex items-center justify-center w-2/3 bg-avo-green-green font-bold text-xl !text-white">
                        <span>Check our <a className="hover:text-avo-pink-pink" href="">github</a> repo.</span>
                    </p>
                    <div className="w-1/3"></div>
                </div>

                <div className="hidden sm:flex h-16">
                    <div className="w-2/3"></div>
                    <div className="w-1/3 grow-1 bg-avo-pink-pink"></div>
                </div>
            </div>
        </div>
    );
}
