"use client";

import React from "react";
import "../css/our-therapy.css";
import TherapyCard from "./therapyCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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

const ourTherapyRow2 = [
  {
    image: "/images/therapy-cards/synchronised.png",
    title: "Synchronised Massage",
    description:
      "Two therapists, one rhythm—experience ultimate relaxation through harmonious, synchronised movements , mindful touch.",
    pricing: "Starts From Just ₹2500",
  },
  {
    image: "/images/therapy-cards/sports.png",
    title: "Sports Massage",
    description:
      "Enhance performance, prevent injury, and speed up recovery with massage designed for active and athletic lifestyles.",
    pricing: "Starts From Just ₹2800",
  },
  {
    image: "/images/therapy-cards/balinese.png",
    title: "Balinese Massage",
    description:
      "Discover deep relaxation through rhythmic, healing strokes inspired by the traditional wisdom of Balinese therapy.",
    pricing: "Starts From Just ₹2500",
  },
  {
    image: "/images/therapy-cards/aroma.png",
    title: "Aroma Massage",
    description:
      "Indulge your senses with essential oils and calming massage, bringing harmony to body, mind, and spirit.",
    pricing: "Starts From Just ₹2500",
  },
  {
    image: "/images/therapy-cards/deeptissue.png",
    title: "Deep Tissue Massage",
    description:
      "Target deep muscle layers to release chronic tension, relieve pain, and restore lasting strength and flexibility.",
    pricing: "Starts From Just ₹2500",
  },
  {
    image: "/images/therapy-cards/swedish.png",
    title: "Swedish Massage",
    description:
      "Relax your body and mind with gentle strokes and soothing techniques that melt stress and boost circulation.",
    pricing: "Starts From Just ₹2500",
  },
  {
    image: "/images/therapy-cards/ayurvedic.png",
    title: "Ayurvedic Massage",
    description:
      "Balance your energy, detoxify your system, and awaken inner healing with ancient Ayurvedic oils and techniques.",
    pricing: "Starts From Just ₹2500",
  },
  {
    image: "/images/therapy-cards/thai.png",
    title: "Thai Massage",
    description:
      "Experience the ancient art of Thai massage - restore balance, relieve stress, and rejuvenate your body and soul.",
    pricing: "Starts From Just ₹2500",
  },
];

const OurTherapy = () => {
  return (
    <div className="main our-therapy" id="our-therapy">
      <div className="title">
        <span className="heading-span">O</span>ur{" "}
        <span className="heading-span">T</span>herapy
      </div>
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
        className="our-therapy-swiper"
      >
        {ourTherapyRow1.map((therapy, index) => (
          <SwiperSlide
            key={index}
            className="our-therapy-slide"
            style={{ width: "300px" }}
          >
            <TherapyCard
              image={therapy.image}
              title={therapy.title}
              description={therapy.description}
              pricing={therapy.pricing}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        grabCursor={false}
        modules={[Autoplay]}
        className="our-therapy-swiper"
      >
        {ourTherapyRow2.map((therapy, index) => (
          <SwiperSlide
            key={index}
            className="our-therapy-slide"
            style={{ width: "300px" }}
          >
            <TherapyCard
              image={therapy.image}
              title={therapy.title}
              description={therapy.description}
              pricing={therapy.pricing}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTherapy;
