import React from 'react'
import '../assets/styles/about.css'
import {Link} from "react-router-dom";
import CustomCarousel from "../components/CustomCarousel.jsx";
import {BackgroundReveal, Reveal} from "../components/animations/index.js";
import Heading1 from "../components/utitlity/Heading1.jsx";
import ParagraphType1 from "../components/utitlity/ParagraphType1.jsx";

const About = () => {
    return (<>
        <Reveal width={"100%"} widthInner={"100%"}>
            <CustomCarousel/>
        </Reveal>

        <div id={'about'}>
            <div className={'about-content'}>
                <Reveal className={'about-content-heading'}>
                    <Heading1 paddingBottom={"1rem"}>ABOUT US</Heading1>
                </Reveal>

                <div className={'about-content-para'}>
                    <Reveal width={'100%'} widthInner={"100%"}>
                        <picture>
                            <source srcSet={'/teamk6.webp'}/>
                            <img src={'/teamk6.jpg'} alt={'k6 team'} className={'about-img-responsive'}/>
                        </picture>
                    </Reveal>

                    <BackgroundReveal className={"para"}>
                        <div className={'about-para-inner'}>
                            <ParagraphType1 paddingBottom={"1rem"}>
                                TeamKART is the official formula student team of IIT Kharagpur. We are a group of
                                students
                                who
                                love to get our hands dirty, and design, manufacture and test formula-student style
                                prototype
                                race cars.
                                We participate and represent IIT Kharagpur in various formula student competitions
                                across
                                the
                                globe. If you love the adrenaline rush from sweat and the smell of burning gasoline, we
                                are
                                the
                                ones you should be around. Our engines have been roaring since we were founded in 2008,
                                and
                                we
                                won’t be putting on the brakes any time soon! ‘Know More’ to turn the ignition key on
                                and
                                dive
                                deep into the world of the only automotive research group on campus….
                            </ParagraphType1>
                            <span className={'read-more-btn'}>
                            <Link to={'https://wiki.metakgp.org/w/Team_KART'} target={'_blank'}>Read More...</Link>
                            </span>
                        </div>
                    </BackgroundReveal>
                </div>
            </div>
        </div>

        <div className={'fs-container'}>
            <div className={'fs-inner-container'}>
                <BackgroundReveal className={'fs-heading'}>
                    <Heading1 paddingBottom={"1rem"}>ABOUT FORMULA STUDENT</Heading1>
                </BackgroundReveal>
                <div className={'fs-content'}>
                    <Reveal className={'fs-image-container'} width={"100%"} widthInner={"100%"}>
                        <img alt={'fs-image'} src={'/fs/fs.png'} className={'about-img-responsive'}/>
                    </Reveal>
                    <div className={'fs-para'}>
                        <BackgroundReveal>
                            <ParagraphType1>‘Formula Student’ competitions are student engineering competitions held each year in
                                countries across the world. Student teams from around the world design, build, test and race
                                a formula style race car. The cars are judged on various criteria, and evaluation is done on
                                the team’s performance in the static and dynamic events. You may have the fastest car on the
                                grid, but it does not mean anything if it can’t take the brunt of the man trying to
                                pulverize the brake pedal during technical inspection!
                            </ParagraphType1>
                        </BackgroundReveal>
                        <BackgroundReveal>
                            <ParagraphType1>
                                In India, the Formula Student competition is known as ‘Formula Bharat’ and is held each year
                                in the Kari Motor Speedway racetrack in Coimbatore, Tamil Nadu. More than 50 Indian teams
                                participate each year in the competition to test the mettle of their engineering creation
                                and rack up ideas in the static events. At the end of the day, the teams leave with a lot of
                                new things learned and experience gained, to be back at taking a shot at the podium next
                                year and maybe, get some payback for last time!
                            </ParagraphType1>
                        </BackgroundReveal>
                    </div>
                </div>

                    <Reveal className={'fs-image-container'} width={"100%"} widthInner={"100%"}>
                        <img alt={'fs-image'} src={'/fs/fs19_eventphoto_850x450.jpg'} className={'about-img-responsive'}/>
                    </Reveal>
            </div>
        </div>
    </>)
}
export default About
