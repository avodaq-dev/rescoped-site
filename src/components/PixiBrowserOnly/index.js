import React, {useRef, useEffect} from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function PixiBrowserOnly() {
    const isBrowser = useIsBrowser();
    const PIXI = require("pixi.js");
    const ref = useRef(null);

    useEffect(() => {
        const app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x5BBA6F,
        });
        ref.current.appendChild(app.view);
        app.start();
        return () => {
            app.destroy(true, true);
        };
    }, [ref]);

    if (isBrowser) {
        return <div ref={ref}/>;
    }
};
