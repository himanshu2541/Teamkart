import React from 'react'
import CustomCarousel from "../components/CustomCarousel.jsx";
import {Reveal} from "../components/animations/index.js";

const Gallery = () => {
    return (
        <>
            <Reveal width={"100%"} widthInner={"100%"}>
                <CustomCarousel/>
            </Reveal>
            <div>Gallery</div>
        </>
    )
}
export default Gallery
