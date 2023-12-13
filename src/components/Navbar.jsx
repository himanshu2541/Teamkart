import React, {useEffect, useState} from 'react'
import '../assets/styles/navbar.css'
import {RxCross1, RxHamburgerMenu} from "react-icons/rx";
import {IoIosArrowUp} from "react-icons/io";
import {FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa";
import {Link} from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";
import {Reveal} from "./animations/Reveal.jsx";
import {BackgroundReveal} from "./animations/index.js";


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(prev => !prev)
    }
    const closeNav = () => {
        setNav(false)
    }

    const setScrollVar = () => {
        const htmlElement = document.documentElement;
        let percentOfScreenScrolled = htmlElement.scrollTop * 100 / htmlElement.clientHeight
        if (percentOfScreenScrolled > 100) {
            percentOfScreenScrolled = 100;
        }
        // console.log(percentOfScreenScrolled)
        htmlElement.style.setProperty("--scroll", percentOfScreenScrolled)
        return percentOfScreenScrolled
    }

    useEffect(() => {
        window.addEventListener("scroll", setScrollVar)
        window.addEventListener("resize", setScrollVar)
    }, []);

    const [translatePos, setTranslatePos] = useState(null)
    const [navHeight, setNavHeight] = useState(null)
    const [navColor, setNavColor] = useState(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const backToTopBtn = document.getElementsByClassName('back-to-top')
            const navStyle = document.getElementsByClassName('big-screen-nav')

            let scrollValue = setScrollVar()
            if (scrollValue < 35) {
                setNavHeight("7rem")
                setNavColor("rgba(23, 23, 23, 0.48)")
            } else {
                setNavHeight("6rem")
                setNavColor("rgb(23,23,23)")
            }

            if (scrollValue > 55) {
                setTranslatePos("translateX(0)")
            } else {
                setTranslatePos("translateX(200%)")
            }

        })
    }, []);


    return (
        <>

            {/*// Mobile nav*/}
            <div className={'mobile-nav'}>
                <BackgroundReveal>
                    <div className={`${nav ? "navbar-toggle-btn-active" : ""} navbar-toggle-btn `} id={'navbar'}>
                        {nav ? <RxCross1 size={30} onClick={toggleNav}/> :
                            <RxHamburgerMenu size={30} onClick={toggleNav}/>}
                    </div>
                </BackgroundReveal>

                <div className={`navbar ${nav ? "nav-active" : ""}`} onClick={closeNav}>
                    <div className={`nav-links`} onClick={toggleNav}>
                        <Link to={'/'} id={'logo'}>
                            <img src={'/images/logo/logo.png'} alt={'logo'}/>
                        </Link>
                        <div className={'nav-items'}><Link to={'/'}>Home</Link></div>
                        <div className={'nav-items'}><Link to={'/about'}>About</Link></div>
                        <div className={'nav-items'}><Link to={'/team'}>Team</Link></div>
                        <div className={'nav-items'}><Link to={'/cars'}>Cars</Link></div>
                        <div className={'nav-items'}><Link to={'/sponsors'}>Sponsors</Link></div>
                        <div className={'nav-items'}><Link to={'/newsletter'}>Newsletter</Link></div>
                        <div className={'nav-items'}><AnchorLink href={'/contact'}>Contact</AnchorLink></div>
                    </div>
                </div>
            </div>


            {/*// Big Screen Nav*/}
            <div className={'big-screen-nav'} style={{height: `${navHeight}`, backgroundColor: `${navColor}`}}>
                <div className={'big-screen-nav-wrapper'}>
                    <BackgroundReveal>
                        <Link to={'/'} id={'big-screen-nav-logo'}>
                            <img src={'/images/logo/logo.png'} alt={'logo'}/>
                        </Link>
                    </BackgroundReveal>
                    <BackgroundReveal className={'big-screen-nav-links'}>
                        <div className={'big-screen-nav-items'}>
                            <Link to={'/'}>Home</Link>
                        </div>
                        <div className={'big-screen-nav-items'}>
                            <Link to={'/about'}>About</Link>
                        </div>
                        <div className={'big-screen-nav-items'}><Link to={'/team'}>Team</Link></div>
                        <div className={'big-screen-nav-items'}><Link to={'/cars'}>Cars</Link></div>
                        <div className={'big-screen-nav-items'}><Link to={'/sponsors'}>Sponsors</Link></div>
                        <div className={'big-screen-nav-items'}><Link to={'/newsletter'}>Newsletter</Link></div>
                        <div className={'big-screen-nav-items'}><AnchorLink href={'/footer'}>Contact</AnchorLink></div>
                    </BackgroundReveal>
                </div>
            </div>


            <div className={'back-to-top'} style={{transform: `${translatePos}`}}>
                <AnchorLink href={'/top'}>
                    <IoIosArrowUp size={40} className={'back-to-top-btn'}/>
                </AnchorLink>
            </div>

            <BackgroundReveal>
                <div className={'social-media-sidebar'}>
                    <FaFacebook size={30}/>
                    <FaInstagram size={30}/>
                    <FaLinkedin size={30}/>
                </div>
            </BackgroundReveal>

        </>

    )
}
export default Navbar
