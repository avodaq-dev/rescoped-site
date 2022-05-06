import React from "react";
import {rando} from "../../utils/randomIMG"

export default function DividerImage() {
    return (
        <div className="px-4 sm:px-16 mx-auto">
            <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
                <div className="hidden sm:flex sm:h-16">
                    <div className="w-full sm:w-4/12 bg-avo-green-green"/>
                    <div className="sm:w-9/12"/>
                </div>
                <div className="flex h-60 md:h-80">
                    <div className="sm:w-4/12"/>
                    <div className="w-full sm:w-9/12">
                        <img className="w-full h-full object-cover bg-avo-green-green" src={rando} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}
