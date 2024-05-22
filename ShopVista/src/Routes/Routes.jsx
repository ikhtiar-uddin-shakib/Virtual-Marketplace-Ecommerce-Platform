import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Floor from "../Pages/Floor";
import Shop from "../Pages/Shop";
import ShoppingCard from "../Components/card/ShoppingCard";
import ShowAllMall from "../Pages/ShowAllMall";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category',
                element: <Category></Category>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/floor/:id/:num',
                element: <Floor></Floor>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
            },
            {
                path: '/ShoppingMall',
                element: <ShoppingCard></ShoppingCard>
            },
            {
                path: '/AllMall',
                element: <ShowAllMall></ShowAllMall>
            }

        ]

    },
]);

export default router;