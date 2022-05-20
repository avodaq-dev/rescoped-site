import React, {useState} from "react";
import {Reveal} from "react-awesome-reveal";
import {fadeUpProps, customKeyframes} from "@avo/monorepo/doku_libs/props/fadeAnimation";

import styles from "./styles.module.scss";
import clsx from "clsx";

import ArrowLG from "@site/static/img/arrow_lg.svg";
import Product from "@site/src/components/Product";
import {DataProducts} from "../Product/DataProducts";


export default function SectionProducts() {

    const productsData = DataProducts;
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
            <article className='flex flex-col gap-4 sm:gap-16 overflow-hidden'>
                <Reveal keyframes={customKeyframes} {...fadeUpProps} className={"col-span-3 ease-out"}>
                    <h2 className="text-3xl sm:text-6xl !leading-tight font-medium sm:font-light pr-8 sm:pr-16">
                        Our <br/>
                        Products
                    </h2>
                    <p className='text-lg'>Learn more about our products <br/> and get the exclusive details.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-between sm:items-end">
                        <input
                            className="p-2 w-72 font-bold"
                            type="text"
                            placeholder="Filter Tags"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <div className="font-bold text-lg flex gap-4 items-center">
                            <p>Scroll </p>
                            <ArrowLG className="w-12 h-auto"/>
                        </div>
                    </div>
                    <ul className={clsx("grid grid-flow-col justify-start gap-2 sm:gap-4 lg:gap-6 overflow-auto -mt-10", styles.scroller)}>
                        {search(productsData).map(
                            (val, index) => (<Product val={val} key={index}/>)
                        )}
                    </ul>
                </Reveal>
            </article>
        </>
    );
}
