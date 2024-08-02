import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            This is for outlets
            <Outlet />
        </div>
    );
};

export default Layout;