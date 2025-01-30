import React from "react";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { showSideMenu } from "../redux/sidemenuSlice";

const Header = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("loginInfo");
    navigate("/");
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full flex justify-between items-center p-2 bg-green-50">
        <div className="logo flex gap-2">
          <IoMenu
            className="w-5 h-5 cursor-pointer mt-2 text-green-900"
            onClick={() => dispatch(showSideMenu())}
          />
          <NavLink to="/home">
            <img
              src="/logo.png"
              alt="logo Image"
              className="w-full h-[40px] rounded-md"
            />
          </NavLink>
        </div>
        <div className="nav flex-grow flex justify-center gap-4">
          <span className="text-green-700 font-semibold">
            <NavLink to="/home">Home</NavLink>
          </span>
          <span className="text-green-700 font-semibold">
            <NavLink to="/about">About</NavLink>
          </span>
          <span className="text-green-700 font-semibold">
            <NavLink to="/contact">Contact</NavLink>
          </span>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-green-700 text-white rounded-md"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
