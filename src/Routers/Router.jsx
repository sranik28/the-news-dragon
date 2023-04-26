import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import News from "../NewsLayout/News";
import NewsPages from "../NewsLayout/NewsPages";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category/:id",
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
                element: <NewsPages />
            },

        ]
    },

])

export default Router