"use client";
import React from "react";
import "../css/navbar.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-padding">
        <div className="nav-logo-div">
          <Image src="/assets/logo.svg" alt="logo" height={75} width={75} />
        </div>
        <div className="nav-links-div">
          <Link className="nav-links" href="/">Home</Link>
          <Link className="nav-links" href="#services">Services</Link>
          <Link className="nav-links" href="#testimonials">Testimonials</Link>
          <Link className="nav-links" href="#pricing & packages">Pricing & Packages</Link>
        </div>
        <div className="nav-booking-div">
          <p>Booking Now</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
