import React from "react";

import { useState, useEffect, createPortal } from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Portal = ({ children }) => {
  return createPortal(children, document.getElementById("portal-root"));
};

const FormPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const portalRoot = document.getElementById("portal-root");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const hasShownPopup = localStorage.getItem("hasShownPopup");
      if (!hasShownPopup) {
        setShowPopup(true);
        localStorage.setItem("hasShownPopup", true);
      }
    }, 2000); // 5 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("hasShownPopup", true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
    handleClose();
  };

  return showPopup
    ? createPortal(
        <div className="popup-container">
          <div className="popup-content">
            <div className="close-icon" onClick={handleClose}>
              <i className="fas fa-times" aria-hidden="true"></i>
            </div>
            <h2 className="text-center">Book Your Room</h2>
            <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn my-4 btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>,
        portalRoot
      )
    : null;
};

export default FormPopup;
