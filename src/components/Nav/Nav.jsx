import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx"

const Nav = () => {
    const navBtns = [
        {
            "name": "Home",
            "icon": "/assets/images/nav/home.png"
        },
        {
            "name": "New Listing",
            "icon": "/assets/images/nav/listing.png"
        },
        {
            "name": "Search",
            "icon": "/assets/images/nav/Search.png"
        },
        {
            "name": "About",
            "icon": "/assets/images/nav/about.png"
        },
        {
            "name": "Favorite",
            "icon": "/assets/images/nav/love.png"
        }
    ]
    const extraNavBtns = [
        {
            "name": "Help Center",
            "icon": "/assets/images/nav/help.png"
        },
        {
            "name": "Setting",
            "icon": "/assets/images/nav/Setting.png"
        }
    ]
    return (
        <>
            <div className="">
                <div className="pt-[55px] w-full hidden lg:flex justify-center">
                    <Logo />
                </div>
                <div className="flex flex-col gap-4 lg:mt-10">
                    {
                        navBtns.map((nav, index) => <Link key={index} to="/">
                            <div className="flex transition duration-400 
                        items-center gap-[14px] pl-[25px] text-[15px]
                         tracking-[.3px] text-[#5C635A] hover:text-dark-black hover:font-medium py-[14px]
                          hover:bg-[#D4E9FF] border-l-[3px] hover:border-[#102C4A]">
                                <img src={nav.icon} alt={nav.name} width={18} height={18} />
                                <p>{nav.name}</p>
                            </div>
                        </Link>)
                    }
                </div>
                <hr className="bg-[#E7E7E7] h-[1px] my-[25px] mx-[20px]" />
                <div className="flex flex-col gap-[34px]">
                    {
                        extraNavBtns.map((nav, index) =>
                            <div key={index} className="flex transition duration-400 
                        items-center gap-[14px] pl-[25px] text-[15px]
                         tracking-[.3px] text-[#5C635A] hover:text-dark-black hover:font-medium py-[14px]
                          hover:bg-[#D4E9FF] border-l-[3px] hover:border-[#102C4A]">
                                <img src={nav.icon} alt={nav.name} />
                                <p>
                                    {
                                        nav.name
                                    }
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Nav;