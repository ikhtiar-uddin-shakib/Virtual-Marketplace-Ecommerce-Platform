import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Floor from "../Pages/Floor";
import Shop from "../Pages/Shop";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path:'/category',
                element:<Category></Category>,
                loader : () => fetch('/data.json')
            },
            {
                path: '/floor/:id/:num',
                element: <Floor></Floor>,
                loader : () => fetch('/data.json')
            },
            {
                path: '/shop/:id/:num/:shopNum',
                element: <Shop></Shop>,
                loader : () => fetch('/data.json')
            }
        ]
        
    },
]);

export default router;