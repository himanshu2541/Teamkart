import React from 'react'
import ImageSlider from "./ImageSlider.jsx";
import '../assets/styles/customCarousel.css'


const CustomCarousel = () => {
    const slides = [
        {
            url: "/images/slider/c1.jpg",
            urlWebp: "/images/slider/c1.webp",
            title: "Campus rollout of our 5th car K3"
        },

        {
            url: "/images/slider/c2.jpg",
            urlWebp: "/images/slider/c2.webp",
            title: "K2 warming its tires in Silverstone, UK"
        },

        {
            url: "/images/slider/IMG_3319.jpg",
            urlWebp: "/images/slider/IMG_3319.webp",
            title: "Showing off our car in front of the proud alumni"
        },

        {
            url: "/images/slider/Slide69.jpg",
            urlWebp: "/images/slider/Slide69.webp",
            title: "K6 in action at the Kari Motor Speedway"
        },
        {
            url: "/images/slider/slider1.jpg",
            urlWebp: "/images/slider/slider1.webp",
            title: "K5 in action at the Kari Motor Speedway"
        },

        {
            url: "/images/slider/team.jpg",
            urlWebp: "/images/slider/team.webp",
            title: "The enthusiastic team behind the success of K5"
        },

    ]

    return (
        <div  className={'custom-carousel'}>
            <ImageSlider slides={slides}/>
        </div>
    )
}
export default CustomCarousel
