import React, {useState} from "react";
import {Reveal} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";

import styles from "./styles.module.scss";
import clsx from "clsx";

import ArrowLG from "@site/static/img/arrow_lg.svg";
import Tool from "@site/src/components/Tool";
import {ToolsData} from "../Tool/ToolsData";


export default function SectionTools() {

    const toolsData = ToolsData;
    const [q, setQ] = useState("");
    const [searchTerm] = useState(["tags"]);

    function search(items) {
        return items.filter((item) => {
            return searchTerm.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <>
            <section className='flex flex-col gap-4 sm:gap-16 overflow-hidden' id={"section-tools"}>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={"col-span-3 ease-out"}>
                    <h2 className="text-3xl sm:text-6xl !leading-tight font-medium sm:font-light pr-8 sm:pr-16">
                        Our <br/>
                        Tools
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-between sm:items-end">
                        <p className='text-lg'>Learn more about our tools <br/> and get the exclusive details.</p>
                        <input className="p-2 font-bold w-[16rem]" type="text" placeholder="Filter by #Tag" value={q}
                            onChange={(e) => setQ(e.target.value)}/>
                    </div>

                    <ul className=" grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] lg:grid-cols-4 gap-[clamp(1rem,calc(1rem+1vw),2rem)]">
                        {search(toolsData).map(
                            (toolsData, index) => (<Tool toolsData={toolsData} key={index}/>)
                        )}
                    </ul>
                </Reveal>
            </section>
        </>
    );
}
