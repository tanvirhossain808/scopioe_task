/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderData from "../../../data/sliderData";
import SliderContent from "../Slider/SliderContent";

const CustomArrow = ({ className, onClick, side }) => (
    <div
        className={`${className} absolute top-1/2 transform -translate-y-1/2 text-white bg-red-700 rounded-full p-2 hover:bg-gray-900 cursor-pointer`}
        style={{
            [side]: '-70px', // Position the arrow on the left or right
            zIndex: 2,
        }}
        onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#D4E9FF" />
            <path d={side === 'left' ? "M22 26L16 20L22 14" : "M18 26L24 20L18 14"} stroke="#152A16" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

const FeaturedTherapist = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        // centerMode: true,
        // centerPadding: '10%',
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <CustomArrow side="right" />,
        prevArrow: <CustomArrow side="left" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: true,
                    centerPadding: '10%',
                    centerMode: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // centerPadding: '24%',
                    // centerMode: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '25%',
                    // centerMode: true,

                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 ">
            <h2 className="mt-8 text-dark-black text-[18px] font-medium leading-[30px]">Featured Therapist</h2>
            <div className="bg-white py-6">
                <div className="slider-container relative lg:px-[100px]">
                    <Slider {...settings}>
                        {sliderData.map((slider) => (
                            <SliderContent key={slider.id} {...slider} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTherapist;
