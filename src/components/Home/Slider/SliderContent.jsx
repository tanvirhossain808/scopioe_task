/* eslint-disable react/prop-types */


const SliderContent = ({ name, lived, contact, img }) => {
    return (
        // <div className="overflow-visible h-[800px]">
        <div className="group border-[#E7E7E7] border-[0.835px] max-h-[440px] rounded-lg max-w-[160px] transition-transform transform lg:hover:scale-100 lg:max-h-[305] lg:max-w-[215px] max-hei">
            <div className="w-full px-2 min-h-[] pt-2 ">
                <div>
                    <img src={img} alt="slider img" width={160} height={121} className="w-full h-auto" />
                </div>
                <div className="mt-4 px-1">
                    <h3 className="text-dark-black text-xs font-medium tracking-[.234px] text-start">
                        {name}
                    </h3>
                </div>
                <div className="mt-[14px] text-[10px]">
                    <p className="flex items-center gap-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="none">
                                <path d="M6.20145 1.80579C8.47251 1.80579 10.3448 3.61667 10.3448 5.85715C10.3448 6.98615 9.93417 8.0343 9.25835 8.9227C8.51279 9.90266 7.59385 10.7565 6.55949 11.4267C6.32276 11.5816 6.10911 11.5932 5.8493 11.4267C4.80905 10.7565 3.89011 9.90266 3.15093 8.9227C2.47462 8.0343 2.06451 6.98615 2.06451 5.85715C2.06451 3.61667 3.93677 1.80579 6.20145 1.80579ZM6.20145 4.61953C5.45048 4.61953 4.83802 5.23858 4.83802 5.9833C4.83802 6.73385 5.45048 7.32417 6.20145 7.32417C6.9529 7.32417 7.57126 6.73385 7.57126 5.9833C7.57126 5.23858 6.9529 4.61953 6.20145 4.61953Z" fill="#5C635A" />
                            </svg>
                        </span>
                        <span className="text-[#5C635A]">
                            {lived}
                        </span>
                    </p>
                    <p className="mt-[10px] flex items-center gap-[6px]">
                        <span>
                            <img src="/assets/images/logo/car.png" height={8} width={8} />
                        </span>
                        <span className="text-[#5C635A]">
                            {contact}
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <button className="underline block mt-4 max-h-10 left-0 h-10 bg-very-light-sky w-full rounded-b-lg text-xs text-dark-black font-medium group-hover:bg-dark-sky group-hover:text-white">
                    See Details
                </button>
            </div>
            {/* </div> */}
        </div>
    );
};

export default SliderContent;