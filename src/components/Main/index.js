import React from "react";
import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";

import About from '@site/src/components/About';
import SectionFrontendBackend from '@site/src/components/SectionFrontendBackend';
import DividerColor2 from '@site/src/components/DividerColor2';
import DividerColor1 from '@site/src/components/DividerColor1';
import DividerImage from '@site/src/components/DividerImage';


export default function main() {
    const {colorMode} = useColorMode();
    const darkThemeBG = colorMode === 'light' ? 'bg-amber-500/[.07]' : 'bg-black/[.08]';

    return (
        <main className={clsx('relative max-w-[105rem] mx-auto', darkThemeBG)}>
            <DividerColor1/>
            <SectionFrontendBackend/>
            <DividerColor2/>
            <About/>
            <DividerImage/>
        </main>
    )
}
