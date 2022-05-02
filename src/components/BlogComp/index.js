import React from 'react';
import BlogSidebar from '@theme/BlogSidebar';
import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";

export default function BlogComp({children, sidebar, toc}) {
    const {colorMode} = useColorMode();
    const darkThemeBG = colorMode === 'light' ? 'bg-amber-500/[.08]' : 'bg-black/[.08]';

    const hasSidebar = sidebar && sidebar.items.length > 0;

    return (
        <div className={clsx('relative px-4 sm:px-16 pt-8 md:pt-24 pb-8 md:pb-72 mx-auto', darkThemeBG)}>
            <div className="flex gap-16">
                {hasSidebar && (
                    <aside className="hidden md:block w-full max-w-[12rem]">
                        <BlogSidebar sidebar={sidebar}/>
                    </aside>
                )}
                <main itemScope itemType="http://schema.org/Blog" className="w-full max-w-[64rem]">
                    {children}
                </main>
            </div>
            {toc && <div className="col col--2">{toc}</div>}
        </div>
    )
}
