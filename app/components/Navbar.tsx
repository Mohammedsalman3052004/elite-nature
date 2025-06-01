"use client";
import React, { useState } from "react";
import "../css/navbar.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav-padding">
        <div className="nav-logo-div">
          <Image src="/assets/logo.svg" alt="logo" height={75} width={75} />
        </div>

        {/* Desktop Links */}
        <div className="nav-links-div">
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

        <Link className="nav-linkss" href="#booking">
          <div className="nav-booking-div">
            <p>Booking Now</p>
          </div>
        </Link>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-dropdown">
          <Link className="nav-links" href="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link className="nav-links" href="#our-therapy" onClick={handleLinkClick}>
            Services
          </Link>
          <Link className="nav-links" href="#our-pricing" onClick={handleLinkClick}>
            Pricing & Packages
          </Link>
          <Link className="nav-links" href="#membership" onClick={handleLinkClick}>
            Membership
          </Link>
          <Link className="nav-links" href="#booking" onClick={handleLinkClick}>
            Book Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
