import React from 'react'
import CustomCarousel from "../components/CustomCarousel.jsx";
import {Reveal} from "../components/animations/index.js";
import {newsletter} from "../components/newsletter/newsletter.js";
import NewLetterCard from "../components/newsletter/NewLetterCard.jsx";
import '../assets/styles/newsletter.css'
import Heading2 from "../components/utitlity/Heading2.jsx";

const Newsletter = () => {
    return (
        <>
            <Reveal width={"100%"} widthInner={"100%"}>
                <CustomCarousel/>
            </Reveal>
            <div id={'newsletter'}>
                <Heading2>Newsletter & Blogs</Heading2>
                <div className={'newsletter-inner'}>

                    {
                        newsletter.map((item, index) => {
                            return <NewLetterCard key={index} data={item}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Newsletter
