import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion";

export const Reveal = ({children, width="fit-content", className, widthInner, height}) => {
    const ref = useRef()
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible").then().catch(err => console.log(err))
        }
    }, [isInView])
    return (
        <div ref={ref} style={{position: "relative", width, height, overflow: "hidden"}} className={className}>
            <motion.div variants={{
                hidden: {opacity: 0, y: 100, width: widthInner}, visible: {opacity: 1, y: 0, width: widthInner},
            }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}

