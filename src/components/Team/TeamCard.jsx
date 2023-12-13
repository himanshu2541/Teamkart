import React from 'react'
import './teamCard.css'
import {FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom";
import {BackgroundReveal, Reveal} from "../animations/index.js";

const TeamCard = ({person}) => {
    return (
                <Reveal width={'30%'} widthInner={"100%"} className={'team-card'}>
                    <div className={'img-container'}>
                        <div className={'team-social-media'}>
                            <Link to={person.facebook} target={'_blank'}><FaFacebook/></Link>
                            <Link to={`mailto:${person.mail}`} target={'_blank'}><MdEmail/></Link>
                            <Link to={person.linkedin} target={'_blank'}><FaLinkedin/></Link>
                        </div>
                        <picture>
                            <source srcSet={person.imgWebp}/>
                            <img src={person.img} alt={'image'}/>
                        </picture>
                    </div>


                    <div className={'person-name'}>
                            <h3>{person.name}</h3>
                            <p>{person.designation1}</p>
                            <p>{person.designation2}</p>
                            <p>{person.designation3}</p>
                    </div>
                </Reveal>
    )
}
export default TeamCard
