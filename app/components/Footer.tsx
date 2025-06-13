import React from "react";
import "../css/footer.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-image-section">
          <Image
            src="/logo.png"
            alt="logo"
            height={177}
            width={204}
            className="footer-logo"
          />
          <p className="footer-description">
            "Spring Day Spa Vellore - Rated 4.8★ for Body Massage, Foot Massage
            & Steam Bath in Vellore."
          </p>
        </div>
        <div className="footer-content-section">
          <div className="footer-content">
            <p className="footer-content-heading">Quick Links</p>
            <Link className="nav-links" href="/">
              Home
            </Link>
            <Link className="nav-links" href="#our-therapy">
              Services
            </Link>
            <Link className="nav-links" href="#our-pricing">
              Pricing & Packages
            </Link>
            <Link className="nav-links" href="#membership">
              Membership
            </Link>
          </div>
          <div className="footer-content">
            <p className="footer-content-heading">Contact</p>
            <Link className="footer-content-links" href="tel:7200555001">
              Cell : 72005 55001
            </Link>
            <Link
              className="footer-content-links"
              href="mailto:springdaysspa@gmail.com"
            >
              Email : springdaysspa@gmail.com
            </Link>
          </div>
          <div className="footer-content">
            <p className="footer-content-heading">Address</p>
            <Link className="footer-content-links-address" href="/">
              No:53,APL Layout Extension, Venkatapuram Road, Alamelumangapuram,
              Vellore - 632009.
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-icons">
        <div className="footer-icon-container">
          <div className="footer-icon-heading">Get in Touch</div>
          <div className="icon-container">
            <Link href="tel:7200555001">
              <Image
                src="../assets/icons/call.svg"
                alt="call"
                height={30}
                width={30}
              />
            </Link>
            <Link href="mailto:springdaysspa@gmail.com">
              <Image
                src="../assets/icons/email.svg"
                alt="email"
                height={30}
                width={30}
              />
            </Link>
            <Link href="facebook.com">
              <Image
                src="../assets/icons/facebook.svg"
                alt="call"
                height={30}
                width={30}
              />
            </Link>
            <Link href="instagram.com">
              <Image
                src="../assets/icons/instagram.svg"
                alt="email"
                height={30}
                width={30}
              />
            </Link>
            <Link href="https://maps.app.goo.gl/MEVyNhtDMYSqca5z7">
              <Image
                src="../assets/icons/location.svg"
                alt="call"
                height={30}
                width={30}
              />
            </Link>
            <Link href=" https://wa.me/7200555001">
              <Image
                src="../assets/icons/whatsapp.svg"
                alt="email"
                height={30}
                width={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
