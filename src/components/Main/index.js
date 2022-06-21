import React from "react";
import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";

import DividerColor1 from "@site/src/components/DividerColor1";
import DividerColor2 from "@site/src/components/DividerColor2";
import DividerImage from "@site/src/components/DividerImage";
import SectionFeatures from "@site/src/components/SectionFeatures";
import SectionTools from "@site/src/components/SectionTools";
import SectionOpenSource from "@site/src/components/SectionOpenSource";


export default function main() {
    const {colorMode} = useColorMode();
    const darkThemeBG = colorMode === "light" ? "bg-amber-500/[.05]" : "bg-black/[.08]";

    return (
        <main className={clsx("relative", darkThemeBG)}>
            <DividerColor1/>

            <div className="px-4 sm:px-16 mx-auto py-32 grid gap-40 sm:gap-56">
                <SectionFeatures/>
                <SectionTools/>
            </div>

            <DividerColor2/>
            <SectionOpenSource/>
            <DividerImage/>
        </main>
    )
}
