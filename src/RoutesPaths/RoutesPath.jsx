import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Layout } from "../Layout/Layout";
// import Home from "../pages/Home/Home";
// import AuthPage from "../pages/AuthPage/AuthPage";
// import ProfilePage from "../pages/ProfilePage/ProfilePage";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../firebase/firebase.config"
import Home from "../page/Home";
import Layout from "../Layout/Layout";
import Create_Account from "../page/Auth/Create_Account/Create_Account";
import Login from "../page/Auth/Login/Login";
import App from "../App";


// here some bugs
export const RoutesPath = () => {
    // const [authUser] = useAuthState(auth);
    const routes = createBrowserRouter(
        [
            {
                path: '',
                element: <Layout />,
                children: [
                    {
                        path: "/",
                        // element: authUser ? <Home /> : < Navigate to={'/auth'} />
                        element: <Home />
                    },

                    {
                        path: '/createAccount',
                        element: <Create_Account />
                    },
                    {
                        path: "/login",
                        element: <Login />
                    },
                    {
                        path: "/app",
                        element: <App />
                    }
                ]
            }

        ]

    )
    return (

        <RouterProvider router={routes} />


    )
}