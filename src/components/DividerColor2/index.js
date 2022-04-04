import React from "react";

export default function DividerColor2() {

    return (
        <div className="flex flex-col -mx-4 sm:-mx-[4rem] pb-16">
            <div className="flex h-16 sm:mb-16">
                <div className="flex-grow grow-2"></div>
                <div className="flex-grow grow-1 bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green"></div>
            </div>
            <div className="flex h-16">
                <div className="flex items-center justify-center w-2/3 bg-avo-green-green">
                    <span className="font-bold text-white">Follow us on <a href="">github</a>!</span>
                </div>
                <div className="w-1/3"></div>
            </div>

            <div className="hidden sm:flex h-16">
                <div className="w-2/3"></div>
                <div className="w-1/3 grow-1 bg-avo-pink-pink"></div>
            </div>
        </div>
    );
}
