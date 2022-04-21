/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
// import FooterLogo from '@theme/Footer/Logo';
// import FooterCopyright from '@theme/Footer/Copyright';
// import FooterLayout from '@theme/Footer/Layout';
import clsx from "clsx";

function Footer() {
    const {footer} = useThemeConfig();
    const {colorMode} = useColorMode();
    const darkThemeBG = colorMode === 'light' ? 'bg-amber-500/[.08]' : 'bg-black/[.08]';
    const darkThemeCol = colorMode === 'light' ? 'bg-amber-500/[.15] text-black' : 'bg-avo-blue-dark text-white';

    if (!footer) {
        return null;
    }

    const {copyright, links, logo, style} = footer;

    return (
        <>
            <footer className={clsx('px-4 sm:px-16 w-full max-w-[105rem] mx-auto py-16', darkThemeBG)}
                    id="section-contact">
                <div className="flex flex-col gap-16">
                    <h2 className="text-2xl font-bold text-avo-pink-pink">
                        Contact
                    </h2>
                    <FooterLinks links={links}/>
                </div>
            </footer>

            <p className={clsx('flex p-4 w-full justify-center items-center', darkThemeCol)}>
                <span>© {new Date().getFullYear()} rescoped Wiki • Built with Docusaurus by <a className="underline-thin" href="">avodaq AG</a></span>
            </p>
        </>
    )

    // return (
    //   <FooterLayout
    //     style={style}
    //     links={links && links.length > 0 && <FooterLinks links={links} />}
    //     logo={logo && <FooterLogo logo={logo} />}
    //     copyright={copyright && <FooterCopyright copyright={copyright} />}
    //   />
    // );
}

export default React.memo(Footer);
