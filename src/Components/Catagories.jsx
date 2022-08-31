import React from "react";
import CataChild from "./Utils/CataChild";
import syringe from "../assets/download/hospital-syringe-svgrepo-com.svg";
import shirt from "../assets/download/shirt-svgrepo-com.svg";
import littman from "../assets/download/stethoscope-svgrepo-com.svg";
import shoe from "../assets/download/shoe-marks-svgrepo-com.svg";
import nurse from "../assets/download/nurse-svgrepo-com.svg";
import towel from "../assets/download/towel-svgrepo-com.svg";

const Catagories = () => {
  return (
    <div className="mt-2 sm:mt-8 mb-4 w-full px-2 sm:px-32">
      <h1 className="text-center text-slate-800  font-bold text-lg sm:text-4xl">
        Catagories
      </h1>
      <div className="flex justify-between py-1 px-2 sm:p-4 mt-1 sm:mt-4">
        <CataChild cata_src={shirt} cata_title="Family Hospital" />
        <CataChild cata_src={syringe} cata_title="Accessories" />
        <CataChild cata_src={littman} cata_title="Littmann" />
        <CataChild cata_src={shoe} cata_title="Nursing Shoe" />
        <CataChild cata_src={nurse} cata_title="Nursing Uniform" />
        <CataChild cata_src={towel} cata_title="Family Uniform" />
      </div>
    </div>
  );
};

export default Catagories;
