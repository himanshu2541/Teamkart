import React from 'react'
import Carousel from "./carousel/Carousel.jsx";



const CustomCarousel2 = () => {
    const styles = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    }

    return (
        <div>
            <Carousel>
                <picture>
                    <source srcSet={'/images/slider/c1.webp'}/>
                    <img alt={'slider image 1'} src={'/images/slider/c1.jpg'} style={styles}/>
                </picture>
                <picture>
                    <source srcSet={'/images/slider/c2.webp'}/>
                    <img alt={'slider image 2'} src={'/images/slider/c2.jpg'} style={styles}/>
                </picture>
                <picture>
                    <source srcSet={'/images/slider/IMG_3319.webp'}/>
                    <img alt={'slider image 3'} src={'/images/slider/IMG_3319.jpg'} style={styles}/>
                </picture>

                <picture>
                    <source srcSet={'/images/slider/Slide69.webp'}/>
                    <img alt={'slider image 4'} src={'/images/slider/Slide69.jpg'} style={styles}/>
                </picture>
                <picture>
                    <source srcSet={'/images/slider/slider1.webp'}/>
                    <img alt={'slider image 5'} src={'/images/slider/slider1.jpg'} style={styles}/>
                </picture>
                <picture>
                    <source srcSet={'/images/slider/team.webp'}/>
                    <img alt={'slider image 6'} src={'/images/slider/team.jpg'} style={styles}/>
                </picture>
            </Carousel>
        </div>
    )
}
export default CustomCarousel2
