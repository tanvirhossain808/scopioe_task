import { useState } from "react";
import Logo from "../../../components/Logo/Logo";
import AuthForms from "../../../components/Logo/AuthForms/AuthForms";
import AuthMessage from "../../../components/AuthMessage/AuthMessage";

const Create_Account = () => {
    const [canShowFrom, setCanShowFrom] = useState(false)
    return (
        <>
            <div className="lg:flex items-center justify-center gap-[120px] lg:px-[20px]">
                <div className="w-full h-screen bg-auth-phone-background bg-cover bg-center pt-[1px] relative lg:bg-none lg:max-w-[430px] lg:max-h-[802px]">
                    <div className="min-w-[380px] w-full lg:max-w-full mx-auto lg:mx-0 mt-[55px] container mb-[35px]">
                        <Logo />
                        {!canShowFrom && <>
                            <h2 className="mt-8 text-[#1A2531] text-[28px] font-semibold text-center lg:text-start">Sign In To Your Account</h2>
                            <p className="mt-3 text-[#D1D1D1] lg:w-[430px] text-[15px] lg:text-[#5C635A] mx-[30px] lg:mx-0">Welcome Back! By click the sign up button, you&apos;re agree to
                                Zenitood Terms and Service and acknowledge the
                                <span className="text-[#4285F3]">
                                    {" "}
                                    <a href="#" className="underline">Privacy and Policy</a>
                                </span>
                            </p>
                        </>
                        }
                        <div className="lg:hidden">
                            <AuthMessage canShowFrom={canShowFrom} setCanShowFrom={setCanShowFrom} auth={"Sign Up"} />
                        </div>
                    </div>
                    {canShowFrom && <AuthForms />}
                    <div className="hidden lg:block">
                        <AuthForms />
                    </div>
                </div >
                <div className="hidden relative h-screen lg:flex items-center overflow-hidden lg:mt-[105px]">
                    <img src="/assets/images/big-screen/auth/auth.png" width={648} height={802} className="min-w-[638] max-h-[802px] block h-full object-cover rounded-2xl" />
                    <AuthMessage canShowFrom={canShowFrom} setCanShowFrom={setCanShowFrom} auth={"Sign Up"} />
                    <div className="absolute flex items-center justify-center gap-2 z-10 top-[85%] mb-20px right-0  w-full">
                        <span className="bg-dark-sky w-3 h-3 rounded-full"></span>
                        <span className="w-3 h-3 rounded-full bg-light-gray"></span>
                        <span className="w-3 h-3 rounded-full bg-light-gray"></span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Create_Account;



