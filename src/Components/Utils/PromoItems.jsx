import React from "react";
import promoCheck from "../../assets/download/checked-success-svgrepo-com.svg";

const PromoItems = (props) => {
  return (
    <div className="relative w-16 sm:w-48 h-16 sm:h-48 mb-2 sm:mb-12 rounded-md overflow-hidden bg-blue-500">
      <img src={props.promo_src} className="w-full h-full" />
      <img
        src={promoCheck}
        className="absolute w-2 sm:w-8 h-2 sm:h-8 top-2 right-2 shadow-xl shadow-white rounded-full cursor-pointer"
      />
    </div>
  );
};

export default PromoItems;
