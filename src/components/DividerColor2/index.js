import React from "react";
import {useColorMode} from "@docusaurus/theme-common";
import clsx from "clsx";

export default function DividerColor2() {
    const {colorMode} = useColorMode();
    const darkTheme = colorMode === 'dark' ? 'bg-white/5' : 'bg-amber-500/5';

    return (
        <div className={clsx('px-4 sm:px-16 max-w-[105rem] mx-auto', darkTheme)}>
            <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
                <div className="flex h-16 sm:mb-16">
                    <div className="flex-grow grow-2"></div>
                    <div
                        className="flex-grow grow-1 bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green"></div>
                </div>
                <div className="flex h-16">
                    <p className="flex items-center justify-center w-2/3 bg-avo-green-green font-bold text-xl !text-white">
                        Follow us on&nbsp;<a className="!text-white" href="">github</a>!
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
