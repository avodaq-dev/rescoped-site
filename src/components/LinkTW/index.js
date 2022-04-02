import React from "react";
import Link from "@docusaurus/core/lib/client/exports/Link";

export default function LinkTW(link = '', text = '') {
    return (
        <Link
            className={'bg-avo-pink-pink hover:bg-white text-white hover:text-avo-pink-pink transition px-8 py-4 font-bold text-xl'}
            to={link}>
            {text}
        </Link>
    );
}
