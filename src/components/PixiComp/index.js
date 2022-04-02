import React, {useRef, useEffect} from "react";
import clsx from "clsx";
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from "../PixiComp/styles.module.scss";

import Displace from '@site/static/img/DP_02.jpg';
import BGimg1 from '@site/static/img/BGimg_01.jpg';
import BGimg2 from '@site/static/img/BGimg_02.jpg';
import BGimg3 from '@site/static/img/BGimg_03.jpg';
import BGimg4 from '@site/static/img/BGimg_04.jpg';
import BGimg5 from '@site/static/img/BGimg_05.jpg';

export default function TestComp() {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const PIXI = require('pixi.js');
                const gsap = require('gsap');
                const ref = useRef(null);
                const imgArr = [BGimg1, BGimg2, BGimg3, BGimg4, BGimg5];
                const IMGswap =  imgArr[Math.floor(Math.random() * imgArr.length)]
                console.log(IMGswap);

                useEffect(() => {
                    let rt = [],
                        bg,
                        bgs = [],
                        rts = [],
                        containers = [],
                        channelsContainer = [],
                        displacementFilters = [],
                        brushes = [];

                    // CHANNEL FILTERS
                    let redChannelFilter = new PIXI.filters.ColorMatrixFilter();
                    redChannelFilter.matrix = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,];

                    let greenChannelFilter = new PIXI.filters.ColorMatrixFilter();
                    greenChannelFilter.matrix = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,];

                    let blueChannelFilter = new PIXI.filters.ColorMatrixFilter();
                    blueChannelFilter.matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,];

                    channelsContainer.push(
                        redChannelFilter,
                        greenChannelFilter,
                        blueChannelFilter,
                    );

                    // On first render create application
                    const app = new PIXI.Application({
                        width: 1280,
                        height: 853,
                        backgroundColor: 0x32dcab,
                        autoStart: false,
                    });

                    for (let i = 0; i < 3; i++) {
                        rt.push(
                            PIXI.RenderTexture.create(app.screen.width, app.screen.height),
                        );
                        rts.push(rt);
                    }

                    // CONTAINERS
                    let containerRed = new PIXI.Container();
                    containerRed.position.x = 0;
                    let containerGreen = new PIXI.Container();
                    containerGreen.position.x = 0;
                    let containerBlue = new PIXI.Container();
                    containerBlue.position.x = 0;

                    containers.push(containerRed, containerGreen, containerBlue);

                    // LOAD TEXTURES
                    app.loader.add(
                        "bg",
                        ref.current.getAttribute("data-img"),
                    );
                    app.loader.add(
                        "displacement",
                        ref.current.getAttribute("data-displace"),
                    );

                    // LOADER
                    app.loader.load((loader, resources) => {
                        let tempBg = new PIXI.Sprite(resources.bg.texture);
                        tempBg.width = app.screen.width;
                        tempBg.height = app.screen.height * 1.5;

                        app.renderer.render(tempBg, rt[0]);

                        for (let i = 0, len = containers.length; i < len; i++) {
                            app.stage.addChild(containers[i]);
                            brushes.push(new PIXI.Sprite(resources.displacement.texture));
                            displacementFilters.push(
                                new PIXI.filters.DisplacementFilter(brushes[i]),
                            );

                            bg = new PIXI.Sprite(rts[0][0]);
                            bgs.push(bg);
                            containers[i].filters = [
                                channelsContainer[i],
                                displacementFilters[i],
                            ];
                            containers[i].addChild(bgs[i], brushes[i]);
                        }

                        brushes[0].anchor.set(0.5);
                        brushes[1].anchor.set(0.6);
                        brushes[2].anchor.set(0.4);

                        containers[1].filters[1].blendMode = PIXI.BLEND_MODES.ADD;
                        containers[2].filters[1].blendMode = PIXI.BLEND_MODES.ADD;

                        app.stage.interactive = true;

                        app.stage.on("pointermove", (ev) => {
                            let x = ev.data.global.x;
                            let y = ev.data.global.y;

                            for (let i = 0, len = containers.length; i < len; i++) {
                                gsap.gsap.to(displacementFilters[i].scale, {
                                    duration: 1.5,
                                    x: Math.atan(x - brushes[i].x) * 50,
                                    y: Math.atan(y - brushes[i].y) * 50,
                                    ease: "power2.out",
                                });
                                brushes[i].position = ev.data.global;
                            }
                        });
                    })

                    // Add app to DOM
                    ref.current.appendChild(app.view);
                    // Start the PixiJS app
                    app.start();
                    return () => {
                        app.destroy(true, true);
                    };
                }, [ref]);

                return (
                    <div ref={ref}
                         className={clsx('arthur', styles.arthur)}
                         data-img={IMGswap}
                         data-displace={Displace}
                    />
                );
            }}
        </BrowserOnly>
    );
};
