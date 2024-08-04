/* eslint-disable react/prop-types */
// import Slider from "react-slick";
import Testimonial from "../Testimonial/Testimonial";
import img1 from "/assets/images/FeaturedTestimonial/people2.png"
import img2 from "/public/assets/images/FeaturedTestimonial/people1.png"

const FeaturedTestimonial = () => {
    /*     const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }; */
    return (
        <div className="">
            <h4 className="mt-7 pl-4 lg:pl-0 text-black font-medium leading-[30px] text-[18px]">Featured Testimonial</h4>
            < div className="py-[]  bg-white rounded-[10px]">
                <div className="mt-7 pt-6 px-4 lg:px-10 flex flex-col gap-4 lg:gap-[20px] pb-[50px] md:justify-center">
                    {/*        <Slider {...settings}>
                        <div>
                            <Testimonial img={img1} />
                            <Testimonial img={img2} />
                        </div>
                        <div>
                            <Testimonial img={img1} />
                            <Testimonial img={img2} />
                        </div>
                        <div>
                            <Testimonial img={img1} />
                            <Testimonial img={img2} />
                        </div>

                    </Slider> */}
                    <Testimonial img={img1} />
                    <Testimonial img={img2} />
                </div>
                <div className="py-6 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="9" viewBox="0 0 51 9" fill="none">
                        <circle cx="4.5" cy="4.5" r="4.5" fill="#156BCA" />
                        <circle cx="25.5" cy="4.5" r="4.5" fill="#3B4633" fillOpacity="0.45" />
                        <circle cx="46.5" cy="4.5" r="4.5" fill="#3B4633" fillOpacity="0.45" />
                    </svg>
                </div>
            </ div>
        </div>
    );
};

export default FeaturedTestimonial;  