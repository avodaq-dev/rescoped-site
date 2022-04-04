import React from "react";
import SectionFrontend from '@site/src/components/SectionFrontend';
import SectionBacked from '@site/src/components/SectionBacked';
import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";
import DividerColor2 from '@site/src/components/DividerColor2';
import DividerColor1 from '@site/src/components/DividerColor1';

export default function SectionFrontendBackend() {
    const {colorMode} = useColorMode();
    const darkTheme = colorMode === 'dark' ? 'bg-white/5' : 'bg-amber-50';
    return (
        <section className={clsx('px-4 sm:px-16 max-w-[105rem] mx-auto', darkTheme)} id="section-front-back">
            <DividerColor1/>
            <SectionFrontend/>
            <SectionBacked/>
            <DividerColor2/>
        </section>
    );
}
