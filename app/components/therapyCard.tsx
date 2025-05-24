import React from "react";
import "../css/therapy-card.css";
import Image from "next/image";

const TherapyCard = ({
  image,
  title,
  description,
  pricing,
}: {
  image: string;
  title: string;
  description: string;
  pricing: string;
}) => {
  return (
    <div className="our-therapy-container">
      <div className="our-therapy-background"></div>
      <div className="our-therapy-foreground">
        <div className="our-therapy-image-div">
          <Image
            src={image}
            alt="our-therapy-image"
            className="our-therapy-image"
            height={750}
            width={1280}
          />
        </div>
        <div className="our-therapy-content">
          <p className="our-therapy-content-heading">{title}</p>
          <p className="our-therapy-content-description">{description}</p>
          <div className="our-therapy-content-pricing">
            <p>{pricing}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyCard;
