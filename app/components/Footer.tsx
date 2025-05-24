import React from "react";
import "../css/footer.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-image-section">
        <Image
          src="../assets/footer-logo.svg"
          alt="logo"
          height={177}
          width={204}
        />
        <p className="footer-description">
          "Dedicated to holistic wellness and personalized care. Experience
          relaxation, rejuvenation, and renewal at Spring Day Spa."
        </p>
      </div>
      <div className="footer-content-section">
        <div className="footer-content">
          <p className="footer-content-heading">Quick Links</p>
          <Link className="footer-content-links" href="/">
            Home
          </Link>
          <Link className="footer-content-links" href="/">
            Services
          </Link>
          <Link className="footer-content-links" href="/">
            Testimonials
          </Link>
          <Link className="footer-content-links" href="/">
            Pricing & Package
          </Link>
          <Link className="footer-content-links" href="/">
            Booking
          </Link>
        </div>
        <div className="footer-content">
          <p className="footer-content-heading">Contact</p>
          <Link className="footer-content-links" href="/">
            Cell : 80564 44650
          </Link>
          <Link className="footer-content-links" href="/">
            Email : elitenatural@gmail.com
          </Link>
        </div>
        <div className="footer-content">
          <p className="footer-content-heading">Address</p>
          <Link className="footer-content-links-address" href="/">
            44 Muslim Street Sekkanur Pettai, Ussoor - Vellore Dist - 632105
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
