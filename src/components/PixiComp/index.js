import React, {useRef, useEffect} from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

import Displace from "@site/static/img/DP_03.jpg";
import BGimg1 from "@site/static/img/BGimg_01.jpg";
import BGimg2 from "@site/static/img/BGimg_02.jpg";
import BGimg3 from "@site/static/img/BGimg_03.jpg";
import BGimg4 from "@site/static/img/BGimg_04.jpg";
import BGimg5 from "@site/static/img/BGimg_05.jpg";

export default function PixiComp() {
    const PIXI = require("pixi.js");
    const gsap = require("gsap");
    const imgArr = [BGimg1, BGimg2, BGimg3, BGimg4, BGimg5];
    const IMGswap = imgArr[Math.floor(Math.random() * imgArr.length)]
    const ref = useRef(null);

    useEffect(() => {
        let rt = [],
            bg,
            bgs = [],
            rts = [],
            containers = [],
            channelsContainer = [],
            displacementFilters = [],
            brushes = [];

        const sizeConfig = {
            width: 1280,
            height: 853,
        }

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
            width: sizeConfig.width,
            height: sizeConfig.height,
            backgroundColor: 0x32dcab,
        });

        for (let i = 0; i < 3; i++) {
            rt.push(
                PIXI.RenderTexture.create({width: sizeConfig.width, height: sizeConfig.height}),
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
        // Start the PixiJS app
        app.start();

        return () => {
            app.destroy(true, true);
        };
    }, [ref]);

    return (
        <div ref={ref}
            className={clsx("pixiRef", styles.pixiRef)}
            data-img={IMGswap}
            data-displace={Displace}
        />
    );
};
