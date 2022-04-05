import React from "react";
import SectionFrontend from '@site/src/components/SectionFrontend';
import SectionBacked from '@site/src/components/SectionBacked';
import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";


export default function SectionFrontendBackend() {
    const {colorMode} = useColorMode();
    const darkTheme = colorMode === 'dark' ? 'bg-white/5' : 'bg-amber-500/5';
    return (
        <section className={clsx('px-4 sm:px-16 max-w-[105rem] mx-auto py-16', darkTheme)} id="section-front-back">
            <SectionFrontend/>
            <SectionBacked/>
        </section>
    );
}
