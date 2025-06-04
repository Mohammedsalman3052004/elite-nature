import React from "react";
import "../css/location.css";
import Image from "next/image";
import Link from "next/link";

const Location = () => {
  return (
    <div className="main" id="location">
      <div className="location-heading">Location On Map</div>
      <div className="location-container">
        <div className="location-image-container">
          <Image
            src="/images/location.png"
            alt="map"
            className="location-image"
            height={500}
            width={500}
          />
        </div>
        <div className="location-content">
          <div className="location-address">
            <p className="location-address-heading">Address</p>
            <div className="locaion-address-text">
              No:53,APL Layout Extension, Venkatapuram Road, Alamelumangapuram,
              Vellore - 632009.
            </div>
          </div>
          <div className="location-btn-container">
            <Link href="https://maps.app.goo.gl/MEVyNhtDMYSqca5z7">
              <div className="location-btn">
                <p>View on Map</p>
                <Image
                  src="/assets/right-arrow.svg"
                  alt="right-arrow"
                  height={20}
                  width={20}
                  className="right-arrow"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
