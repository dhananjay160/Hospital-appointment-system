//Navbar.jsx

// import React from 'react'
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate(); // it is make hook
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-around text-sm py-4 mb-4 border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex item-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1"> ALL DOCTORS </li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 ">
        {/* make onclick button to redirect page on login page  */}
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14  font-medium text-gray-600 z-20  hidden group-hover:block text-xs">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4hover :">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  {" "}
                  Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  {" "}
                  Logout{" "}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/Login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block "
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-white transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 overflow-y-hidden`}
        >
          {/* Menu Header */}
          <div className="flex justify-between items-center p-4 bg-white">
            <img className="w-24" src={assets.logo} alt="logo" />
            <img
              onClick={() => {
                setShowMenu(false);
                document.body.classList.remove("overflow-hidden");
              }}
              className="w-6 cursor-pointer"
              src={assets.cross_icon}
              alt="close icon"
            />
          </div>

          {/* Menu Links */}
          <ul className="flex flex-col items-center gap-6 mt-8 text-gray-900 font-medium text-lg">
            <NavLink
              to="/"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/doctors"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              All Doctors
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </ul>
        </div>
        {/* Add this logic to toggle overflow hidden */}
        {showMenu && document.body.classList.add("overflow-hidden")}
      </div>
    </div>
  );
};

export default Navbar;
