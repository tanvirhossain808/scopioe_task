import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderData from "../../../data/sliderData";
import SliderContent from "../Slider/SliderContent";

const FeaturedTherapist = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1, // Show only one slide at a time
        centerMode: true,
        centerPadding: '25%', // Adjust to show half of the images on the sides
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerPadding: '25%'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '25%'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '23%'
                }
            }
        ]
    };

    return (
        <div className="">
            <h2 className="mt-8 text-dark-black text-[18px] font-medium leading-[30px]">Featured Therapist</h2>
            <div className="bg-white py-6">
                <div className="slider-container overflow-hidden">
                    <Slider {...settings}>
                        {
                            sliderData.map((slider) => <SliderContent key={slider.id} {...slider} />)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTherapist;