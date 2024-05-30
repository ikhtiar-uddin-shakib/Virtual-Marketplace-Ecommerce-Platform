import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Floor from "../Pages/Floor";
import Shop from "../Pages/Shop";
import SignUpPage from "../Pages/Signup";
import SignIn from "../Pages/Signin";
import { AuthProvider } from "../context/AuthContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Root />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category",
        element: <Category></Category>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/floor/:id/:num",
        element: <Floor></Floor>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/shop/:id/:num/:shopNum",
        element: <Shop></Shop>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/signin", 
        element: <SignIn /> 
      },
      {
        path: "/signup",
        element: <SignUpPage />
      },
    ],
  },
]);

export default router;
