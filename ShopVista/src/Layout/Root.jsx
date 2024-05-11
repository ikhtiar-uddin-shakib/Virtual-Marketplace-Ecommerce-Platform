import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {Outlet} from 'react-router-dom';
const Root = () => {
    return (
        <div className="bg-pink-50 font-rubik ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;