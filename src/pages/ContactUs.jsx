import React, { useState } from "react";
import "./ContactUs.css";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const isEmailValid = (email) => /^\S+@\S+\.\S+$/.test(email);
  const isMinLen = (text, n) => (text || "").trim().length >= n;

  const errors = {
    firstName: !isMinLen(form.firstName, 1),
    lastName: !isMinLen(form.lastName, 1),
    email: !isEmailValid(form.email),
    message: !isMinLen(form.message, 10),
  };

  const isFormValid =
    !errors.firstName && !errors.lastName && !errors.email && !errors.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      message: true,
    });

    if (!isFormValid) return;

    // You can send data to backend here (fetch/axios)
    setShowSuccess(true);

    // Optional: clear form
    setForm({ firstName: "", lastName: "", email: "", message: "" });

    // Optional: auto hide success
    setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>
            <span>Elegant dresses and jewelleries</span>
            <span>Cherishing Designs!</span>
          </h1>
          <p className="lead">
            We're here to help you find your perfect outlook. Get in touch with
            our team of style experts.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-wrapper">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-subtitle">
              Send us message We'd love to hear from you. Send us a <br />
              message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="row g-4">
            {/* Visit Us */}
            <div className="col-md-4">
              <div className="info-card d-flex align-items-start">
                <div className="info-icon me-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <div className="info-title">Visit Our Store</div>
                  <div className="info-text">
                    123 Fashion Avenue
                    <br />
                    Chennai, NY 10001
                    <br />
                   India
                  </div>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="col-md-4">
              <div className="info-card d-flex align-items-start">
                <div className="info-icon me-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <div className="info-title">Email Us</div>
                  <div className="info-text">
                    hello@hanvicollections.in
                    <br />
                    support@hanvicollections.in
                  </div>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="col-md-4">
              <div className="info-card d-flex align-items-start">
                <div className="info-icon me-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <div className="info-title">Call Us</div>
                  <div className="info-text">
                    +91 9352678425
                    <br />
                    +8652489355
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      touched.firstName && errors.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your first name.
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      touched.lastName && errors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your last name.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className={`form-control ${
                      touched.message && errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    minLength={10}
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter at least 10 characters.
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <button type="submit" className="btn btn-luxe">
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            {/* Success alert */}
            {showSuccess && (
              <div className="alert alert-success mt-3" role="alert">
                Thank you! Your message has been sent.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
