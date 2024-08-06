import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Layout from "../Layout/Layout";
import Create_Account from "../page/Auth/Create_Account/Create_Account";
import Login from "../page/Auth/Login/Login";
import firebaseAuth from "../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export const RoutesPath = () => {
    const [authUser] = useAuthState(firebaseAuth);
    const routes = createBrowserRouter(
        [
            {
                path: '',
                element: <Layout />,
                children: [
                    {
                        path: `/`,
                        // element: authUser ? <Home /> : < Navigate to={'/auth'} />
                        element: authUser ? <Home /> : <Navigate to={"/login"} />
                    },

                    {
                        path: '/createAccount',
                        element: authUser ? <Navigate to={"/"} /> : <Create_Account />
                    },
                    {
                        path: "/login",
                        element: !authUser ? <Login /> : <Navigate to={"/"} />
                    },
                    // {
                    //     path: "/app",
                    //     element: <App />
                    // }
                ]
            }

        ]

    )
    return (

        <RouterProvider router={routes} />


    )
}