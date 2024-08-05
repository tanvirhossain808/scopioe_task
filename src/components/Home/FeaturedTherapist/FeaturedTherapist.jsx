/* eslint-disable react/prop-types */

import 'swiper/css';
import 'swiper/css/pagination';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderData from "../../../data/sliderData";
import SliderContent from "../Slider/SliderContent";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./FeaturedTherapist.css"

const CustomArrow = ({ onClick, side }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <svg
            className="absolute top-1/2 transform -translate-y-1/2 text-white rounded-full lg:block hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            style={{
                [side]: '-70px',
                zIndex: 2,
                cursor: 'pointer',
                width: 40,
                height: 40,
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <circle cx="20" cy="20" r="20" fill={isHovered ? "#156BCA" : "#D4E9FF"} />
            <path
                d={side === 'left' ? "M22 26L16 20L22 14" : "M18 26L24 20L18 14"}
                stroke={isHovered ? "white" : "#152A16"}
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedTherapist = () => {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="mx-auto">
            <h2 className="mt-8 text-dark-black text-[18px] font-medium leading-[30px] ml-4 lg:ml-0">Featured Therapist</h2>
            <div className="bg-white px-[50px] mt-6 py-6 rounded-[10px]">
                <div className="slider-container relative overflow-visible">
                    <Swiper
                        slidesPerView={2}
                        slidesPerGroup={2}
                        spaceBetween={10}
                        // pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                slidesPerGroup: 2
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                                slidesPerGroup: 3
                            },
                            1024: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 5,
                            },
                        }}
                        navigation={false}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                        ref={swiperRef}
                    >
                        {sliderData.map((slider) => (
                            <SwiperSlide key={slider.id}>
                                <SliderContent {...slider} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <CustomArrow side="left" onClick={handlePrev} />
                    <CustomArrow side="right" onClick={handleNext} />
                </div>
            </div>
        </div>
    );
};

export default FeaturedTherapist;

