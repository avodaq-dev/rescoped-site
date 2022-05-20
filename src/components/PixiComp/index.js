import React, {useEffect, useRef} from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Displace from "@site/static/img/DP_03.jpg";
import {rando} from "../../utils/randomIMG"

export default function PixiComp() {
    const ref = useRef(null);

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            const PIXI = require("pixi.js");
            const gsap = require("gsap");

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
            });

            let renderTexture = PIXI.RenderTexture.create({width: app.screen.width, height: app.screen.height});

            for (let i = 0; i < 3; i++) {
                rt.push(
                    renderTexture
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

                tempBg.width = app.screen.width * 1.2;
                tempBg.height = app.screen.height * 1.5;

                app.renderer.render(tempBg, {renderTexture});

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

                app.ticker.add(function (delta) {
                    brushes[0].rotation -= 0.005 * delta;
                    brushes[1].rotation -= 0.005 * delta;
                    brushes[2].rotation -= 0.005 * delta;
                });

                containers[1].filters[1].blendMode = PIXI.BLEND_MODES.ADD;
                containers[2].filters[1].blendMode = PIXI.BLEND_MODES.ADD;

                app.stage.interactive = true;

                const mouseMove = () => {
                    app.stage.on("pointermove", (ev) => {
                        let x = ev.data.global.x;
                        let y = ev.data.global.y;
                        for (let i = 0, len = containers.length; i < len; i++) {

                            gsap.gsap.to(displacementFilters[i].scale, {
                                duration: 1,
                                // x: Math.atan(x - brushes[i].x) * 55,
                                // y: Math.atan(y - brushes[i].y) * 55,
                                x: 80,
                                y: 80,
                                ease: "power2.easeInOut",
                            });

                            gsap.gsap.to(brushes[i].position, {
                                duration: 1.5,
                                x: ev.data.global.x,
                                y: ev.data.global.y,
                                ease: "power2.easeInOut",
                            });
                        }
                    });
                }
                const mouseStop = () => {
                    let centerX = (headerElm.offsetLeft + headerElm.offsetWidth / 2);
                    let centerY = (headerElm.offsetTop + headerElm.offsetHeight / 2);

                    for (let i = 0, len = containers.length; i < len; i++) {
                        gsap.gsap.to(brushes[i].position, {
                            duration: 2,
                            x: centerX,
                            y: centerY,
                            ease: "power2.easeInOut",
                        });
                        gsap.gsap.to(displacementFilters[i].scale, {
                            duration: 3,
                            x: 25,
                            y: 25,
                            ease: "power2.easeInOut",
                        });
                    }
                }
                const headerElm = document.getElementById("section-header");
                headerElm.addEventListener("mouseenter", () => {
                    mouseMove();
                });
                headerElm.addEventListener("mouseleave", () => {
                    app.stage.off("pointermove", null);
                    mouseStop();
                });
                mouseMove();

            })


            // Add app to DOM
            ref.current.appendChild(app.view);
            app.start();

            return () => {
                app.destroy(true, true);
            };
        }
    }, [ref]);

    if (window.innerWidth >= 600) {
        return (
            <div ref={ref}
                 className={clsx("pixiRef", styles.pixiRef)}
                 data-img={rando}
                 data-displace={Displace}
            />
        );
    } else {
        return (
            <img ref={ref} className="IMGRef absolute inset-0 w-full h-full object-cover bg-avo-green-green opacity-75"
                 src={rando} alt=""/>
        )
    }
};
