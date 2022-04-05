import React from "react";
import SectionFrontend from '@site/src/components/SectionFrontend';
import SectionBacked from '@site/src/components/SectionBacked';
import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";


export default function SectionFrontendBackend() {
    const {colorMode} = useColorMode();
    const darkThemeBG = colorMode === 'dark' ? 'bg-avo-blue-light/[.08]' : 'bg-amber-500/[.07]';
    return (
        <section className={clsx('px-4 sm:px-16  mx-auto py-16', darkThemeBG)} id="section-front-back">
            <SectionFrontend/>
            <SectionBacked/>
        </section>
    );
}
