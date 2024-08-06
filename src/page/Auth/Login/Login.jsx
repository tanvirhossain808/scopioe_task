import AuthMessage from "../../../components/AuthMessage/AuthMessage";
import AuthForms from "../../../components/Logo/AuthForms/AuthForms";
import Logo from "../../../components/Logo/Logo";


const Login = () => {

    return (
        <>
            {/* <button onClick={signInWithFacebook}>k</button> */}
            <div className="flex lg:items-center justify-center h-screen lg:h-auto gap-[120px] w-full lg:px-5">
                <div className="w-full lg:max-w-[435px] bg-auth-phone-background bg-cover bg-center pt-[1px] lg:bg-none relative">
                    <div className="mt-[59px]">
                        <Logo />
                    </div>
                    <div className="min-w-[380px] lg:min-w-[428px] mx-auto lg:mx-0 mt-[24px] text-center h-full">
                        <h4 className="text-[18px] text-light-white lg:hidden">
                            <span className="text-[#fff]">Sign In</span> to view all the
                            <br />
                            massage therapists
                        </h4>
                        <AuthForms auth="Sign in" />
                    </div>
                </div>
                <div className="hidden relative h-screen lg:flex items-center overflow-hidden">
                    <img
                        src="/assets/images/big-screen/auth/auth.png"
                        width={648}
                        height={802}
                        className="min-w-[638] rounded-2xl max-h-[802px] block h-full object-cover"
                    />
                    <AuthMessage auth={"Log In"} />
                    <div className="absolute flex items-center justify-center gap-2 z-10 top-[85%] mb-20px right-0 w-full">
                        <span className="w-3 h-3 rounded-full bg-light-gray"></span>
                        <span className="bg-dark-sky w-3 h-3 rounded-full"></span>
                        <span className="w-3 h-3 rounded-full bg-light-gray"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
