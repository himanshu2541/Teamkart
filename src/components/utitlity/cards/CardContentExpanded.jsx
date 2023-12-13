import React from 'react'
import {motion} from "framer-motion";

const CardContentExpanded = ({data}) => {
    return (
        <motion.div
            variants={{
                inactive: {
                    opacity: 0,
                    y: 10,

                },
                active: {
                    opacity: 1,
                    y: 0,
                }
            }}
            transition={
                {duration: 0.5, delay: 0.5}
            }
            animate={"active"}
            initial={"inactive"}
            className={"card-content-expanded"}>
            <h1>{data.carName}</h1>
            <p>{data.carDesc}</p>
            <div className={'car-spec-heading'}>
                <h2>Car Specifications</h2>
            </div>
            {
                Object.keys(data.carSpecs).map((key, keyIndex) => {
                    return (
                        <div key={keyIndex} className={'car-specs'}>
                            <div className={'car-specs-title'}>
                                <h3>{key}</h3>
                            </div>
                            <div className={'car-specs-content'}>{Object.keys(data.carSpecs[key]).map((specKey, specIndex) => {
                                return (
                                    <div key={specIndex} className={'spec'}>
                                        <p>{specKey}</p>
                                        <p>{Object.values(data.carSpecs[key][specKey])}</p>
                                    </div>
                                )
                            })}</div>
                        </div>

                    )
                })
            }
        </motion.div>
    )
}
export default CardContentExpanded
