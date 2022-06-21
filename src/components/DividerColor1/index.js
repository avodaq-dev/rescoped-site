import React from "react";

export default function DividerColor1() {

    return (
        <div className="px-4 sm:px-16 mx-auto">
            <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
                <div className="flex h-16">
                    <p className="flex items-center justify-center w-full sm:w-9/12 bg-avo-pink-pink font-bold text-xl !text-white">
                        <span>Follow us on <a href="https://twitter.com/rescoped_io" target="_blank" className="underline-white">#twitter</a>!</span>
                    </p>
                    <div className="sm:w-4/12"></div>
                </div>

                <div className="hidden sm:flex h-16">
                    <div className="w-9/12"></div>
                    <div className="w-4/12 grow-1 bg-avo-green-green"></div>
                </div>
            </div>

        </div>
    );
}
