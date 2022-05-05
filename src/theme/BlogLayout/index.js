import React from "react";
import Layout from "@theme/Layout";
import BlogComp from "@site/src/components/BlogComp";


export default function BlogLayout(props) {
    const {sidebar, toc, children, ...layoutProps} = props;
    return (
        <div className="w-full max-w-[105rem] mx-auto">
            <Layout {...layoutProps}>
                <BlogComp sidebar={props.sidebar} toc={props.toc} children={props.children}></BlogComp>
            </Layout>
        </div>

    );
}
