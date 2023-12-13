import React from 'react'
import AboutBackgroundImage from "../assets/images/landing-page.jpeg";
import '../assets/styles/home.css'
import {Link} from "react-router-dom";

import {
    Ansys,
    Arjun,
    AsianPaints,
    Connextion,
    IrEsports,
    Loctite,
    Mallcom, Pcbpow, Pcbway, RapidHarness, Sandhu,
    Sendfast, Siyarams, SteelIndia, TataBattery,
    Tekkr,
    Tesla
} from "../components/Logos.jsx";
import {Reveal} from "../components/animations/Reveal.jsx";
import {BackgroundReveal} from "../components/animations/index.js";

const Home = () => {
    return (
        <div id={'home'}>
                <div className={"home-welcome-text"}>
                    <img alt={"logo"} src={'/images/logo/logo.png'}/>
                    <h1>Teamkart<br /> Motorsports.</h1>
                </div>


            <Reveal width={'100%'} className={'home-image'} widthInner={"100%"}>
                <img src={AboutBackgroundImage} alt={'landing page'} className={'landing-image'}/>
            </Reveal>


            <div className={'home-section-1'}>
                <div className={'home-main-text'}>
                    <BackgroundReveal width={"100%"}>
                        <h1>Fostering Engineering Excellence, Embracing the EV Frontier</h1>
                    </BackgroundReveal>
                    <BackgroundReveal>
                        <p> Teamkart Motorsports, a nonprofit project, emphasizes collaborative skill development and
                            practical
                            engineering through Formula Student. Designing, manufacturing, testing, and competing in a
                            formula-style race car bridges academic and professional realms. The shift to electric vehicles
                            this
                            year showcases the team's commitment to sustainable technology.
                        </p>
                    </BackgroundReveal>
                    <BackgroundReveal className={"home-main-text-link"}>
                        <Link to={'/'}>Read More</Link>
                    </BackgroundReveal>
                </div>
            </div>

            <div className={'home-section-2'}>
                <div className={"section-2-inner"}>
                    <BackgroundReveal className={'home-stats'} textAlign={"center"}>
                        <h1>8</h1>
                        <h3>CARS</h3>
                    </BackgroundReveal>
                    <BackgroundReveal className={'home-stats'} textAlign={'center'}>
                        <h1>70+</h1>
                        <h3>MEMBERS</h3>
                    </BackgroundReveal>
                    <BackgroundReveal className={'home-stats'} textAlign={"center"}>
                        <h1>15+</h1>
                        <h3>YEARS</h3>
                    </BackgroundReveal>
                </div>
            </div>

            <div className={'home-section-3'}>
                <div>
                    <BackgroundReveal textAlign={"center"}>
                        <h1>Glimpse of Cars</h1>
                    </BackgroundReveal>
                    <div className={'car-img'}>
                        <BackgroundReveal className={'car-img-reveal'}>
                            <img src={"/images/cars-image/k6r.jpg"} alt={'k6'}/>
                            <BackgroundReveal width={"100%"} className={'car-text-center'}>
                                <h3>K6 - 2023</h3>
                                <p>8th in Formula Bharat 2023</p>
                            </BackgroundReveal>
                        </BackgroundReveal>
                        <BackgroundReveal className={'car-img-reveal'}>
                            <img src={"/images/cars-image/k6r.jpg"} alt={'ke-1'}/>
                            <BackgroundReveal width={"100%"} className={'car-text-center'}>
                                <h3>KE-1</h3>
                                <p>Coming soon...</p>
                            </BackgroundReveal>
                        </BackgroundReveal>
                    </div>
                    <BackgroundReveal className={'more-car-btn'}>
                        <Link to={'/cars'}>More Cars</Link>
                    </BackgroundReveal>
                </div>
            </div>

            <Reveal width={"100%"} widthInner={"100%"}>
                <div className={'home-section-4'}>
                    <div className={'sponsor-logos'}>
                        <Tekkr />
                        <Tesla />
                        <Arjun />
                        <Sendfast />
                        <Mallcom />
                        <Loctite />
                        <Connextion />
                        <Ansys />
                        <AsianPaints />
                        <IrEsports />
                        <Pcbway />
                        <Pcbpow />
                        <RapidHarness />
                        <Sandhu />
                        <Siyarams />
                        <SteelIndia />
                        <TataBattery />
                    </div>
                    <div className={'sponsor-logos'}>
                        <Tekkr />
                        <Tesla />
                        <Arjun />
                        <Sendfast />
                        <Mallcom />
                        <Loctite />
                        <Connextion />
                        <Ansys />
                        <AsianPaints />
                        <IrEsports />
                        <Pcbway />
                        <Pcbpow />
                        <RapidHarness />
                        <Sandhu />
                        <Siyarams />
                        <SteelIndia />
                        <TataBattery />
                    </div>
                </div>
            </Reveal>
        </div>
    )
}
export default Home
