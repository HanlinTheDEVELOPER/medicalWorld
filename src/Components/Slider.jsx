import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import EachSlide from "./Utils/EachSlide";
import viewMore from "../assets/icons/Group 13@2x.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Slider(props) {
  return (
    <div className={`px-4 sm:px-32 py-2 sm:py-8 bg-${props.bgColor}`}>
      <h1 className="text-center text-slate-800  font-bold text-lg sm:text-4xl">
        {props.sliderTitle}
      </h1>
      <Swiper
        slidesPerView={props.windowSize < 500 ? 3 : 8}
        centeredSlides={false}
        spaceBetween={70}
        navigation={true}
        modules={[Navigation]}
        className={`mySwiper p-2 sm:p-10 mt:0 sm:mt-2 bg-${props.bgColor}`}
      >
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={true} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={true} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={false} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={true} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={true} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={false} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={true} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={false} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={false} />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide slide_src={props.item_src} fav={true} />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-gray-100 w-28 sm:w-32 h-60 shadow-lg flex justify-center items-center cursor-pointer rounded-lg">
            <img src={viewMore} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
