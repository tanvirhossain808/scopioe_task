/* eslint-disable react/prop-types */

const Testimonial = ({ img }) => {
    return (
        <div className=" mx-auto w-full  border-[1px] border-[#E7E7E7] justify-center rounded-lg p-[10px] flex items-center justify-betwee gap-4">
            <div>
                <img src={img} width={130} height={140} alt="Featured Testimonial" className="max-w-full" />
            </div>
            <div className="max-w-[235px] lg:max-w-[317px]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.9962 1.16663C9.71609 1.16663 11.9584 3.3354 11.9584 6.01865C11.9584 7.37078 11.4666 8.62608 10.6572 9.69005C9.76432 10.8637 8.66378 11.8862 7.425 12.6889C7.14149 12.8744 6.88561 12.8884 6.57445 12.6889C5.32862 11.8862 4.22807 10.8637 3.34281 9.69005C2.53284 8.62608 2.04169 7.37078 2.04169 6.01865C2.04169 3.3354 4.28395 1.16663 6.9962 1.16663ZM6.9962 4.53644C6.09682 4.53644 5.36332 5.27784 5.36332 6.16973C5.36332 7.06862 6.09682 7.7756 6.9962 7.7756C7.89616 7.7756 8.63672 7.06862 8.63672 6.16973C8.63672 5.27784 7.89616 4.53644 6.9962 4.53644Z" fill="#5C635A" />
                        </svg>
                        <p className="text-[#5C635A] text-xs leading-normal tracking-[.24px]">
                            123 Elm Street, New York
                        </p>
                    </div>
                    <h4 className="text-[#232F3C] tracking-[.28px] font-medium text-[14px]">
                        Healing Bodywork <span className="text-dark-sky font-semibold">by Cort</span>
                    </h4>
                    <p className="text-[12px] text-[#5C635A] leading-[18px] tracking-[.24px] lg:w-[317px]">
                        Cort&apos;s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of... <span className="font-medium text-dark-sky">Read More</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;