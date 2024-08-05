import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

const Layout = () => {
    const path = useLocation()
    const authLocation = path.pathname === "/login" || path.pathname === "/createAccount"
    return (
        <div className={`${!authLocation && "bg-color-primary"} relative lg:overflow-visible`}>
            {/* <div>
                <Header />
            </div> */}

            <div className="lg:flex max-w-[1440px] mx-auto">
                <div className="lg:block bg-white min-w-[250px] hidden">
                    <div className="sticky top-0 min-h-dvh">
                        <Nav />
                    </div>
                </div>
                <div className="grow max-w-[1190px] overflow-hidden">
                    <Header />
                    <div className="mx-[30px]">
                        <Outlet />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Layout;