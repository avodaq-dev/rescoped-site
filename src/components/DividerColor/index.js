import React from "react";

export default function DividerColor() {

    return (
        <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
            <div className="flex h-16 mb-16">
                <div className="flex-grow grow-2"></div>
                <div className="flex-grow grow-1 bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green"></div>
            </div>
            <div className="flex h-16">
                <div className="w-2/3 bg-avo-pink-pink text-white relative">
                    <span className="absolute top-4 left-4">hallo</span>
                </div>
                <div className="flex-grow w-1/3"></div>
            </div>

            <div className="flex h-16">
                <div className="w-2/3 bg-avo-blue-dark"></div>
                <div className="w-1/3 grow-1 bg-avo-green-green"></div>
            </div>
        </div>
    );
}
