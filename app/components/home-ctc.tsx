"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "../css/home-ctc.css";

export default function HomeCtc() {
  return (
    <div className="main">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/massage3-.png"
            alt="spa image"
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">Thai Massage</h1>
            <p className="homectc-overlay-subheading">
              "Experience the ancient art of Thai massage - restore balance,
              relieve stress, and rejuvenate your body and soul."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/massage1-.png"
            alt=""
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">Thai Massage</h1>
            <p className="homectc-overlay-subheading">
              "Experience the ancient art of Thai massage - restore balance,
              relieve stress, and rejuvenate your body and soul."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide><Image
            src="/images/massage2-.png"
            alt=""
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">Thai Massage</h1>
            <p className="homectc-overlay-subheading">
              "Experience the ancient art of Thai massage - restore balance,
              relieve stress, and rejuvenate your body and soul."
            </p>
          </div></SwiperSlide>
        <SwiperSlide><Image
            src="/images/massage4-.png"
            alt=""
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">Thai Massage</h1>
            <p className="homectc-overlay-subheading">
              "Experience the ancient art of Thai massage - restore balance,
              relieve stress, and rejuvenate your body and soul."
            </p>
          </div></SwiperSlide>
        <SwiperSlide><Image
            src="/images/massage5-.png"
            alt=""
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">Thai Massage</h1>
            <p className="homectc-overlay-subheading">
              "Experience the ancient art of Thai massage - restore balance,
              relieve stress, and rejuvenate your body and soul."
            </p>
          </div></SwiperSlide>
      </Swiper>
    </div>
  );
}
