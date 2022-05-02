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
    const darkThemeBG = colorMode === 'light' ? 'bg-amber-500/[.15]' : 'bg-avo-blue-dark';

    if (!footer) {
        return null;
    }

    const {copyright, links, logo, style} = footer;

    return (
        <>
            <footer className={clsx('px-4 sm:px-16 w-full max-w-[105rem] mx-auto py-16', darkThemeBG)}
                    id="section-contact">
                <div className="flex flex-col gap-16">
                    <h2 className="text-3xl sm:text-6xl !leading-tight font-medium sm:font-light pr-8 sm:pr-16 text-avo-pink-pink">
                        Contact
                    </h2>
                    <FooterLinks links={links}/>
                </div>
            </footer>
            <div
                className={clsx('flex p-4 w-full max-w-[105rem] mx-auto bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green')}>
                <p className="flex flex-col md:flex-row gap-4 justify-between items-center w-full text-white font-medium text-sm">
                    <div className="flex gap-4">
                        <a className="underline-thin" href="">Privacy Policy</a>
                        <a className="underline-thin" href="">Legal Information</a>
                    </div>
                    <span>© {new Date().getFullYear()} rescoped by <a className="underline-thin" href="">avodaq AG</a> • Built with Docusaurus</span>
                </p>
            </div>
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
