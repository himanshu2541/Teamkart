import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import './cards.css'
import CardContent from "./CardContent.jsx";
import CardContentExpanded from "./CardContentExpanded.jsx";

const Card = ({data}) => {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <motion.div
                className={`card ${isExpanded ? "expanded" : "initial"}`}
                variants={{
                    inactive: {
                        display: "none",
                        background: "rgba(0,0,0,0)",
                        transition: {
                            duration: 0.2, delay: 0.15
                        }
                    }, active: {
                        display: "block",
                        overflowY: "none",
                        background: "rgba(0,0,0,0.9)",
                        transition: {
                            duration: 0.2, delay: 0.15
                        }
                    }
                }}
                animate={isExpanded ? "active" : "inactive"}
                onClick={() => setIsExpanded(prevState => !prevState)}
            />

            <motion.div
                className={`card-content`}
                variants={{
                    inactive: {
                        transition: {
                            staggerChildren: 0.3, duration: 0.4, delay: 0.4
                        }
                    }, active: {
                        transition: {
                            staggerChildren: 0.3, delayChildren: 0.3, duration: 0.4, delay: 0.4, staggerDirection: -1
                        }
                    }
                }}
                animate={isExpanded ? "active" : "inactive"}
                onClick={() => setIsExpanded(prevState => !prevState)}
            >
                <CardContent data={data} key={'card-initial'} isExpanded={isExpanded}/>
                <motion.div
                    className={`card-content-popup ${isExpanded ? "expanded" : "initial"}`}
                    variants={{
                        inactive:{
                            position: "absolute",
                            background: "rgba(255,255,255,0)",
                            transition: {
                                duration: 0.1
                            }
                        },
                        active:{
                            position: "fixed",
                            borderRadius: "20px",
                            background: "rgba(255,255,255, 1)",
                            transition: {
                                duration: 0.3, delay: 0.4
                            }
                        },
                    }}
                    animate={isExpanded ? "active" : "inactive"}
                >
                    <AnimatePresence initial={false}>
                        {isExpanded ?
                            <>
                                <CardContentExpanded data={data} key={'card-final'} isExpanded={isExpanded}/>
                            </>
                            : ""
                        }
                    </AnimatePresence>
                </motion.div>
            </motion.div>

        </>
    )
}
export default Card
