import React from "react";

export default function DividerColor() {

    return (
        <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
            <div className='flex h-16'>
                <div className='flex-grow grow-1 bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green'></div>
                <div className='flex-grow grow-2'></div>
            </div>
            <div className='flex h-80'>
                <div className='flex-grow grow-1 bg-avo-blue-dark'></div>
                <div className='flex-grow grow-2 bg-avo-green-green'></div>
            </div>
        </div>
    );
}
