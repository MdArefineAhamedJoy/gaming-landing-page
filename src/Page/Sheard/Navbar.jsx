import React from "react";
import { FaPlay } from "react-icons/fa";
import { BiDotsVerticalRounded, BiSolidSearch, BiSolidShoppingBag } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsSearch } from "react-icons/bs";


const Navbar = () => {
  const navItem = (
    <>
      <li className="mx-2 capitalize font-semibold text-white">Home </li>
      <li className="mx-2 capitalize font-semibold text-white">Pages</li>
      <li className="mx-2 capitalize font-semibold text-white">Block </li>
      <li className="mx-2 capitalize font-semibold text-white">blog </li>
      <li className="mx-2 capitalize font-semibold text-white">shop </li>
      <li className="mx-2 capitalize font-semibold text-white">eSports </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#292636] text-white h-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] m-0 p-0   shadow bg-[#292636] w-screen h-screen "
            >
              {navItem}
            </ul>
          </div>
          <div>
          <button  className="w-10 mx-2 h-5"><BiDotsVerticalRounded/></button>
          <button  className="w-10 mx-2 h-5"><FaPlay/></button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end  ">
          <button className="w-10 mx-2 h-5"><BsSearch/></button>
          <button className="w-10 mx-2 h-5"><BiSolidShoppingBag/></button>
          <button className="w-10 mx-2 h-5"><BsFillArrowRightCircleFill/></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
