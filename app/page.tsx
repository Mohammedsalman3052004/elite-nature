import React from "react";
import HomeCtc from "./components/home-ctc";
import CountingNumber from "./components/countingNumber";
import OurTherapy from "./components/ourTherapy";
import OurAmbiance from "./components/ourAmbiance";
import MemberShip from "./components/memberShip";
import OurPricing from "./components/ourPricing";

export default function SwiperComponent() {
  return (
    <div className="main">
      <HomeCtc />
      <CountingNumber />
      <OurTherapy />
      <OurPricing />
      <OurAmbiance />
      <MemberShip />
    </div>
  );
}
