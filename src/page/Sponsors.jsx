import React from 'react'
import {BackgroundReveal, Reveal} from "../components/animations/index.js";
import CustomCarousel from "../components/CustomCarousel.jsx";
import {Link} from "react-router-dom";
import '../assets/styles/sponsors.css'
import Heading2 from "../components/utitlity/Heading2.jsx";
import {
    Ansys,
    Arjun, AsianPaints, Connextion, IrEsports, Loctite, Logitech,
    Mallcom, Pcbpow, Pcbway,
    RapidHarness,
    Sandhu,
    Sendfast,
    Siyarams,
    SteelIndia,
    TataBattery,
    Tekkr
} from "../components/Logos.jsx";

const Sponsors = () => {
    return (
        <>
            <Reveal width={"100%"} widthInner={"100%"}>
                <CustomCarousel/>
            </Reveal>
            <div id={'sponsors'}>
                <div className={'sponsors-inner-container'}>
                    <div className={'sponsors-section-1'}>
                        <BackgroundReveal>
                            <Heading2>SPONSORSHIP BROCHURE</Heading2>
                        </BackgroundReveal>
                        <BackgroundReveal>
                            <p>TeamKART is a student project under the IIT Kharagpur. Being one of the premier
                                engineering universities in India, the institute provides us with a highly conducive
                                environment to innovate and excel in all the areas involved in the production of a
                                formula style race car. Our sponsors are the ones who lead us to realize this goal by
                                enabling us access to the best possible resources required to satiate our never-ending
                                thirst to do the finest engineering.</p>
                        </BackgroundReveal>
                        <Reveal width={"100%"} widthInner={"100%"} className={'sponsorship-brochure-link'}>
                            <Link to={'/sponsors/sponsors-pdf'} target={'_blank'}>Our Sponsorship Brochure</Link>
                        </Reveal>
                    </div>

                    <div className={'sponsors-section-2'}>
                        <Heading2>Title sponsor</Heading2>
                        <Reveal width={"100%"} widthInner={"100%"} className={'title-sponsor-logos'}>
                            <Tekkr/>
                            <Arjun/>
                        </Reveal>
                    </div>

                    <div className={'sponsors-section-2'}>
                        <Heading2>Major sponsors</Heading2>
                        <Reveal width={"100%"} widthInner={"100%"} className={'title-sponsor-logos'}>
                            <Mallcom/>
                            <Sendfast/>
                        </Reveal>
                    </div>

                    <div className={'sponsors-section-3'}>
                        <Heading2>Technical sponsors</Heading2>
                        <div className={'technical-sponsors-logos'}>
                            <SteelIndia/>
                            <Sandhu/>
                            <TataBattery/>
                            <Siyarams/>
                            <RapidHarness/>
                            <Pcbpow/>
                            <Pcbway/>
                            <Loctite/>
                            <AsianPaints/>
                            <Connextion/>
                            <Ansys/>
                            <Logitech/>
                            <IrEsports/>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Sponsors
