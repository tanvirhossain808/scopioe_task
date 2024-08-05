import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

const Layout = () => {
    const path = useLocation()
    const authLocation = path.pathname === "/login" || path.pathname === "/createAccount"
    return (
        <div className={`${!authLocation && "bg-color-primary"} relative min-h-screen lg:overflow-visible`}>
            {/* <div>
                <Header />
            </div> */}

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
};

export default Layout;