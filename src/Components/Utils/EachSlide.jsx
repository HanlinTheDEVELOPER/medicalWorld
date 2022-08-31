import React from "react";
import Plus from "../../assets/icons/add.svg";
import Minus from "../../assets/icons/minus LIGHT.svg";
import cantMinus from "../../assets/icons/minus.svg";
import AddToCart from "../../assets/icons/Add to Cart@2x.svg";
import Fav from "../../assets/icons/favourited@2x.svg";
import notFav from "../../assets/icons/favourite@2x.svg";

const EachSlide = (props) => {
  const [count, setCount] = React.useState(0);
  const [fav, setFav] = React.useState(props.fav);
  const plus = () => {
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount((prev) => {
      return prev === 0 ? 0 : prev - 1;
    });
  };
  const toggleFavourite = () => {
    setFav((prev) => !prev);
  };
  return (
    <div className=" bg-gray-50 w-28  sm:w-32 h-60 shadow-lg py-3 rounded-lg">
      <div className="w-full flex justify-center ">
        <div className="w-24 sm:w-28 h-24 sm:h-28 relative">
          <img src={props.slide_src} className="w-full h-full rounded-lg" />
          <img
            src={fav ? Fav : notFav}
            onClick={toggleFavourite}
            className="absolute w-4 sm:w-8 h-4 sm:h-8 top-1 right-1 sm:right-2 shadow-lg rounded-full"
          />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-sm text-center">Sample Products</h1>
        <h1 className="text-sky-500 font-bold text-xs  text-center">
          25,600 KS
        </h1>
      </div>
      <div className="flex items-center justify-between w-full px-2  mb-2">
        <img src={count === 0 ? cantMinus : Minus} onClick={minus} />
        <h1 className="font-bold text-lg ">{count}</h1>
        <img src={Plus} onClick={plus} />
      </div>
      <div className="w-full px-2">
        <button className="bg-sky-500 rounded-md  w-full px-4 py-2 flex justify-center">
          <img src={AddToCart} />
        </button>
      </div>
    </div>
  );
};

export default EachSlide;
