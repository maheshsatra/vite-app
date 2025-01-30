import React from "react";
import { Link } from "react-router-dom";
import Title from "../feachers/Titel";
import { showSideMenu } from "../redux/sidemenuSlice";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

const SideMenu = () => {
  const dispatch = useDispatch();
  const sideMenuList = [
    { id: 1, link: "/items", name: "Items" },
    { id: 2, link: "/promocode", name: "Promo Codes" },
    { id: 3, link: "/category", name: "Category" },
  ];
  return (
    <>
      <div className="w-full h-[90vh] bg-green-100 p-2">
        <div className="w-full flex justify-between my-2">
          <span className="text-2xl text-green-700 capitalize">
            admin screens
          </span>
          <RxCross2
            onClick={() => dispatch(showSideMenu())}
            className="w-4 h-4 mt-2 text-green-900 cursor-pointer font-bold"
          />
        </div>
        {sideMenuList && sideMenuList.length > 0
          ? sideMenuList.map((list) => {
              return (
                <p
                  className="w-full my-2 text-green-800 font-semibold"
                  key={list.id}
                >
                  <Link to={list.link}>{list.name}</Link>
                </p>
              );
            })
          : "no admin menu available"}
      </div>
    </>
  );
};

export default SideMenu;
