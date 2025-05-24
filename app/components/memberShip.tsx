import React from "react";
import "../css/member-ship.css";
import Image from "next/image";

const MemberShip = () => {
  return (
    <div className="main">
      <div className="membership">
        <div className="membership-heading">
          <p>Choose your package</p>
          <h3>Spring Day Spa Packages</h3>
        </div>
        <div className="membership-content">
          <div className="membership-card">
            <div className="membership-card-heading">
              <h3 className="membership-card-heading-text">Royal Club</h3>
              <p className="membership-card-heading-subtext">
                "Let Your Stress Melt Away."
              </p>
              <Image
                src="../assets/card-logo.svg"
                alt="royal-club"
                height={50}
                width={300}
              />
              <h1 className="membership-card-heading-price">₹10,000</h1>
              <p className="membership-card-heading-time">( 7 Hours )</p>
            </div>
            <div className="membership-card-content">
              <div className="membership-card-content-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M8.7056 21.1577L0.5 12.7658L4.23943 8.9415L8.7056 13.5226L21.7606 0.157715L25.5 3.98204L8.7056 21.1577Z"
                    fill="#0B3E0D"
                  />
                </svg>
                <p className="membership-card-content-text-para">
                  One sitting should not be less than 1 hour.
                </p>
              </div>
              <div className="membership-card-content-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M8.7056 21.1577L0.5 12.7658L4.23943 8.9415L8.7056 13.5226L21.7606 0.157715L25.5 3.98204L8.7056 21.1577Z"
                    fill="#0B3E0D"
                  />
                </svg>
                <p className="membership-card-content-text-para">
                  Avail Packages in weekday and weekend also.
                </p>
              </div>
              <div className="membership-card-content-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M15.9895 12.6578L22.4004 6.24693C23.0593 5.58796 23.0593 4.51958 22.4004 3.86061L21.2972 2.75741C20.6382 2.09844 19.5698 2.09844 18.9109 2.75741L12.5 9.16827L6.08913 2.75741C5.43017 2.09844 4.36179 2.09844 3.70282 2.75741L2.59962 3.86061C1.94065 4.51958 1.94065 5.58796 2.59962 6.24693L9.01048 12.6578L2.59962 19.0686C1.94065 19.7276 1.94065 20.796 2.59962 21.455L3.70282 22.5582C4.36179 23.2171 5.43017 23.2171 6.08913 22.5582L12.5 16.1473L18.9109 22.5582C19.5698 23.2171 20.6382 23.2171 21.2972 22.5582L22.4004 21.455C23.0593 20.796 23.0593 19.7276 22.4004 19.0686L15.9895 12.6578Z"
                    fill="#FF0C00"
                  />
                </svg>
                <p className="membership-card-content-text-para">
                  Includes steam.
                </p>
              </div>
              <div className="membership-card-content-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M8.7056 21.1577L0.5 12.7658L4.23943 8.9415L8.7056 13.5226L21.7606 0.157715L25.5 3.98204L8.7056 21.1577Z"
                    fill="#0B3E0D"
                  />
                </svg>
                <p className="membership-card-content-text-para">
                  3 Months Validity (Single Person)
                </p>
              </div>

              <div className="membership-card-content-button">
                <div className="membership-card-content-btn">Book Now</div>
              </div>
            </div>
          </div>

          <div className="membership-card">
            <div className="membership-card-heading">
              <h3 className="membership-card-heading-text">Elite Club</h3>
              <p className="membership-card-heading-subtext">
                "Spa-lendid Moments Await."
              </p>
              <Image
                src="../assets/card-logo.svg"
                alt="royal-club"
                height={50}
                width={300}
              />
              <h1 className="membership-card-heading-price">₹20,000</h1>
              <p className="membership-card-heading-time">( 15 Hours )</p>
            </div>
            <div className="membership-card-content">
              <div className="membership-card-content-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M8.7056 21.1577L0.5 12.7658L4.23943 8.9415L8.7056 13.5226L21.7606 0.157715L25.5 3.98204L8.7056 21.1577Z"
                    fill="#0B3E0D"
                  />
                </svg>
                <p className="membership-card-content-text-para">
                  One sitting should not be less than 1 hour.
                </p>
              </div>
              <div className="membership-card-content-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M8.7056 21.1577L0.5 12.7658L4.23943 8.9415L8.7056 13.5226L21.7606 0.157715L25.5 3.98204L8.7056 21.1577Z"
                    fill="#0B3E0D"
                  />
                </svg>
                <p className="membership-card-content-text-para">
                  Avail Packages in weekday and weekend also.
                </p>
              </div>
              <div className="membership-card-content-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M8.7056 21.1577L0.5 12.7658L4.23943 8.9415L8.7056 13.5226L21.7606 0.157715L25.5 3.98204L8.7056 21.1577Z"
                    fill="#0B3E0D"
                  />
                </svg>
                <p className="membership-card-content-text-para">
                  Includes steam.
                </p>
              </div>
              <div className="membership-card-content-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M8.7056 21.1577L0.5 12.7658L4.23943 8.9415L8.7056 13.5226L21.7606 0.157715L25.5 3.98204L8.7056 21.1577Z"
                    fill="#0B3E0D"
                  />
                </svg>
                <p className="membership-card-content-text-para">
                  3 Months Validity (Single Person)
                </p>
              </div>

              <div className="membership-card-content-button">
                <div className="membership-card-content-btn">Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
