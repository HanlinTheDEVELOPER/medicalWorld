import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-sky-500 flex flex-col justify-center items-center  sm:flex-row sm:justify-around sm:items-start text-white font-bold  py-12">
        <div className="text-center sm:text-justify mb-6 sm:mb-auto">
          <h1 className="text-md">Customer Service</h1>
          <ul className="text-xs mt-4 font-semibold">
            <li className="mb-2">Terms & Privacy Policy</li>
            <li className="mb-2"> Return Policy</li>
          </ul>
        </div>
        <div className="text-center sm:text-justify mb-6 sm:mb-auto">
          <h1 className="text-md">Language</h1>
          <ul className="text-xs mt-4 font-semibold">
            <li className="mb-2">Myanmar(Unicode)</li>
            <li className="mb-2">Myanmar(Zawgyi)</li>
            <li className="list-disc ml-4 mb-2">English</li>
          </ul>
        </div>
        <div className="text-center sm:text-justify mb-6 sm:mb-auto">
          <h1 className="text-md">Contact Us</h1>
          <ul className="text-xs mt-4 font-semibold">
            <li className="mb-2"> +959 448833467</li>
            <li className="mb-2">
              No.6, Marlar Myaing 4th Street, <br />
              16th Ward, Hlaing Township, <br />
              Yangon, Myanmar
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-sky-600 text-white font-base sm:font-bold text-xs text-center py-2">
        All Rights Reserved. Made With All The Love In Shopdoora Co,Ltd.
      </div>
    </>
  );
};

export default Footer;
