/* eslint-disable react/prop-types */
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import LoginButton from "../../LoginButtons/LoginButton";
import firebaseAuth from '../../../firebase/firebase.config';

const AuthForms = ({ auth = "Sign Up" }) => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(firebaseAuth);
    const [
        signInWithEmailAndPassword,
        loginuser,
        loginLoadinloading,
        logingError,
    ] = useSignInWithEmailAndPassword(firebaseAuth);
    const [showPassword, setShowPassword] = useState(false)
    const [showReTypePassword, setShowRetypePassword] = useState(false)
    const [errors, setErrors] = useState({ passwordError: "", formError: "" })
    const initialFormData = auth === "Sign Up"
        ? { userName: "", email: "", password: "", "re-type-password": "", checked: false }
        : { email: "", password: "", checked: false };

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.trim()
        }));
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { passwordError: "", formError: "" };

        for (const [key, value] of Object.entries(formData)) {
            if (key !== "checked" && (value === "" || /^\s+$/.test(value))) {
                newErrors.formError = "Please fill out all fields properly.";
                valid = false;
                break;
            }
        }

        if (formData.password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            newErrors.passwordError = "Password must be at least 8 characters long and contain a special character.";
            valid = false;
        }

        if (formData.password !== formData["re-type-password"] && auth === "Sign Up") {
            newErrors.passwordError = "Passwords do not match.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm() && auth === "Sign Up") {
            try {
                const user = await createUserWithEmailAndPassword(formData.email, formData.password)
                // if (user) console.log(user);
                if (error) {
                    console.log(error)
                }
                if (user) navigate("/")
            } catch (err) {
                console.log(error);
            }
        }

        else if (validateForm()) {
            try {
                const user = await signInWithEmailAndPassword(formData.email, formData.password)
                // if (user) console.log(user);
                if (logingError) {
                    console.log(logingError)
                    return
                }
                if (user) navigate("/")
            } catch (err) {
                console.log(logingError);
            }
        }
        else {
            console.log("Form validation failed");
        }
    };
    if (error) {
        console.log(error)
    }
    return (
        <div className="bg-[#fff] absolue lg:b w-full lg:static bottom-0 right-0 left-0 rounded-t-[40px] mt-10 lg:mt-0 pt-[1px]">
            {
                auth === "Sign Up" ? <h2 className="text-[#1A2531] mt-8 text-[28px] font-semibold text-center lg:hidden">Sing Up</h2> : <>
                    <h2 className="text-[#152A16] mt-8 text-[28px] font-semibold leading-[24px] text-center lg:text-left">Log In To Your Account</h2>
                    <p className="text-[#5C635A] text-[14px] leading-[50px] mt-[18px] text-center lg:text-left">
                        Welcome Back! Select a method to log in:
                    </p>
                    <LoginButton />
                </>

            }
            <form className="px-4" onSubmit={handleSubmit}>
                {

                    auth === "Sign Up" && <div className="flex flex-col gap-3 mt-6">
                        <label htmlFor="name" className="text-[#152A16] font-medium leading-[14px]">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className="p-5 h-[54px] outline-none  placeholder:text-[#5C635A] border-1 rounded-[10px] border-[#E7E7E7]"
                            required
                            placeholder="@username"
                        />
                    </div>}

                <div className="flex flex-col gap-3 mt-6">
                    <label htmlFor="email" className="text-[#152A16] font-medium leading-[14px]">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-5 h-[54px] outline-none border-1  placeholder:text-[#5C635A] rounded-[10px] border-[#E7E7E7]"
                        required
                        placeholder="Type your email"
                    />
                </div>

                <div className="flex flex-col gap-3 mt-6">
                    <label htmlFor="password" className="text-[#152A16] font-medium leading-[14px]">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="p-5 h-[54px] outline-none  placeholder:text-[#5C635A] w-full border-1 rounded-[10px] border-[#E7E7E7]"
                            required
                            placeholder="Enter your password"
                        />
                        {showPassword ? <BiShowAlt className="w-6 h-6 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => setShowPassword(!showPassword)}>
                                <path d="M16.8988 17.0407C17.2282 16.7896 17.2917 16.319 17.0406 15.9895C16.7895 15.6601 16.3189 15.5966 15.9895 15.8477L16.8988 17.0407ZM12.0001 17.9854V18.7355L12.0124 18.7353L12.0001 17.9854ZM8.01122 8.15218C8.34043 7.9008 8.40351 7.43013 8.15212 7.10093C7.90074 6.77172 7.43007 6.70863 7.10087 6.96002L8.01122 8.15218ZM4.29236 12.8927L4.9238 12.488L4.29236 12.8927ZM4.29418 11.1062L4.92658 11.5094L4.29418 11.1062ZM10.258 5.46409C9.85473 5.55849 9.60431 5.96197 9.69871 6.36528C9.79312 6.76859 10.1966 7.01901 10.5999 6.92461L10.258 5.46409ZM12.0001 6.01479L11.9983 6.76479H12.0001V6.01479ZM18.0399 13.9038C17.7733 14.2207 17.814 14.6938 18.1309 14.9605C18.4479 15.2272 18.921 15.1865 19.1877 14.8696L18.0399 13.9038ZM19.709 11.1093L19.0775 11.5139L19.709 11.1093ZM19.7086 12.8931L20.3418 13.2951L19.7086 12.8931ZM14.1349 14.0974C14.4173 13.7943 14.4005 13.3198 14.0975 13.0374C13.7944 12.755 13.3198 12.7718 13.0375 13.0748L14.1349 14.0974ZM10.9253 10.9626C11.2283 10.6802 11.2451 10.2057 10.9627 9.90262C10.6803 9.59958 10.2057 9.58282 9.90269 9.8652L10.9253 10.9626ZM15.9895 15.8477C14.8379 16.7255 13.4356 17.2118 11.9878 17.2355L12.0124 18.7353C13.7803 18.7064 15.4926 18.1126 16.8988 17.0407L15.9895 15.8477ZM12.0001 17.2354C10.2467 17.2354 8.74988 16.4792 7.53734 15.4848C6.32253 14.4885 5.43524 13.286 4.9238 12.488L3.66092 13.2974C4.21878 14.1678 5.20471 15.5117 6.58613 16.6446C7.96982 17.7794 9.79222 18.7354 12.0001 18.7354V17.2354ZM4.92658 11.5094C5.74852 10.2202 6.79202 9.08318 8.01122 8.15218L7.10087 6.96002C5.74156 7.998 4.57816 9.26567 3.66177 10.703L4.92658 11.5094ZM4.9238 12.488C4.73291 12.1902 4.73233 11.8141 4.92658 11.5094L3.66177 10.703C3.15732 11.4943 3.1505 12.501 3.66092 13.2974L4.9238 12.488ZM10.5999 6.92461C11.0583 6.81731 11.5276 6.76368 11.9983 6.76479L12.0019 5.26479C11.4148 5.26341 10.8296 5.33029 10.258 5.46409L10.5999 6.92461ZM12.0001 6.76479C13.7541 6.76479 15.2514 7.5215 16.4641 8.51645C17.6792 9.51326 18.5664 10.7162 19.0775 11.5139L20.3405 10.7046C19.783 9.83456 18.7971 8.49026 17.4155 7.35678C16.0317 6.22144 14.2088 5.26479 12.0001 5.26479V6.76479ZM19.0755 12.4912C18.7624 12.9843 18.4165 13.4563 18.0399 13.9038L19.1877 14.8696C19.6074 14.3708 19.9929 13.8448 20.3418 13.2951L19.0755 12.4912ZM19.0775 11.5139C19.268 11.8112 19.2689 12.1865 19.0755 12.4912L20.3418 13.2951C20.8438 12.5044 20.8499 11.4998 20.3405 10.7046L19.0775 11.5139ZM13.0375 13.0748C12.6649 13.4746 12.1038 13.6392 11.5743 13.504L11.2031 14.9573C12.2641 15.2283 13.3884 14.8985 14.1349 14.0974L13.0375 13.0748ZM11.5743 13.504C11.0448 13.3688 10.6313 12.9553 10.4961 12.4258L9.04274 12.7969C9.31369 13.8579 10.1422 14.6864 11.2031 14.9573L11.5743 13.504ZM10.4961 12.4258C10.3609 11.8963 10.5255 11.3352 10.9253 10.9626L9.90269 9.8652C9.10156 10.6117 8.77179 11.736 9.04274 12.7969L10.4961 12.4258Z" fill="#5C635A" />
                                <path d="M5 5L19 19" stroke="#5C635A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                    </div>
                </div>

                {auth === "Sign Up" && <div className="flex flex-col gap-3 mt-6 relative">
                    <label htmlFor="password" className="text-[#152A16] font-medium leading-[14px]">Re-enter Password</label>
                    <div className="relative">
                        <input
                            type={showReTypePassword ? "text" : "password"}
                            id="re-type-password"
                            name="re-type-password"
                            value={formData["re-type-password"]}
                            onChange={handleChange}
                            className="p-5 h-[54px] outline-none  placeholder:text-[#5C635A] w-full border-1 rounded-[10px] border-[#E7E7E7]"
                            required
                            placeholder="Re-type password"
                        />
                        {
                            showReTypePassword ? <BiShowAlt className="w-6 h-6 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" onClick={() => setShowRetypePassword(!showReTypePassword)} /> : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => setShowRetypePassword(!showReTypePassword)}>
                                <path d="M16.8988 17.0407C17.2282 16.7896 17.2917 16.319 17.0406 15.9895C16.7895 15.6601 16.3189 15.5966 15.9895 15.8477L16.8988 17.0407ZM12.0001 17.9854V18.7355L12.0124 18.7353L12.0001 17.9854ZM8.01122 8.15218C8.34043 7.9008 8.40351 7.43013 8.15212 7.10093C7.90074 6.77172 7.43007 6.70863 7.10087 6.96002L8.01122 8.15218ZM4.29236 12.8927L4.9238 12.488L4.29236 12.8927ZM4.29418 11.1062L4.92658 11.5094L4.29418 11.1062ZM10.258 5.46409C9.85473 5.55849 9.60431 5.96197 9.69871 6.36528C9.79312 6.76859 10.1966 7.01901 10.5999 6.92461L10.258 5.46409ZM12.0001 6.01479L11.9983 6.76479H12.0001V6.01479ZM18.0399 13.9038C17.7733 14.2207 17.814 14.6938 18.1309 14.9605C18.4479 15.2272 18.921 15.1865 19.1877 14.8696L18.0399 13.9038ZM19.709 11.1093L19.0775 11.5139L19.709 11.1093ZM19.7086 12.8931L20.3418 13.2951L19.7086 12.8931ZM14.1349 14.0974C14.4173 13.7943 14.4005 13.3198 14.0975 13.0374C13.7944 12.755 13.3198 12.7718 13.0375 13.0748L14.1349 14.0974ZM10.9253 10.9626C11.2283 10.6802 11.2451 10.2057 10.9627 9.90262C10.6803 9.59958 10.2057 9.58282 9.90269 9.8652L10.9253 10.9626ZM15.9895 15.8477C14.8379 16.7255 13.4356 17.2118 11.9878 17.2355L12.0124 18.7353C13.7803 18.7064 15.4926 18.1126 16.8988 17.0407L15.9895 15.8477ZM12.0001 17.2354C10.2467 17.2354 8.74988 16.4792 7.53734 15.4848C6.32253 14.4885 5.43524 13.286 4.9238 12.488L3.66092 13.2974C4.21878 14.1678 5.20471 15.5117 6.58613 16.6446C7.96982 17.7794 9.79222 18.7354 12.0001 18.7354V17.2354ZM4.92658 11.5094C5.74852 10.2202 6.79202 9.08318 8.01122 8.15218L7.10087 6.96002C5.74156 7.998 4.57816 9.26567 3.66177 10.703L4.92658 11.5094ZM4.9238 12.488C4.73291 12.1902 4.73233 11.8141 4.92658 11.5094L3.66177 10.703C3.15732 11.4943 3.1505 12.501 3.66092 13.2974L4.9238 12.488ZM10.5999 6.92461C11.0583 6.81731 11.5276 6.76368 11.9983 6.76479L12.0019 5.26479C11.4148 5.26341 10.8296 5.33029 10.258 5.46409L10.5999 6.92461ZM12.0001 6.76479C13.7541 6.76479 15.2514 7.5215 16.4641 8.51645C17.6792 9.51326 18.5664 10.7162 19.0775 11.5139L20.3405 10.7046C19.783 9.83456 18.7971 8.49026 17.4155 7.35678C16.0317 6.22144 14.2088 5.26479 12.0001 5.26479V6.76479ZM19.0755 12.4912C18.7624 12.9843 18.4165 13.4563 18.0399 13.9038L19.1877 14.8696C19.6074 14.3708 19.9929 13.8448 20.3418 13.2951L19.0755 12.4912ZM19.0775 11.5139C19.268 11.8112 19.2689 12.1865 19.0755 12.4912L20.3418 13.2951C20.8438 12.5044 20.8499 11.4998 20.3405 10.7046L19.0775 11.5139ZM13.0375 13.0748C12.6649 13.4746 12.1038 13.6392 11.5743 13.504L11.2031 14.9573C12.2641 15.2283 13.3884 14.8985 14.1349 14.0974L13.0375 13.0748ZM11.5743 13.504C11.0448 13.3688 10.6313 12.9553 10.4961 12.4258L9.04274 12.7969C9.31369 13.8579 10.1422 14.6864 11.2031 14.9573L11.5743 13.504ZM10.4961 12.4258C10.3609 11.8963 10.5255 11.3352 10.9253 10.9626L9.90269 9.8652C9.10156 10.6117 8.77179 11.736 9.04274 12.7969L10.4961 12.4258Z" fill="#5C635A" />
                                <path d="M5 5L19 19" stroke="#5C635A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    </div>



                    {errors.passwordError && (
                        <p className="mt-2 text-sm text-red-600">{errors.passwordError}</p>
                    )}
                </div>}
                <div className="flex gap-2 items-center mt-3">
                    <input type="checkbox" required checked={formData.checked} onChange={() => setFormData((pre) => { return { ...pre, checked: !formData.checked } })} className="cursor-pointer" />
                    {
                        auth === "Sign UP" ? <p className="text-light-sky text-xm leading-[14px] tracking-[.28px]">Accept Terms of Service</p> :
                            <div className="flex items-center justify-between w-full">
                                <p className="text-[#5C635A] text-xm leading-[14px] tracking-[.28px] text-xs">
                                    Remember me
                                </p>
                                <p className="cursor-pointer text-dark-sky text-xs font-medium">
                                    Forgot password?
                                </p>
                            </div>

                    }
                </div>
                <button
                    type="submit"
                    className="relative flex items-center justify-center bg-light-sky max-w-[271px] w-full px-10 py-4 rounded-[10px] mt-10 mx-auto font-semibold text-[16px] text-[#fff] disabled:opacity-50"
                    disabled={loading || loginLoadinloading}
                >
                    {loading && (
                        <svg
                            className="absolute w-5 h-5 mr-3 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                        </svg>
                    )}
                    {loginLoadinloading && (
                        <svg
                            className="absolute w-5 h-5 mr-3 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                        </svg>
                    )}
                    <span className={loading ? 'opacity-0' : 'opacity-100'}>{auth}</span>
                </button>
            </form >
            <div className="flex justify-center">
                {auth === "Sign Up" ? <p className="text-base font-medium text-[#152A16] mt-3 mb-10">Already Have an Account?
                    <Link to="/login" className="text-[#156BCA] underline">
                        {" "}
                        Log in
                    </Link>
                </p>
                    :
                    <p className="text-base font-medium text-[#152A16] mt-3 mb-10">Don&rsquo; Have an Account?
                        <Link to="/createAccount" className="text-[#156BCA] underline">
                            {" "}
                            Create Account
                        </Link>
                    </p>

                }

            </div>
        </div >
    );
};

export default AuthForms;