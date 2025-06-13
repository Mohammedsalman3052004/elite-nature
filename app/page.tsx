import React from "react";
import HomeCtc from "./components/home-ctc";
import CountingNumber from "./components/countingNumber";
import OurTherapy from "./components/ourTherapy";
import OurAmbiance from "./components/ourAmbiance";
import MemberShip from "./components/memberShip";
import OurPricing from "./components/ourPricing";
import Booking from "./components/booking";
import Navbar from "./components/Navbar";
import Location from "./components/location";
import ReviewSection from "./components/review";

export default function SwiperComponent() {
  return (
    <div className="main">
      <Navbar />
      <HomeCtc />
      <CountingNumber />
      <OurTherapy />
      <OurPricing />
      <OurAmbiance />
      <MemberShip />
      <Location />
      <ReviewSection />
      <Booking />
    </div>
  );
}
