import React from "react";
import SectionFrontend from "@site/src/components/SectionFrontend";
import SectionBacked from "@site/src/components/SectionBacked";

export default function SectionFrontendBackend() {
    return (
        <section className="px-4 sm:px-16 mx-auto py-32 grid gap-40 sm:gap-56" id="section-front-back">
            <SectionFrontend/>
            <SectionBacked/>
        </section>
    );
}
