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
    <div className="main" id="home-ctc">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
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
            src="/images/massage.png"
            alt="spa image"
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading ">
              Best Spa in Vellore for Sports Massage and Total Wellness
            </h1>
            <p className="homectc-overlay-subheading">
              "Experience rejuvenating therapies like deep tissue massage, steam
              baths, and more - designed for modern lifestyles."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/massage9.png"
            alt=""
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">
              {" "}
              Authentic Thai Massage in Vellore for Deep Relaxation and
              Flexibility
            </h1>
            <p className="homectc-overlay-subheading">
              "Experience the ancient art of Thai massage - restore balance,
              relieve stress, and rejuvenate your body and soul."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/massage66.png"
            alt="spa image"
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">
              Foot Reflexology in Vellore - Natural Healing Through Expert Touch
            </h1>
            <p className="homectc-overlay-subheading">
              "Restore body harmony and energy flow through expert pressure on
              reflex points in your feet."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/massage7.png"
            alt=""
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">
              {" "}
              Refreshing Steam Bath in Vellore - Detox and Rejuvenate Naturally
            </h1>
            <p className="homectc-overlay-subheading">
              "Detoxify your body and clear your mind with a soothing steam bath
              that refreshes from within."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/massage8.png"
            alt=""
            className="homectc-image"
            height={750}
            width={1280}
          />
          <div className="homectc-overlay">
            <h1 className="homectc-overlay-heading">
              Fruit Scrub Massage in Vellore - Glowing Skin with Nature&spos;s Touch
            </h1>
            <p className="homectc-overlay-subheading">
              "Exfoliate, nourish, and renew your skin with a revitalising scrub
              and massage for a radiant glow."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
