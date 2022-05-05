import React from "react";
import BGimg1 from "@site/static/img/BGimg_01.jpg";
import BGimg2 from "@site/static/img/BGimg_02.jpg";
import BGimg3 from "@site/static/img/BGimg_03.jpg";
import BGimg4 from "@site/static/img/BGimg_04.jpg";
import BGimg5 from "@site/static/img/BGimg_05.jpg";
import {useColorMode} from "@docusaurus/theme-common";
import clsx from "clsx";

export default function DividerImage() {
    const imgArr = [BGimg1, BGimg2, BGimg3, BGimg4, BGimg5];
    const IMGswap = imgArr[Math.floor(Math.random() * imgArr.length)]
    const {colorMode} = useColorMode();
    return (
        <div className="px-4 sm:px-16 mx-auto">
            <div className="flex flex-col -mx-4 sm:-mx-[4rem]">
                <div className='hidden sm:flex sm:h-16'>
                    <div className='w-full sm:w-4/12 bg-avo-green-green'></div>
                    <div className="sm:w-9/12"></div>
                </div>
                <div className='flex h-60 md:h-80'>
                    <div className={clsx("sm:w-4/12")}></div>
                    <div className="w-full sm:w-9/12">
                        <img className="w-full h-full object-cover bg-avo-green-green" src={IMGswap} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}
