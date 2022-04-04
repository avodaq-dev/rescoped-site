import React from "react";
import Link from '@docusaurus/Link';

export default function Button({ text, link }) {
    return (
        <button className="flex">
            <Link
                className="rounded-md text-white bg-avo-pink-pink hover:bg-avo-pink-500 hover:text-white hover:-translate-y-1 hover:scale-105 drop-shadow-lg hover:drop-shadow-xl transition px-8 py-4 font-bold text-xl"
                to={link}>
                {text}
            </Link>
        </button>
    )
}
