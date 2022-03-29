import React, {useRef, useEffect} from "react";
// import {Application} from "pixi.js";
import * as PIXI from "pixi.js";


import styles from './styles.module.scss';
import clsx from "clsx";


export default function PixiComp() {
    const ref = useRef(null);

    useEffect(() => {
        // On first render create our application
        const app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x5BBA6F,
        });


        //
        //
        // https://pixijs.io/examples/#/demos-basic/simpleplane.js
        // https://www.devauthority.com/react/using-pixi-js-with-react-functional-components-hooks/
        // https://pixijs.io/guides/basics/textures.html
        // Here's the flow we're going to follow: Source Image > Loader > BaseTexture > Texture

        const container = new PIXI.Container();
        app.stage.addChild(container);
        // const texture = PIXI.Texture.from('http://localhost:3000/rescoped-site/assets/images/rescoped_bg-094fd8e4d061b655aa5a94a4ec62843a.gif');
        const texture = PIXI.Texture.from('static/img/displacement-brush3.png');
        const bunny = new PIXI.Sprite(texture);
        container.addChild(bunny);


        const brt = new PIXI.BaseRenderTexture(300, 300, PIXI.SCALE_MODES.LINEAR, 1);
        const rt = new PIXI.RenderTexture(brt);

        const sprite = new PIXI.Sprite(rt);

        sprite.x = 450;
        sprite.y = 60;
        app.stage.addChild(sprite);

        container.x = 100;
        container.y = 60;

        app.ticker.add(() => {
            app.renderer.render(container, rt);
        });


        //
        //
        //
        //


        // Add app to DOM
        ref.current.appendChild(app.view);
        // Start the PixiJS app
        app.start();
        return () => {
            // On unload completely destroy the application and all of it's children
            app.destroy(true, true);
        };
    }, []);

    return (
        <div ref={ref} className={clsx('arthur', styles.arthur)}>

        </div>
    );
}
