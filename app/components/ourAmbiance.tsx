"use client";

import React from "react";
import "../css/our-ambiance.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const ourTherapyRow1 = [
  {
    image: "/images/therapy-cards/steambath.png",
    title: "Steam Bath ",
    description:
      "Detoxify your body and clear your mind with a soothing steam bath that refreshes from within.",
    pricing: "Starts From Just ₹1000",
  },
  {
    image: "/images/therapy-cards/saltscrub.png",
    title: "Sea Salt Scrub Massage",
    description:
      "Exfoliate, nourish, and renew your skin with a revitalising scrub and massage for a radiant glow.",
    pricing: "Starts From Just ₹2250",
  },
  {
    image: "/images/therapy-cards/head.png",
    title: "Head Relax Massage",
    description:
      "Calm your thoughts, ease tension, and enjoy pure tranquility with a deeply soothing head relaxation massage.",
    pricing: "Starts From Just ₹1000",
  },
  {
    image: "/images/therapy-cards/coffee.png",
    title: "Coffee Scrub Massage",
    description:
      "Exfoliate, nourish, and renew your skin with a revitalising scrub and massage for a radiant glow.",
    pricing: "Starts From Just ₹2250",
  },
  {
    image: "/images/therapy-cards/chocolate.png",
    title: "Chocolate Scrub Massage",
    description:
      "Exfoliate, nourish, and renew your skin with a revitalising scrub and massage for a radiant glow.",
    pricing: "Starts From Just ₹2250",
  },
  {
    image: "/images/therapy-cards/fruitscrub.png",
    title: "Fruit Scrub Massage",
    description:
      "Exfoliate, nourish, and renew your skin with a revitalising scrub and massage for a radiant glow.",
    pricing: "Starts From Just ₹2250",
  },
  {
    image: "/images/therapy-cards/foot.png",
    title: "Foot Reflexology Massage",
    description:
      "Restore body harmony and energy flow through expert pressure on reflex points in your feet.",
    pricing: "Starts From Just ₹1000",
  },
  {
    image: "/images/therapy-cards/back.png",
    title: "Back,Head,Shoulder Pain Massage",
    description:
      "Relieve built-up tension and pain with targeted therapy focused on your back, head, and shoulders.",
    pricing: "Starts From Just ₹1200",
  },
];
const OurAmbiance = () => {
  return (
    <div className="main">
      <div className="our-ambiance">
        <div className="title">Our Ambiance</div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={false}
          grabCursor={false}
          allowTouchMove={false}
          modules={[Autoplay]}
          className="our-ambiance-swiper"
        >
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/1.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/2.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/3.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/4.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/5.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/6.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/7.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/8.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/9.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
          <SwiperSlide className="our-therapy-slide">
            <Image src="/images/ambiance/10.png" alt="" className="ambiance-image" height={750} width={1280} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurAmbiance;
