import React, {useEffect, useRef, useState} from 'react'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef(null)
    const forwardSlider = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const backSlider = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
        if (currentIndex === 0) {
            setCurrentIndex(prev => slides.length - 1)
        }
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(prev => slideIndex)
    }


    // autoplay
    useEffect(() => {
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(()=>{
            forwardSlider()
        }, 3000)

        return () =>{
            if(intervalRef.current){
                clearInterval(intervalRef.current)
            }
        }
    }, [forwardSlider]);

    return (<div>


        {
            slides.map((slide, slideIndex) => {
                return (
                    <div className={`${currentIndex === slideIndex ? 'slide active' : 'slide'}`} key={slideIndex}>
                        {
                            (slideIndex === currentIndex &&
                                <picture>
                                    <source srcSet={slide.urlWebp} type="image/webp" />
                                        <img src={slide.url} alt="slider-img" />
                                </picture>
                            )
                        }
                    </div>
                )
            })
        }
        <IoIosArrowForward  onClick={forwardSlider} className={'arrow forward-arrow'}/>
        <IoIosArrowBack onClick={backSlider} className={'arrow back-arrow'}/>
        <div className={'lines'}>
            {slides.map((slide, slideIndex) => {
                return (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>
                )
            })}
        </div>


        {slides.map((slide, slideIndex) => {
            return (
                <div className={'title'} key={slideIndex}>
                    {
                        (currentIndex === slideIndex &&
                            <p>{slide.title}</p>)
                    }
                </div>
            )
        })}


    </div>)
}
export default ImageSlider
