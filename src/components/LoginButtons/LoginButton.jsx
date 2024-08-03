const LoginButton = () => {
    return (
        <div className="px-4">
            <div className="flex justify-center lg:justify-between gap-10 items-center mt-10">
                <button className="bg-google-gradient shadow-google-shadow w-[146px] h-[45px] flex items-center justify-center gap-2 rounded-[10px]">
                    <img src="/assets/images/logo/google.svg" width={22} height={22} alt="Google logo" />
                    <span className="text-[#152A16] text-base">Google</span>
                </button>
                <button className="bg-fb-gradient rounded-[10px] shadow-google-shadow w-[146px] gap-2 h-[45px] flex items-center justify-center">
                    <img src="/assets/images/logo/Facebook.svg" width={22} height={22} alt="Google logo" />
                    <span className="text-[#fff] text-base">Facebook</span>
                </button>
            </div>
            <div className="flex gap-2 items-center justify-center mt-6 mb-[50px]">
                <hr className="bg-[#E7E7E7] min-w-[122px] w-full" />
                <p className="text-[#5C635A] text-[12px] min-w-[136px]">Or Continue with Email</p>
                <hr className="bg-[#E7E7E7] min-w-[122px] w-full" />
            </div>
        </div>
    );
};

export default LoginButton;