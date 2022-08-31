import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel(props) {
  return (
    <>
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper px-20 py-12"
      >
        <SwiperSlide>
          <img src={props.banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.banner} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
