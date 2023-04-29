import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category";
import News from "../NewsLayout/News";
import NewsPages from "../NewsLayout/NewsPages";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/LoginSite/Login";
import Register from "../Pages/LoginSite/Register";
import PrivateRoute from "../Private/PrivateRoute";
import Terms from "../components/Terms";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0" />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/terms",
                element: <Terms />
            }
        ]
    },
    {
        path: "/category",
        element: <Main />,
        children: [
            {
                path: ":id",
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

            },
        ]
    },
    {
        path: "news",
        element: <News />,
        children: [
            {
                path: ":id",
                element: <PrivateRoute>  <NewsPages /> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },

        ]
    },

])

export default Router