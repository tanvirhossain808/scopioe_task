import AuthForms from "../../../components/Logo/AuthForms/AuthForms";


const Login = () => {
    return (
        <div className="w-full h-screen bg-auth-phone-background bg-cover bg-center overflow-y-hidden relative">
            <div className="max-w-[380px] mx-auto mt-[64px]">
                <AuthForms auth="Sign in" />
            </div>
        </div >
    )
};

export default Login;