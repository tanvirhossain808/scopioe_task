// import { useSignInWithGoogle } from "react-firebase-hooks/auth";

// import useSignInWithPopup
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import firebaseAuth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
const LoginButton = () => {
    const [signInWithGoogle, , , error] = useSignInWithGoogle(firebaseAuth);

    const navigate = useNavigate()
    const handleSocialLogin = async (btn = "fb") => {
        if (btn === "fb") {
            console.log("fb")
        }
        else {
            try {

                const user = await signInWithGoogle()
                if (error) {
                    console.log(error)
                    return
                }
                if (user) navigate("/")
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className="px-4">
            <div className="flex justify-center lg:justify-between gap-10 items-center mt-10">
                <button className="bg-google-gradient shadow-google-shadow w-[146px] h-[45px] flex items-center justify-center gap-2 rounded-[10px]" onClick={() => handleSocialLogin("google")}>
                    <img src="/assets/images/logo/google.svg" width={22} height={22} alt="Google logo" />
                    <span className="text-[#152A16] text-base">Google</span>
                </button>
                <button className="bg-fb-gradient rounded-[10px] shadow-google-shadow w-[146px] gap-2 h-[45px] flex items-center justify-center" onClick={() => handleSocialLogin()}>
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