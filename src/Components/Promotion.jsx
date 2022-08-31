import React, { useRef, useState } from "react";
import PromoItems from "./Utils/PromoItems";

import promoItem from "../assets/download/kidshoe.jpg";
import promoItem2 from "../assets/download/randedBox.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
// import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
// SwiperCore.use([Pagination]);

export default function App() {
  return (
    <div className="px-4 sm:px-32 py-2 sm:py-8 bg-gray-50">
      <h1 className="text-center text-slate-800  font-bold text-lg sm:text-4xl">
        Promotions
      </h1>
      <Swiper
        slidesPerView={4}
        slidesPerColumn={1}
        spaceBetween={30}
        className="mySwiper px-2 py-2  sm:px-14 sm:py-10 sm:mt-2"
      >
        <SwiperSlide>
          <PromoItems promo_src={promoItem} />
          <PromoItems promo_src={promoItem2} />
        </SwiperSlide>
        <SwiperSlide>
          <PromoItems promo_src={promoItem2} />
          <PromoItems promo_src={promoItem} />
        </SwiperSlide>
        <SwiperSlide>
          <PromoItems promo_src={promoItem} />
          <PromoItems promo_src={promoItem2} />
        </SwiperSlide>
        <SwiperSlide>
          <PromoItems promo_src={promoItem2} />
          <PromoItems promo_src={promoItem} />
        </SwiperSlide>
        <SwiperSlide>
          <PromoItems promo_src={promoItem} />
          <PromoItems promo_src={promoItem2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
