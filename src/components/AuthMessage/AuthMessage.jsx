/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const AuthMessage = ({ canShowFrom, setCanShowFrom, auth }) => {
    return (
        <div className={`lg:absolute top-1/2 right-1/2 lg:-translate-y-1/2 lg:translate-x-1/2 max-w-[341px] lg:min-w-[341px] lg:mt-0 rounded-[10px] text-[#fff] px-[35px] mx-auto ${!canShowFrom ? "bg-[#1F2833] opacity-[0.7] mt-20 py-[30px]" : "mt-6"}`}>
            {
                auth !== "Log In" ? <>

                    <h4 className={`text-center leading-[35px] max-w-[full] ${!canShowFrom ? "text-[22px] font-semibold" : "text-[18px] leading-[24px] font-medium"}`}>

                        <span className={`${canShowFrom ? "text-[#fff]" : "text-[#156BCA] cursor-pointer"} lg:hidden`} onClick={() => setCanShowFrom(true)}>
                            Create Account <br />
                        </span>
                        <span className={`${canShowFrom ? "text-[#fff]" : "text-[#156BCA] cursor-pointer"} hidden lg:block`}>
                            Create Account <br />
                        </span>
                        Fill in Your Information
                    </h4>
                </>
                    :
                    <>
                        <h4 className="leading-[35px] text-[22px] font-medium text-light-white text-center">
                            <span className="text-dark-sky font-semibold">
                                Sign In
                            </span>
                            {" "}to view all the
                            <br />
                            massage therapists
                        </h4>
                    </>
            }

        </div >
    );
};

export default AuthMessage;