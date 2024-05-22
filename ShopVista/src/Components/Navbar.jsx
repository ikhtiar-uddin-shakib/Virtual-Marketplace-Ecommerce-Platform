import { Link } from "react-router-dom";

const Navbar = () => {
    const navLink = (
        <>
            <li className="font-semibold text-lg text-blue-900">
                <Link to='/'>Home</Link>
            </li>
            <li className="font-semibold text-lg text-blue-900">
                <Link to='/AllMall'>Category</Link>
            </li>
            <li className="font-semibold text-lg text-blue-900">
                <Link to='/product'>Product</Link>
            </li>
            <li className="font-semibold text-lg text-blue-900">
                <Link to='/about'>About</Link>
            </li>
        </>
    );
    
    return (
        <div className="py-[40px]">
            <div className="navbar bg-[#F6E7E7] py-5 px-9 w-[1600px] m-auto rounded-full ">
                <div className="navbar-start">
                   
                   <Link to="/">
                   <img className="w-[100px] h-[60px]  rounded-3xl"  src="https://i.ibb.co/brP0NwN/icon.png" alt="icon" />
                   </Link> 
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-white rounded-3xl">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end  space-x-8">
                    <Link to='/SignIn'><button className="btn rounded-2xl hover:text-white bg-white text-black">SignIn</button></Link>
                    <Link to='/signUp'><button className="btn rounded-2xl hover:text-white bg-white text-black">SignUp</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
