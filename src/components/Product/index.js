import React from "react";
import Button from "../Button";

// https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
// https://codepen.io/nregard/pen/KGbvoG


export default function Product({productData, index}) {

    return (
        <div className={"h-full opacity-90 hover:opacity-100 transition-all ease-in-out rounded-md"}>
            <li key={index} className="h-full rounded-lg shadow-lg bg-avo-blue-800/70">
                <figure>
                    <picture className="relative">
                        <img className="rounded-t-lg" alt={`${productData.title} image`} loading="lazy"
                            src={productData.src}/>
                        <div className="absolute -bottom-7 right-4">
                            <Button text={"Open"} link={productData.link}/>
                        </div>
                    </picture>

                    <div className="flex flex-col gap-4 p-6 h-full">
                        <figcaption className="text-xl font-medium">{productData.title}</figcaption>
                        <p className="text-base">{productData.description}</p>
                        <div className="flex gap-3 flex-wrap mt-2">
                            {productData.tags.map((tag, index) => {
                                return (
                                    <div
                                        key={`tag-${index}`}
                                        type='button'
                                        className="text-sm font-bold rounded-full px-3 pb-[2px] bg-avo-green-green/30"
                                    >
                                        #{tag}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </figure>
            </li>
        </div>
    )


}
