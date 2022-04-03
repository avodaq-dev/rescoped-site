import React from "react";
import SectionFrontend from '@site/src/components/SectionFrontend';
import SectionBacked from '@site/src/components/SectionBacked';
import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";

export default function FrontendBackend() {
    const {isDarkTheme} = useColorMode();
    const darkTheme = isDarkTheme ? 'bg-white/5' : 'bg-amber-50';
    return (
        <section className={clsx('px-4 sm:px-16 pt-32 max-w-[105rem] mx-auto', darkTheme)}>
            <SectionFrontend/>
            <SectionBacked/>
        </section>
    );
}
