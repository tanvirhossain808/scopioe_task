import AuthForms from "../../../components/Logo/AuthForms/AuthForms";
import Logo from "../../../components/Logo/Logo"

const Login = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen gap-[120px] w-full md:px-[122px]">
                <div className="w-full md:max-w-[435px] bg-auth-phone-background bg-cover bg-center pt-[1px] md:bg-none relative">
                    <div className="mt-[59px]">
                        <Logo />
                    </div>
                    <div className="max-w-[380px] md:min-w-[428px] mx-auto md:mx-0 mt-[24px] text-center">
                        <h4 className="text-[18px] text-light-white md:hidden">
                            <span className="text-[#fff] ">Sign In</span> to view all the <br /> massage therapists
                        </h4>
                        <AuthForms auth="Sign in" />
                    </div>
                </div >
                    <div className="hidden  relative h-full md:flex items-center overflow-hidden">
                        <img src="/assets/images/big-screen/auth/auth.png" width={648} height={802} className="min-w-[638] max-h-[802px] block h-full object-cover" />
                        {/* <AuthMessage canShowFrom={canShowFrom} setCanShowFrom={setCanShowFrom} auth={"Sign Up"} /> */}
                </div>
            </div>
        </>

    )
};

export default Login;