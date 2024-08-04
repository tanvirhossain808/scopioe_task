import FeaturedTherapist from "../components/Home/FeaturedTherapist/FeaturedTherapist";
import Search from "../components/Search/Search";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    return (
        <>
            <div className="max-w-[1130px] mx-auto">

                <div className="px-4 py-6 mt-[30px] bg-color-white lg:p-[30px] w-full mx-auto flex flex-col lg:flex-row items-center lg:justify-between rounded-[10px]">
                    <div className="">
                        <h1 className="text-[18px] text-[#152A16] font-medium leading-[30px] lg:text-[20px]">
                            I&apos;m Looking for Massage Therapist Near...
                        </h1>
                        <p className="max-w-[310px] lg:max-w-[490px] tracking-[.15px] text-[14px] text-[#2E3439] mt-4 lg:mt-5">
                            In using this site, I agree to be bound by the <span className="text-dark-sky font-medium">
                                <a href="/" className="underline">Terms of Service</a>
                            </span> and  <span className="text-dark-sky font-medium">
                                <a href="/" className="underline">
                                    Privacy Policy
                                </a>
                            </span>
                        </p>
                        <div className="hidden lg:block">
                            <Search />
                        </div>
                    </div>
                    <div className="relative max-w-[398px] mt-14">
                        <img src="/assets/images/massage/massage.png" alt="massage picture" width={276} height={172} className="w-full h-auto max-w-[276px] relative z-20 mx-auto" />
                        <img src="/assets/images/phone/massage/massage-bg.svg" alt="massage bg" width={398} height={172} className="absolute inset-0 z-10" />
                    </div>
                    <div className="lg:hidden">
                        <Search />
                    </div>
                </div>
                <FeaturedTherapist />
            </div>
        </>
    );
};

export default Home;