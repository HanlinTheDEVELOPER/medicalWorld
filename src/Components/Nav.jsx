import React from "react";
import logo from "../assets/icons/logo hori.svg";
import searchButton from "../assets/icons/Rectangle 20.svg";
import searchButtonSmall from "../assets/icons/Circle Small.svg";
import menu from "../assets/download/menu-svgrepo-com.svg";
import close from "../assets/download/close-large-thick-svgrepo-com.svg";

import SmallScreenMenu from "./SmallScreenMenu";

const Nav = (props) => {
  const [smallScreenMenu, setSmallScreenMenu] = React.useState(false);
  const toggleSmallScreen = () => {
    setSmallScreenMenu((prev) => !prev);
  };
  return (
    <nav className=" pt-5 px-20  flex gap-10  flex-col-reverse sm:flex-row items-center justify-between mb-8 w-full">
      <div className=" items-center  flex ">
        <input
          type="text"
          placeholder="SEARCH ITEMS"
          className="w-80 sm:w-64 p-2 placeholder-blue-400 font-medium text-xs rounded-lg "
        />
        <div className="flex items-end -ml-8">
          <img src={searchButton} className="w-5 h-5" />
          <img src={searchButtonSmall} className="w-2 h-2" />
        </div>
      </div>

      <img src={logo} alt="main logo" />
      {props.windowSize < 500 && (
        <img
          src={smallScreenMenu ? close : menu}
          className="absolute top-8 right-5 w-6 h-6"
          onClick={toggleSmallScreen}
        />
      )}

      <div className=" hidden sm:flex items-center justify-between">
        <div className="font-semibold text-sm text-indigo-900 mr-4 ">Cart</div>
        <div className="font-semibold text-sm text-indigo-900 mr-4 ">
          Orders
        </div>
        <div className="font-semibold text-sm text-indigo-900 mr-4 ">
          Notifications
        </div>
        <div className="font-semibold text-sm text-indigo-900 mr-4 ">
          Profile
        </div>
      </div>
      {props.windowSize < 500 && smallScreenMenu && <SmallScreenMenu />}
    </nav>
  );
};

export default Nav;
