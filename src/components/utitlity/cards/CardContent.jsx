import React from 'react'
import {motion} from "framer-motion";

const CardContent = ({data}) => {
    return (
        <motion.div className={'card-content-collapsed'} variants={{
            inactive: {
                transition:{
                    staggerChildren: 0.3,
                    duration: 0.4,
                    delay: 0.4
                }
            },
            active: {
                transition:{
                    staggerChildren: 0.3,
                    delayChildren: 0.3,
                    duration: 0.4,
                    delay: 0.4,
                    staggerDirection: -1
                }
            }
        }}
        exit={"inactive"}
        animate={"active"}
        initial={"inactive"}
        >
            <div className={'image-container'}>
                <img src={data.carImg} width={"100%"} alt={'car-images'}/>
            </div>
            <h1>{data.carName}</h1>
            <p>{data.carDesc}</p>
        </motion.div>
    )
}
export default CardContent
