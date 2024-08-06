import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "../firebase/firebase.config";

const Layout = () => {
    const path = useLocation()
    const [user, loading, error] = useAuthState(firebaseAuth);
    const authLocation = path.pathname === "/login" || path.pathname === "/createAccount"
    if (loading) return <div className="flex items-center justify-center h-dvh">

        <h1>Loading</h1>
    </div>
    return (
        <div className={`${!authLocation && "bg-color-primary"} relative min-h-screen lg:overflow-visible`}>
            <div className={`lg:flex max-w-[1440px] mx-auto`}>
                {
                    !authLocation && <div className="lg:block bg-white min-w-[250px] hidden">
                        <div className="sticky top-0 min-h-dvh">
                            <Nav />
                        </div>
                    </div>
                }

                <div className={`grow ${authLocation ? "max-w-full" : "max-w-[1190px]"} overflow-hidden ${authLocation && "overflow-visible bg-wh=ite"} `}>
                    {!authLocation && <Header />}
                    <div className={` ${authLocation ? "mx-0" : "mx-[30px]"}`}>
                        <Outlet />
                    </div>
                </div>

            </div>

        </div>
    );
    // return <h2>
    //     hey
    // </h2>
};

export default Layout;