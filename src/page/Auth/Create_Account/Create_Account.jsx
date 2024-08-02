import { useState } from "react";
import Logo from "../../../components/Logo/Logo";
import AuthForms from "../../../components/Logo/AuthForms/AuthForms";

const Create_Account = () => {
    const [canShowFrom, setCanShowFrom] = useState(false)
    return (
        <div className="w-full h-screen bg-auth-phone-background bg-cover bg-center overflow-y-hidden relative">
            <div className="max-w-[380px] mx-auto mt-[64px]">
                <Logo />
                {!canShowFrom && <>
                    <h2 className="mt-8 text-[#1A2531] text-[28px] font-semibold text-center">Sign In To Your Account</h2>
                    <p className="mt-3 text-[#D1D1D1] text-[15px]">Welcome Back! By click the sign up button, you&apos;re agree to
                        Zenitood Terms and Service and acknowledge the
                        <span className="text-[#4285F3]">
                            {" "}
                            <a href="#" className="underline">Privacy and Policy</a>
                        </span>
                    </p>
                </>
                }
                <div className={`max-w-[341px] rounded-[10px] text-[#fff] px-[35px] py-[30px] mx-auto ${!canShowFrom ? "bg-[#1F2833] opacity-[0.7] mt-20" : "mt-6"}`}>
                    <h4 className={`text-center leading-[35px] max-w-[full] ${!canShowFrom ? "text-[22px] font-semibold" : "text-[18px] leading-[24px] font-medium"}`}>
                        <span className={`${canShowFrom ? "text-[#fff]" : "text-[#156BCA] cursor-pointer"}`} onClick={() => setCanShowFrom(true)}>
                            Create Account <br />
                        </span>
                        Fill in Your Information
                    </h4>
                </div>
            </div>
            {canShowFrom && <AuthForms />}
        </div >
    );
};
export default Create_Account;