import React from 'react'
import CustomCarousel from "../components/CustomCarousel.jsx";
import {Reveal} from "../components/animations/index.js";
import '../assets/styles/cars.css'
import Card from "../components/utitlity/cards/Card.jsx";
import {CarDetails} from "../components/CarDetails.js";
import Heading2 from "../components/utitlity/Heading2.jsx";
const Cars = () => {
    return (
        <>
            <Reveal width={"100%"} widthInner={"100%"}>
                <CustomCarousel/>
            </Reveal>
            <div className={'cars'}>
                <div className={'cars-inner-container'}>
                    <Reveal>
                        <Heading2>CARS</Heading2>
                    </Reveal>
                    <div className={'car-cards'}>
                        <div className={'car-cards-inner-container'}>
                            {CarDetails.map((car, index)=>{
                                return(
                                    <Reveal key={index} width={"100%"} widthInner={"100%"}>
                                        <Card data={car}/>
                                    </Reveal>
                                )
                            })
                            }
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Cars
