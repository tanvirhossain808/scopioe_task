import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
    const path = useLocation()
    const authLocation = path.pathname === "/login" || path.pathname === "/createAccount"
    return (
        <div className={`${!authLocation && "bg-color-primary"}`}>
            <Header />

            <Outlet />
        </div>
    );
};

export default Layout;