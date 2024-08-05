/* eslint-disable react/prop-types */

const UserProfile = ({ userProfileWidth = 40, userProfileHeight = 40 }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center h-full justify-center lg:justify-normal gap-3">
            <img src="/assets/images/dummy-profile.png" alt="profile picture" width={userProfileWidth} height={userProfileHeight} />
            <div className="flex flex-col items-center gap-1">
                <p className="text-white leading-[24px] capitalize font-semibold lg:flex items-center gap-[45px] lg:text-[15px] lg:text-dark-black lg:font-medium">
                    Sagor Sani
                    <span className="hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                            <path d="M12 0.841064L6.5 6.15883L1 0.841064" stroke="#152A16" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </p>
                <p className="text-[#1A2634] text-xs leading-normal tracking-[.24px] lg:text-[14px] lg:tracking-[.28] lg:text-[#5C635A]">
                    sagar@gmail.com
                </p>
            </div>
        </div>
    );
};

export default UserProfile;