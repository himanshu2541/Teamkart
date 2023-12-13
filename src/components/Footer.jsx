import React from 'react'
import '../assets/styles/footer.css'
import {IoIosMail} from "react-icons/io";
import {FaLocationDot} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {BackgroundReveal, Reveal} from "./animations/index.js";
const LazyMap = React.lazy(()=>import('./MapEmbed.jsx'))
const Footer = () => {
    const teamLeaders = [{
        id: 1, name: "Manish S.", phone: "+91-9500018839"
    }, {
        id: 2, name: "Vedant Dave", phone: "+91-9619445999"
    }]
    return (<div id={'footer'}>

        <div className={'section-1'}>
            <Reveal className={'find-us-section'} width={"100%"} widthInner={"100%"}>
                <div className={'map-responsive-container'}>
                    <h1>Find Us</h1>
                    <div className={' map-responsive'}>
                        <React.Suspense fallback={'Loading...'}>
                            <LazyMap />
                        </React.Suspense>
                    </div>
                </div>
            </Reveal>
            <div id={'contacts'} className={'contact-us-section'}>
                <BackgroundReveal>
                    <h1>Contacts</h1>
                </BackgroundReveal>
                    <div className={'person-contact'}>
                        {teamLeaders.map(item => {
                            return <BackgroundReveal key={`${item.id}`}>
                                {item.name}<br/><a href={`tel:${item.name}`}>{item.phone}</a>
                            </BackgroundReveal>
                        })}
                    </div>

                <BackgroundReveal>
                    <div className={'address'}>
                        <div>
                            <IoIosMail size={20}/>
                            <Link to={'mailto:teamkartmedia@gmail.com'} target={'_blank'}>teamkartmedia@gmail.com</Link>
                        </div>
                        <div>
                            <FaLocationDot size={20}/>
                            <span>
                            <p>Behind Nehru Museum, IIT-Kharagpur</p>
                            <p>Kharagpur, West Bengal</p>
                            <p>Pincode-721302</p>
                        </span>
                        </div>
                    </div>
                </BackgroundReveal>

            </div>
        </div>

    </div>)
}
export default Footer
