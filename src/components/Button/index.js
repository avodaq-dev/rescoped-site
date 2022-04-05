import React from "react";
import Link from '@docusaurus/Link';

export default function Button({ text, link }) {
    return (
        <button className="flex">
            <Link
                className="text-white bg-avo-pink-pink hover:bg-avo-pink-500 hover:text-white hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg shadow-avo-pink-pink/20 transition px-8 py-4 font-bold text-xl"
                to={link}>
                {text}
            </Link>
        </button>
    )
}
