import React from "react";
import Link from '@docusaurus/Link';

export default function Button({text, link}) {
    return (
        <button className="flex">
            <Link
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden transition bg-avo-pink-pink rounded-full shadow-md shadow-avo-pink-pink/20 group"
                to={link}>
                <span
                    className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-200 -translate-x-full bg-avo-pink-pink group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                           d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </span>
                <span
                    className="absolute flex items-center justify-center w-full h-full text-white font-medium text-lg transition duration-200 group-hover:opacity-0 ease">
                    {text}
                </span>
                <span className="relative invisible">{text}</span>
            </Link>
        </button>


    )
}
