import React from "react";

export default function DividerColor() {

    return (
        <div className="flex flex-col -mx-4 sm:-mx-[4rem] mb-32">
            <div className='flex h-16 mb-16'>
                <div className='flex-grow grow-2'></div>
                <div className='flex-grow grow-1 bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green'></div>
            </div>
            <div className='flex h-16'>
                <div className='flex-grow grow-2 bg-avo-pink-pink text-white relative'>
                    <span className="absolute top-4 left-4">hallo</span>
                </div>
                <div className='flex-grow grow-1'></div>
            </div>

            <div className='flex h-16'>
                <div className='flex-grow grow-2'></div>
                <div className='flex-grow grow-1 bg-avo-green-green'></div>
            </div>
        </div>
    );
}
