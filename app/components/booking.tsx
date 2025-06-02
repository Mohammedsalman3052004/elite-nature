"use client";

import React, { useState, useRef } from "react";
import "../css/booking.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const url =
      "https://script.google.com/macros/s/AKfycbwrsGSkZJ_pNtkmwUAwmWUjEsMWC7eXrAOB26FJxE4FcsnCXqR-7KEWK3YqP8RbeEa5dg/exec";

    const payload = `Name=${encodeURIComponent(
      formData.get("name") as string
    )}&Email=${encodeURIComponent(
      formData.get("email") as string
    )}&Phone=${encodeURIComponent(
      formData.get("phone") as string
    )}&Date=${encodeURIComponent(
      formData.get("date") as string
    )}&Time=${encodeURIComponent(
      formData.get("time") as string
    )}&Service=${encodeURIComponent(
      formData.get("service") as string
    )}&Message=${encodeURIComponent(formData.get("message") as string)}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
      });

      const result = await response.text();
      console.log("Form submitted to Google Sheets:", result);

      await emailjs.sendForm(
        "service_zq1kl0p",
        "template_lj309e9",
        form,
        "JdDzBJUiRUIXLukdG"
      );

      console.log("Email sent successfully!");

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      formRef.current?.reset();
      setSelectedDate("");
      setSelectedTime("");
      setSelectedService("");
    } catch (error) {
      console.error("Submission or Email error:", error);
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = [
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
    "8:30 PM",
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
    <div className="main" id="booking">
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
              Your Wellness Journey Starts Here in <br className="hidden md:block" />
              Vellore
            </h1>
          </div>
          <div className="booking-image">
            <div className="booking-image-content">
              <div className="booking-image-content-text">
                Schedule your massage therapy session with Sprin Days Spa - the
                best spa in Vellore offering ayurvedic, steam, and full body
                massage for women and men.
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

            <button className="form-button" type="submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
