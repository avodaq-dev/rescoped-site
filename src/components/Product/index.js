import React, {useState} from "react";
import clsx from "clsx";
import Button from "../Button";

// https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
// https://codepen.io/nregard/pen/KGbvoG


export default function Product({val, index}) {
    const [error, setError] = useState(null);
    if (error) {
        return (
            <p>
                {error.message}, if you get this error, the free API I used
                might have stopped working, but I created a simple example that
                demonstrate how this works,{" "}
                <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
                    {" "}
                    check it out{" "}
                </a>{" "}
            </p>
        );
    } else {
        return (
            <li key={index}
                className={clsx("h-full w-40 sm:w-[clamp(10rem,calc(15rem+8vw),30rem)] opacity-90 hover:opacity-100 transition-all ease-in-out")}>
                <figure className="h-full flex flex-col">
                    <picture className="relative">
                        <img alt="A placeholder image" loading="lazy" src={val.src}
                             className="rounded-t-md max-h-60 w-full"/>
                        <div className="absolute -bottom-7 right-4">
                            <Button text={"Open"} link={val.link}/>
                        </div>
                    </picture>
                    <div className="p-4 h-full flex flex-col content-stretch gap-4 rounded-b-md bg-avo-blue-800/70">
                        <figcaption className="font-bold">{val.title}</figcaption>
                        <p className="hidden sm:block">{val.description}</p>
                        <div className="flex gap-3 flex-wrap">
                            {val.tags.map((tag, index) => {
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
        );
    }


}
