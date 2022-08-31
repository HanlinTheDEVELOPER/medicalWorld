import React from "react";

import cart from "../assets/download/shopping-cart-svgrepo-com.svg";
import order from "../assets/icons/order inactive@2x.svg";
import noti from "../assets/icons/noti inactive@2x.svg";
import profile from "../assets/icons/pp inactive.png";

const SmallScreenMenu = () => {
  return (
    <div className="w-screen h-screen p-8 bg-transparent absolute top-10 z">
      <div className="w-full h-2/3 bg-sky-500 flex items-center justify-center  font-bold text-white rounded-3xl opacity-95 border-8 border-double border-white ">
        <ul>
          <li className="mb-3 flex items-center gap-2">
            <img src={cart} className="w-6 h-6" />
            Cart
          </li>
          <li className="mb-3 flex items-center gap-2">
            <img src={order} className="w-6 h-6" /> Orders
          </li>
          <li className="mb-3 flex items-center gap-2">
            <img src={noti} className="w-6 h-6" /> Notifications
          </li>
          <li className="mb-3 flex items-center gap-2">
            <img src={profile} className="w-6 h-6" /> Profile
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmallScreenMenu;
