import React from "react";

const CataChild = (props) => {
  return (
    <div className="w-10  sm:w-fit flex flex-col items-center justify-center cursor-pointer">
      <img
        src={props.cata_src}
        className="bg-white rounded-xl px-1 py-2 sm:p-4 w-10 h-10 sm:w-28 sm:h-28"
      />
      <h1 className="text-slate-900 font-bold   mt-1 sm:mt-4 hidden sm:block text-center">
        {props.cata_title}
      </h1>
    </div>
  );
};

export default CataChild;
