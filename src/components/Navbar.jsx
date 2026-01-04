import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthModal from "../pages/AuthModal";
import logo from "/fashionimages/logo.jpg";

export default function Navbar() {
  const cartCount = 0;

  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Load user (kept internally, not shown)
  useEffect(() => {
    const stored = localStorage.getItem("hanvi_user");
    setUser(stored ? JSON.parse(stored) : null);
  }, []);

  // Open login/register popup
  const handleProfileClick = () => {
    setShowAuth(true);
  };

  // Called after successful login/register
  const handleAuthSuccess = (loggedUser) => {
    setUser(loggedUser);        // stored silently
    setShowAuth(false);         // close popup
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-luxe">
        <div className="container-fluid px-3">
          {/* LOGO */}
          <NavLink to="/" className="navbar-brand logo-link">
            <img src={logo} alt="Hanvi Collections Logo" className="navbar-logo" />
          </NavLink>

          {/* TOGGLER */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNavbar"
          >
            <ul className="navbar-nav align-items-center ms-lg-4">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/categories" className="nav-link">Categories</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/shop" className="nav-link">Shop</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>
              </li>

              {/* PROFILE ICON (always same) */}
              <li className="nav-item ms-2">
                <button
                  className="nav-link btn border-0 bg-transparent p-0"
                  type="button"
                  aria-label="Login / Register"
                  onClick={handleProfileClick}
                >
                  <i className="bi bi-person"></i>
                </button>
              </li>

              {/* WISHLIST */}
              <li className="nav-item ms-2">
                <NavLink
                  to="/wishlist"
                  className="btn btn-outline-white luxe-icon-btn"
                  aria-label="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </NavLink>
              </li>

              {/* CART */}
              <li className="nav-item ms-2">
                <NavLink
                  to="/cart"
                  className="btn btn-outline-white position-relative luxe-icon-btn"
                  aria-label="Cart"
                >
                  <i className="bi bi-cart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* LOGIN / REGISTER POPUP (same page) */}
      <AuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
}
