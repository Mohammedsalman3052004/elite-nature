"use client";

import React, { useState, useRef } from "react";
import "../css/booking.css";
import Image from "next/image";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success popup
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Reset form fields
    formRef.current?.reset();
    setSelectedDate("");
    setSelectedTime("");
    setSelectedService("");
  };

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  const treatments = [
    "Thai Massage",
    "Ayurvedic Massage",
    "Swedish Massagee",
    "Deep Tissue Massage",
    "Aroma Massage",
    "Balinese Massage",
    "Sports massage",
    "Synchronised Massage",
    "Head Relax Massage",
    "Foot Reflexology",
    "Back, Head, Shoulder Pain Massage",
    "Steam Bath",
    "Scrub Massage",
    "Chocolate Scrub",
    "Coffee Scrub",
    "Fruit Scrub",
    "Sea Salt Scrub",
  ];

  return (
    <div className="main">
      {showPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <span className="popup-icon">✅</span>
            <p>Submitted Successfully!</p>
          </div>
        </div>
      )}

      <div className="booking-section">
        <div className="booking-content">
          <div className="booking-form-div">
            <h1 className="booking-form-heading">Book Now</h1>
          </div>
          <div className="booking-heading">
            <h1 className="booking-heading-text">
              Your Wellness Journey Starts Here
            </h1>
          </div>
          <div className="booking-image">
            <div className="booking-image-content">
              <div className="booking-image-content-text">
                Scheduling your relaxation session has never been easier. Choose
                your preferred date, time, and service, and let us handle the
                rest.
              </div>
            </div>
            <div className="booking-image-div">
              <Image
                src="/images/booking.png"
                alt="spa image"
                className="booking-form-image hidden md:block"
                height={500}
                width={290}
              />
            </div>
          </div>
        </div>

        <div className="booking-details">
          <form ref={formRef} className="booking-form" onSubmit={handleSubmit}>
            <div className="form-input-block">
              <label htmlFor="name" className="form-label-title">
                Name <span className="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>

            <div className="form-input-block-line">
              <div className="form-input-block">
                <label htmlFor="email" className="form-label-title">
                  Email <span className="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="form-input-short"
                />
              </div>
              <div className="form-input-block">
                <label htmlFor="phone" className="form-label-title">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  inputMode="numeric"
                  type="tel"
                  maxLength={10}
                  placeholder="9999999999"
                  required
                  className="form-input-short"
                />
              </div>
            </div>

            <div className="form-input-block-line">
              <div className="form-input-block">
                <label htmlFor="date" className="form-label-title">
                  Date <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]} // ⬅️ Disable past dates
                  className="form-input-short"
                />
              </div>
              <div className="form-input-block">
                <label htmlFor="time" className="form-label-title">
                  Time <span className="required">*</span>
                </label>
                <select
                  id="time"
                  name="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="form-input-short"
                >
                  <option value="">Select Time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-input-block">
              <label htmlFor="service" className="form-label-title">
                Our Services <span className="required">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
                className="form-input"
              >
                <option value="">Select Services</option>
                {treatments.map((treatment) => (
                  <option key={treatment} value={treatment}>
                    {treatment}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-input-block">
              <label htmlFor="message" className="form-label-title">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="message-input"
              />
            </div>

            <button className="form-button">Book Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
