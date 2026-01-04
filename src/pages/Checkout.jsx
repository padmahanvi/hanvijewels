import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();

  // Tab selection (radio style)
  const [step, setStep] = useState("checkout");

  // Billing form state (simple)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    email: "",
    street: "",
    state: "",
    zip: "",
    delivery: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  // Dummy summary (your cart totals can be connected later)
  const summary = useMemo(() => {
    const items = 0;
    const subtotal = 0;
    const shipping = 0;
    const taxes = 0;
    const total = subtotal + shipping + taxes;
    return { items, subtotal, shipping, taxes, total };
  }, []);

  const goToStep = (value) => {
    setStep(value);
    if (value === "cart") navigate("/cart");
    if (value === "payment") navigate("/payment"); // create later if needed
  };

  return (
    <div className="checkout-page">
      <div className="checkout-wrap">
        {/* Top radio tabs */}
        <div className="checkout-tabs">
          <label className="radio-tab">
            <input
              type="radio"
              name="step"
              checked={step === "cart"}
              onChange={() => goToStep("cart")}
            />
            <span>Product card</span>
          </label>

          <label className="radio-tab">
            <input
              type="radio"
              name="step"
              checked={step === "checkout"}
              onChange={() => goToStep("checkout")}
            />
            <span>Check out page</span>
          </label>

          <label className="radio-tab">
            <input
              type="radio"
              name="step"
              checked={step === "payment"}
              onChange={() => goToStep("payment")}
            />
            <span>Payment page</span>
          </label>
        </div>

        {/* Billing details */}
        <div className="billing-card">
          <h2 className="billing-title">Billing Details</h2>

          <div className="billing-grid">
            {/* Row 1 */}
            <div className="field">
              <label>First Name*</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder="Ex: John"
              />
            </div>

            <div className="field">
              <label>Last Name*</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder="Ex: Doe"
              />
            </div>

            <div className="field wide">
              <label>Country*</label>
              <select name="country" value={form.country} onChange={onChange}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Singapore">Singapore</option>
              </select>
            </div>

            {/* Row 2 */}
            <div className="field">
              <label>Phone*</label>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="field">
              <label>E-Mail*</label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Enter E-Mail id"
              />
            </div>

            <div className="field wide">
              <label>Street Address*</label>
              <input
                name="street"
                value={form.street}
                onChange={onChange}
                placeholder="Enter Street Address"
              />
            </div>

            {/* Row 3 */}
            <div className="field">
              <label>State*</label>
              <select name="state" value={form.state} onChange={onChange}>
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

            <div className="field">
              <label>Zip Code*</label>
              <input
                name="zip"
                value={form.zip}
                onChange={onChange}
                placeholder="Enter Zipcode"
              />
            </div>

            <div className="field wide">
              <label>Delivery Address*</label>
              <input
                name="delivery"
                value={form.delivery}
                onChange={onChange}
                placeholder="Enter Delivery Address"
              />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="summary-block">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-line" />

          <div className="summary-rows">
            <div className="sum-row">
              <span>Items</span>
              <span>4</span>
            </div>
            <div className="sum-row">
              <span>Subtotal</span>
              <span>₹ 5597</span>
            </div>
            <div className="sum-row">
              <span>Shipping</span>
              <span>₹ 0</span>
            </div>
            <div className="sum-row">
              <span>Taxes</span>
              <span>₹ 672</span>
            </div>
          </div>

          <div className="summary-line" />

          <div className="sum-total">
            <span>Total</span>
            <span>₹ 6269</span>
          </div>

          <div className="summary-actions">
            <button
              className="pay-btn"
              type="button"
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
