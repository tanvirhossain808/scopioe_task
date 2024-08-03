import { useState } from "react";
import Logo from "../../../components/Logo/Logo";
import AuthForms from "../../../components/Logo/AuthForms/AuthForms";
import AuthMessage from "../../../components/AuthMessage/AuthMessage";

const Create_Account = () => {
    const [canShowFrom, setCanShowFrom] = useState(false)
    return (
        <>
            <div className="md:flex items-center justify-center gap-[120px] h-screen md:p-[20px]">
                <div className="w-full h-screen bg-auth-phone-background bg-cover bg-center pt-[1px] relative md:bg-none md:max-w-[430px] md:max-h-[802px]">
                    <div className="max-w-[380px] md:max-w-full mx-auto md:mx-0 mt-[55px] container">
                        <Logo />
                        {!canShowFrom && <>
                            <h2 className="mt-8 text-[#1A2531] text-[28px] font-semibold text-center md:text-start">Sign In To Your Account</h2>
                            <p className="mt-3 text-[#D1D1D1] md:w-[430px] text-[15px] md:text-[#5C635A]">Welcome Back! By click the sign up button, you&apos;re agree to
                                Zenitood Terms and Service and acknowledge the
                                <span className="text-[#4285F3]">
                                    {" "}
                                    <a href="#" className="underline">Privacy and Policy</a>
                                </span>
                            </p>
                        </>
                        }
                        <div className="md:hidden">
                            <AuthMessage canShowFrom={canShowFrom} setCanShowFrom={setCanShowFrom} auth={"Sign Up"} />
                        </div>
                    </div>
                    {canShowFrom && <AuthForms />}
                    <div className="hidden md:block">
                        <AuthForms />
                    </div>
                </div >
                <div className="hidden  relative h-full md:flex items-center overflow-hidden">
                    <img src="/assets/images/big-screen/auth/auth.png" width={648} height={802} className="min-w-[638] max-h-[802px] block h-full object-cover" />
                    <AuthMessage canShowFrom={canShowFrom} setCanShowFrom={setCanShowFrom} auth={"Sign Up"} />
                </div>
            </div>
        </>
    );
};
export default Create_Account;



