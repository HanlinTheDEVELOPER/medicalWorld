import React from "react";
import Redeem from "../../assets/icons/Group 14@2x.svg";

const Reward = (props) => {
  return (
    <div className=" bg-gray-50 w-32 h-60 shadow-lg py-3 rounded-lg">
      <div className="w-full flex justify-center ">
        <div className="w-28 h-28 ">
          <img src={props.slide_src} className="w-full h-full rounded-lg" />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xs text-red-600 text-center my-2">
          Ends in {props.expire} 2023
        </h1>
        <h1 className="font-bold text-sm text-center my-2">Sample Products</h1>
        <h1 className="text-sky-500 font-bold text-xs  text-center my-2">
          25,600 KS
        </h1>
      </div>
      <div className="w-full px-2">
        <img src={Redeem} />
      </div>
    </div>
  );
};

export default Reward;
