import React from "react";
import {useColorMode} from "@docusaurus/theme-common";
import clsx from "clsx";

export default function DividerColor1() {
    const {colorMode} = useColorMode();
    const darkTheme = colorMode === 'dark' ? 'bg-white/5' : 'bg-amber-500/5';

    return (
        <div className={clsx('px-4 sm:px-16 max-w-[105rem] mx-auto')}>
            <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
                <div className="flex h-16">
                    <p className="flex items-center justify-center w-2/3 bg-avo-pink-pink font-bold text-xl !text-white">
                        <span>Follow us on <a href="">#twitter</a>!</span>
                    </p>
                    <div className="w-1/3"></div>
                </div>

                <div className="flex h-16">
                    <div className={clsx('w-2/3', darkTheme)}></div>
                    <div className="w-1/3 grow-1 bg-avo-green-green"></div>
                </div>
            </div>
        </div>
    );
}
