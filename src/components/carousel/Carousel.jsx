import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Tab from "../tab/Tab"

const Carousel = ({ items, className }) => {
    return (
        <Swiper
            className={className}
            breakpoints={{
                0: {
                    width: 640,
                    slidesPerView: 2,
                },
                768: {
                    width: 768,
                    slidesPerView: 4,
                },
            }}
        >
            {items &&
                items.map((item) => (
                    <SwiperSlide>
                        <Tab>{item}</Tab>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default Carousel
