import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const path = useLocation()
    const authLocation = path.pathname === "/login" || path.pathname === "/createAccount"
    return (
        <div>
            {
                !authLocation && <p>This is for outlets</p>
            }
            <Outlet />
        </div>
    );
};

export default Layout;