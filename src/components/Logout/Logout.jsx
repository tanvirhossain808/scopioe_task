
const Logout = () => {
    return (
        <div className="hidden lg:flex cursor-pointer gap-[10px] hover:scale-105 transition-all duration-500">
            <button className="border-none outline-none text-[15px] font-medium tracking-[.3px] text-[#F15E4A]">
                Log Out
            </button>
            <div className="w-10 h-10 bg-[#FFECEA] rounded-full flex items-center justify-center ">
                <img src="/assets/images/logo/logout.svg" alt="logout button" width={22} height={22} />
            </div>
        </div>
    );
};

export default Logout;