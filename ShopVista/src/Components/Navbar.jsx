import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      alert("Are you sure to log out");
      await logout();
      navigate("/");
    } catch (error) {
      alert("Failed to Logout");
    }
  };

  const navLink = (
    <>
      <Link to="/">
        <li className="font-semibold text-lg text-blue-900">
          <a>Home</a>
        </li>
      </Link>
      <Link to="/category">
        <li className="font-semibold text-lg text-blue-900">
          <a>Category</a>
        </li>
      </Link>
      <Link to="/product">
        <li className="font-semibold text-lg text-blue-900">
          <a>Product</a>
        </li>
      </Link>
      <Link to="/about">
        <li className="font-semibold text-lg text-blue-900">
          <a>About</a>
        </li>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-blue-100 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link
          to="/"
          className="md:text-5xl text-xl font-extrabold font-sedan text-blue-800"
        >
          Shop<span className="text-blue-950">Vista</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="btn hover:text-black bg-blue-800 text-white"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/signin">
              <button className="btn hover:text-black bg-blue-800 text-white">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn hover:text-black bg-blue-800 text-white">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
