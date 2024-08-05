import { useEffect, useState } from "react";
import Logout from "../Logout/Logout";
import UserProfile from "./UserProfile/UserProfile";
import Nav from "../Nav/Nav";

const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
        // currentWidth()
        if (windowWidth > 1024) setShowNav(false)
        return window.removeEventListener("resize", () => { })
    }, [windowWidth])
    console.log(windowWidth);
    return (
        <>
            <div className="bg-color-primary h-[60px] lg:h-[88px] sticky top-0 z-50">
                <div className=" bg-color-white px-[30px] h-full flex justify-between items-center">
                    <div>
                        <img src="/assets/images/logo/LOGO (1).png" alt="logo" width={88} height={36} className="lg:hidden" />
                        <div className="hidden lg:block">
                            <UserProfile />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 lg:gap-5">
                        <img src="/assets/images/logo/Notification (1).svg" className="cursor-pointer hover:scale-110" width={24} height={24} alt="notification logo" />
                        <div className="lg:hidden" onClick={() => setShowNav(true)}>
                            <img src="/assets/images/logo/Menu_Alt_01.svg" className="cursor-pointer hover:scale-110" width={24} height={24} alt="menu" />
                        </div>
                        <div className="hidden lg:block w-[1px] bg-[#E7E7E7] h-10"></div>
                        <Logout />
                    </div>
                </div>
            </div>
            {
                showNav && <div className="absolute inset-0 bg-[#1F2A37A6] z-[100]" onClick={() => setShowNav(false)}></div>
            }
            <div className={`fixed z-[200] w-[268px] top-0 right-[-300px] transition-all duration-1000 ${showNav && "right-[0]"} bg-[#FFFFFF]`}>
                <div className="h-[302px] bg-dark-sky w-full mb-[18px]">
                    <UserProfile userProfileHeight={74} userProfileWidth={74} />
                </div>
                <div className="pr-[16px]">
                    <Nav />
                </div>
            </div>
        </>
    );
};

export default Header;