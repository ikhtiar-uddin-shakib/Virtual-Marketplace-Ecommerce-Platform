import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Floor from "../Pages/Floor";
import Shop from "../Pages/Shop";
import CartAdded from "../Pages/CartAdded";
import Payment from "../Pages/Payment";

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
                loader: async () => {
                    const response = await fetch('http://localhost:5001/menu');
                    const data = await response.json();
                    console.log('Data fetched for /category:', data); // Debug logging
                    return data[0]?.shoppingMalls || []; // Return shoppingMalls array directly
                }
            },
            {
                path: '/floor/:id/:num',
                element: <Floor></Floor>,
                loader: async () => {
                    const response = await fetch('http://localhost:5001/menu');
                    const data = await response.json();
                    console.log('Data fetched for /floor:', data); // Debug logging
                    return data[0]?.shoppingMalls || []; // Return shoppingMalls array directly
                }
            },
            {
                path: '/shop/:id/:num/:shopNum',
                element: <Shop></Shop>,
                loader: async () => {
                    const response = await fetch('http://localhost:5001/menu');
                    const data = await response.json();
                    console.log('Data fetched for /shop:', data); // Debug logging
                    return data[0]?.shoppingMalls || []; // Return shoppingMalls array directly
                }
            },
            {
                path: '/addcart',
                element: <CartAdded></CartAdded>
            },
            {
                path: '/payment', // Add the payment route
                element: <Payment />,
            }
        ]
    },
]);

export default router;
