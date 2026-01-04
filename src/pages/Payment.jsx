import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

export default function Payment() {
  const navigate = useNavigate();

  const [showDetails, setShowDetails] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [name, setName] = useState("");
  const [upi, setUpi] = useState("");

  const submitPayment = () => {
    setShowDetails(true);
  };

  const confirmPayment = () => {
    if (!name || !upi) {
      alert("Please enter all details!");
      return;
    }

    setShowDetails(false);
    setShowSuccess(true);

    setTimeout(() => {
      navigate("/Orderconfirmation");
    }, 2000);
  };

  return (
    <>
      {/* STEPS BAR */}
      <div className="container mt-4 mb-3">
        <div className="d-flex justify-content-center">
          <div className="fc-steps d-flex gap-5">
            <div className="fc-step">
              <span className="fc-step-dot"></span>Cards
            </div>
            <div className="fc-step">
              <span className="fc-step-dot"></span>Checkout Page
            </div>
            <div className="fc-step">
              <span className="fc-step-dot"></span>Payment Page
            </div>
          </div>
        </div>
      </div>

      {/* TITLE */}
      <div className="text-center mt-4">
        <h2 className="fw-bold payment-title">Payment Page</h2>
        <p className="mt-2 fs-5 fw-semibold">Select payment</p>
      </div>

      {/* MAIN AREA */}
      <div className="container mt-3 mb-5">
        <div className="row g-4 justify-content-center">

          {/* ORDER SUMMARY */}
          <div className="col-lg-4 col-md-6">
            <div className="fc-summary-card p-3">
              <h5 className="fw-bold mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between"><span>Items</span><span>4</span></div>
              <div className="d-flex justify-content-between"><span>Subtotal</span><span>Rs.5597</span></div>
              <div className="d-flex justify-content-between"><span>Shipping</span><span>Rs.00</span></div>
              <div className="d-flex justify-content-between"><span>Taxes</span><span>Rs.672</span></div>
              <div className="d-flex justify-content-between mb-3"><span>Coupon Discount</span><span>Rs.0</span></div>

              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span><span>Rs.6269</span>
              </div>
            </div>
          </div>

          {/* PAYMENT BOX */}
          <div className="col-lg-6 col-md-8">
            <div className="fc-payment-box">

              {/* PAYMENT DETAILS POPUP */}
              {showDetails && (
                <div className="fc-overlay">
                  <button className="fc-close" onClick={() => setShowDetails(false)}>&times;</button>

                  <h3 className="fw-bold mb-3">Payment Details</h3>

                  <label className="form-label">Enter Name :</label>
                  <input
                    className="form-control mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                  />

                  <label className="form-label">Enter UPI ID :</label>
                  <input
                    className="form-control mb-4"
                    value={upi}
                    onChange={(e) => setUpi(e.target.value)}
                    placeholder="example@upi"
                  />

                  <button className="btn fc-submit-btn w-100" onClick={confirmPayment}>
                    Confirm payment
                  </button>
                </div>
              )}

              {/* SUCCESS POPUP */}
              {showSuccess && (
                <div className="fc-overlay fc-success">
                  <button className="fc-close" onClick={() => navigate("/Orderconfirmation")}>&times;</button>

                  <div className="success-wrapper">
                    <div className="success-circle">
                      <span className="success-check">✓</span>
                    </div>
                    <p className="success-text fw-bold">payment done successfully</p>
                    <div className="success-image-wrap">
                      <img
                        src="/fashionimages/categoriesimages/category11.jpg"
                        alt="Success"
                        className="success-image"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* DEFAULT PAYMENT */}
              <h5 className="fw-bold mb-4">Select Payment</h5>

              <div className="fc-pay-option">
                <input type="radio" checked readOnly />
                <span className="fc-pay-icon">UPI</span>
                <label>UPI</label>
              </div>

              <div className="fc-pay-option">
                <input type="radio" readOnly />
                <span className="fc-pay-icon">G</span>
                <label>Google Pay</label>
              </div>

              <div className="fc-pay-option">
                <input type="radio" readOnly />
                <span className="fc-pay-icon">P</span>
                <label>Phone Pay</label>
              </div>

              <button className="btn fc-submit-btn mt-3" onClick={submitPayment}>
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
