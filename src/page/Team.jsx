import React from 'react'
import {Reveal} from "../components/animations/index.js";
import CustomCarousel from "../components/CustomCarousel.jsx";
import {TEAM_HEADS_DETAILS, TEAM_MANAGERS_DETAILS} from "../components/TeamDetails.js";
import TeamCard from "../components/Team/TeamCard.jsx";
import Heading2 from "../components/utitlity/Heading2.jsx";
import '../assets/styles/team.css'

const Team = () => {
    return (
        <>
            <Reveal width={"100%"} widthInner={"100%"}>
                <CustomCarousel/>
            </Reveal>
            <div id={'team'}>
                <div className={'team-inner-container'}>
                    <Reveal width={""} widthInner={""}>
                            <Heading2>TEAM MANAGERS</Heading2>
                    </Reveal>
                    <div className={'team-card-container'}>
                        {
                            TEAM_MANAGERS_DETAILS.map((person, index)=>{
                                return(
                                    <TeamCard person={person} key={index}/>
                                )
                            })
                        }
                    </div>

                    <Reveal widthInner={""} width={""}>
                        <Heading2>TEAM Heads</Heading2>
                    </Reveal>
                    <div className={'team-card-container'}>
                        {
                            TEAM_HEADS_DETAILS.map((person, index)=>{
                                return(
                                    <TeamCard person={person} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Team
