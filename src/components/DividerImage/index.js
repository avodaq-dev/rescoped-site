import React from "react";
import BGimg1 from '@site/static/img/BGimg_01.jpg';
import BGimg2 from '@site/static/img/BGimg_02.jpg';
import BGimg3 from '@site/static/img/BGimg_03.jpg';
import BGimg4 from '@site/static/img/BGimg_04.jpg';
import BGimg5 from '@site/static/img/BGimg_05.jpg';
import {useColorMode} from "@docusaurus/theme-common";
import clsx from "clsx";

export default function DividerImage() {
    const imgArr = [BGimg1, BGimg2, BGimg3, BGimg4, BGimg5];
    const IMGswap = imgArr[Math.floor(Math.random() * imgArr.length)]
    const {colorMode} = useColorMode();
    const darkTheme = colorMode === 'dark' ? 'bg-avo-blue-dark' : 'bg-white';

    return (
        <div className="flex flex-col -mx-4 sm:-mx-[4rem]" id='divider-image'>
            <div className='flex h-16'>
                <div
                    className='w-1/3 bg-gradient-to-r from-avo-pink-pink via-purple-500 to-avo-green-green'></div>
                <div className='w-2/3'></div>
            </div>
            <div className='flex h-40 sm:h-60 md:h-80'>
                <div className={clsx('w-1/3', darkTheme)}></div>
                <img className="w-2/3 h-100 object-cover bg-avo-green-green" src={IMGswap} alt=""/>
            </div>
        </div>
    );
}