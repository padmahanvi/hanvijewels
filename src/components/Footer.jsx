import React from "react";
import "./Footer.css";
import logo from "/fashionimages/logo.jpg";

import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LOGO */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Company Logo"
            className="footer-logo"
          />
        </div>

        {/* Home */}
        <div className="footer-column">
          <h3>Home</h3>
          <ul>
            <li>Shop now</li>
            <li>Categories</li>
            <li>Contact</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Customer service</li>
            <li>My account</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-column support">
          <h3>Customer Support :</h3>
          <p>support@hanvicollections.in</p>
          <p>1800-202-2020</p>
          <p>Ecom Fashion designs Pvt. Ltd.</p>
          <p>#45, T-Nagar, Chennai-17, India</p>
        </div>

        {/* Follow Us */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" className="social" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        © 2026 Hanvi Collections. All rights reserved.
      </div>
    </footer>
  );
}
