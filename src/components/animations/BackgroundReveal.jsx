import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion";

export const BackgroundReveal = ({children, width="fit-content" ,className, textAlign}) => {
    const ref = useRef()
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const backgroundRevealStyles = {
        position: "absolute",
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: "red",
        zIndex: 20,
    }

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible").then().catch(err => console.log(err))
            slideControls.start("visible").then().catch(err => console.log(err))
        }
    }, [isInView])


    return (
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}} className={className}>
            <motion.div variants={{
                hidden: {opacity: 0, y: 100, textAlign}, visible: {opacity: 1, y: 0, textAlign},
            }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 0.4}}
                        style={{width: "100%"}}
            >
                {children}
            </motion.div>

            <motion.div variants={{
                hidden: {left: 0}, visible: {left: "100%"},
            }}
                        initial="hidden"
                        animate={slideControls}
                        transition={{duration: 0.5, ease: "easeIn"}}
                        style = {backgroundRevealStyles}
            />

        </div>
    )
}
