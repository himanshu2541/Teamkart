import React, {Children, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react'
import styles from './carousel.module.css'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Carousel = ({children}) => {

    const containerRef = useRef()
    const intervalRef = useRef(null)
    const [current, setCurrent] = useState(1);
    const [translate, setTranslate] = useState(0)

    const actionHandler = useCallback((mode) => {
        containerRef.current.style.transitionDuration = "400ms"
        if (mode === "prev") {
            if (current <= 1) {
                setTranslate(0)
                setCurrent(children.length)
            } else {
                setTranslate(containerRef.current.clientWidth * (current - 1));
                setCurrent(prev => prev - 1)
            }
        } else if (mode === "next") {
            if (current >= children.length) {
                setTranslate(containerRef.current.clientWidth * (children.length + 1))
                setCurrent(1)
            } else {
                setTranslate(containerRef.current.clientWidth * (current + 1));
                setCurrent(prev => prev + 1)
            }
        }
    }, [current, children])

    useEffect(() => {
        const transitionEnd = () => {
            if (current <= 1) {
                containerRef.current.style.transitionDuration = "0ms"
                setTranslate(containerRef.current.clientWidth * current)
            }

            if (current >= children.length) {
                containerRef.current.style.transitionDuration = "0ms"
                setTranslate(containerRef.current.clientWidth * children.length)
            }
        }
        document.addEventListener("transitionend", transitionEnd)

        return () =>{
            document.removeEventListener("transitionend", transitionEnd)
        }
    }, [current, children]);


    //  for autoplay

    useEffect(() => {
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(()=>{
            actionHandler("next")
        }, 3000)

        return () =>{
            if(intervalRef.current){
                clearInterval(intervalRef.current)
            }
        }
    }, [actionHandler]);

    const slides = useMemo(() => {
        if (children.length > 1) {
            let items = Children.map(children, (child, index) => (
                <li key={index} className={styles.Slide}>
                    {child}
                </li>
            ));

            return [
                <li key={children.length + 1} className={styles.Slide}>
                    {children[children.length - 1]}
                </li>,
                ...items,
                <li key={children.length + 2} className={styles.Slide}>
                    {children[0]}
                </li>,
            ]
        }

        return <li className={styles.Slide}>{children[0]}</li>

    }, [children]);

    useEffect(() => {
        const resizeWindow = () =>{
            setTranslate(containerRef.current.clientWidth * current)
        }
        window.addEventListener("resize", resizeWindow)
        return () =>{
            window.removeEventListener("resize", resizeWindow)
        }
    }, []);

    return (
        <>
            <ul
                ref={containerRef}
                className={styles.Container}
                style={{transform: `translate3d(-${translate}px, 0, 0)`}}>
                {slides}
            </ul>
            <IoIosArrowForward className={`${styles.Btn} ${styles.BtnRight}`} onClick={() => actionHandler("next")}/>
            <IoIosArrowBack className={`${styles.Btn} ${styles.BtnLeft}`} onClick={() => actionHandler("prev")}/>
        </>

    )
}
export default Carousel
