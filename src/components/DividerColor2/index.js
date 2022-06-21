import React from "react";

export default function DividerColor2() {
    return (
        <div className="px-4 sm:px-16 mx-auto">
            <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
                <div className="hidden sm:flex h-16 sm:mb-16">
                    <div className="sm:w-9/12"></div>
                    <div
                        className="w-full sm:w-4/12 bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green"></div>
                </div>
                <div className="flex h-16">
                    <p className="flex items-center justify-center w-full sm:w-9/12 bg-avo-green-green font-bold text-xl !text-white">
                        <span>Check our <a className="hover:text-avo-pink-pink underline-white" target="_blank" href="https://github.com/avodaq/rescoped">github</a> repo.</span>
                    </p>
                    <div className="sm:w-4/12"></div>
                </div>

                <div className="hidden sm:flex h-16">
                    <div className="w-9/12"></div>
                    <div className="w-4/12 grow-1 bg-avo-pink-pink"></div>
                </div>
            </div>
        </div>
    );
}
