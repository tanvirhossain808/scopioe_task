/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const AuthMessage = ({ canShowFrom, setCanShowFrom, auth }) => {
    return (
        <div className={`md:absolute top-1/2 right-1/2 md:-translate-y-1/2 md:translate-x-1/2 max-w-[341px] md:min-w-[341px] md:mt-0 rounded-[10px] text-[#fff] px-[35px] mx-auto ${!canShowFrom ? "bg-[#1F2833] opacity-[0.7] mt-20 py-[30px]" : "mt-6"}`}>
            <h4 className={`text-center leading-[35px] max-w-[full] ${!canShowFrom ? "text-[22px] font-semibold" : "text-[18px] leading-[24px] font-medium"}`}>
                <span className={`${canShowFrom ? "text-[#fff]" : "text-[#156BCA] cursor-pointer"} md:hidden`} onClick={() => setCanShowFrom(true)}>
                    Create Account <br />
                </span>
                <span className={`${canShowFrom ? "text-[#fff]" : "text-[#156BCA] cursor-pointer"} hidden md:block`}>
                    Create Account <br />
                </span>
                Fill in Your Information
            </h4>
        </div>
    );
};

export default AuthMessage;