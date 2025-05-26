"use client";
import React, { useState } from "react";
import "../css/navbar.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link className="nav-links" href="#services">
            Services
          </Link>
          <Link className="nav-links" href="#testimonials">
            Testimonials
          </Link>
          <Link className="nav-links" href="#pricing & packages">
            Pricing & Packages
          </Link>
        </div>

        {/* Booking Button (Always visible) */}
        <div className="nav-booking-div">
          <p>Booking Now</p>
        </div>

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
          <Link className="nav-links" href="/">
            Home
          </Link>
          <Link className="nav-links" href="#services">
            Services
          </Link>
          <Link className="nav-links" href="#testimonials">
            Testimonials
          </Link>
          <Link className="nav-links" href="#pricing & packages">
            Pricing & Packages
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
