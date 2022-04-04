import React from "react";
import {useColorMode} from "@docusaurus/theme-common";
import clsx from "clsx";

export default function DividerColor1() {
    const {isDarkTheme} = useColorMode();
    const darkTheme = isDarkTheme ? 'bg-avo-blue-dark' : 'bg-white';
    return (
        <div className="flex flex-col -mx-4 sm:-mx-[4rem] mb-16">
            <div className="flex h-16">
                <div className="w-2/3 bg-avo-pink-pink text-white relative">
                    <span className="absolute top-4 left-4">hallo</span>
                </div>
                <div className={clsx('w-1/3', darkTheme)}></div>
            </div>

            <div className="flex h-16">
                <div className="w-2/3"></div>
                <div className="w-1/3 grow-1 bg-avo-green-green"></div>
            </div>
        </div>
    );
}
