import React, { useState } from "react";
import "./Home.css";

const FAQS = [
  {
    q: "Q1. How do I place an order on Hanvi Fashion?",
    a: `Choose your product, select the size/color, and click “Add to Cart”.
Then go to Checkout, enter your delivery details, and complete the payment.
You will receive an order confirmation after checkout.`,
  },
  {
    q: "Q2. What sizes are available, and how do I choose the right size?",
    a: `Sizes vary by product. Please check the size chart on the product page.
If you are between sizes, we recommend choosing the larger size for comfort.`,
  },
  {
    q: "Q3. How long does delivery take?",
    a: `Orders are usually processed within 24–48 hours.
Delivery time depends on your location, typically 2–7 working days.`,
  },
  {
    q: "Q4. What is Hanvi Fashion’s return and exchange policy?",
    a: `Yes, returns/exchanges are accepted for eligible items within the return window.
Items must be unused, unwashed, and in original packaging with tags intact.
Please contact support with your order number to start the process.`,
  },
  {
    q: "Q5. What payment methods do you accept?",
    a: `We accept major debit/credit cards, online banking (where available), and selected digital wallets.
Available options will be shown at checkout.`,
  },
  {
    q: "Q6. How can I track my order?",
    a: `Once your order is shipped, we will share a tracking link via SMS/email.
You can also track it from your account under “My Orders”.`,
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0); // Q1 open by default

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <>
      {/* HERO CAROUSEL */}
      <div className="home">
        <div
          id="heroCarousel"
          className="carousel slide hero-carousel"
          data-bs-ride="carousel"
          data-bs-interval="3500"
          data-bs-pause="false"
        >
          {/* Indicators */}
          <div className="carousel-indicators hero-dots">
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="hero-banner">
                <div className="hero-left">
                  <p className="hero-tag">3D Sparkle</p>
                  <h1 className="head-title">
                    Modern designs <br />
                    crafted with <br />
                    perfect precision
                  </h1>

                  <button className="hero-btn" type="button">
                    DISCOVER NOW <span className="hero-arrow">→</span>
                  </button>
                </div>

                <div className="hero-right">
                  <img
                    src="/fashionimages/homeimages/home1.jpg"
                    alt="Banner 1"
                    className="hero-img"
                  />
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="hero-banner">
                <div className="hero-left">
                  <p className="hero-tag">New Arrivals</p>
                  <h1 className="head-title">
                    Elegant styles <br />
                    made for <br />
                    every moment
                  </h1>

                  <button className="hero-btn" type="button">
                    SHOP COLLECTION <span className="hero-arrow">→</span>
                  </button>
                </div>

                <div className="hero-right">
                  <img
                    src="/fashionimages/homeimages/home2.jpg"
                    alt="Banner 2"
                    className="hero-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* TRENDING PRODUCTS */}
      <section className="container popular-section">
        <h2 className="popular-title fw-bold text-center">Trending Products</h2>

        <div className="row justify-content-center g-4">
          <div className="col-6 col-md-3">
            <div className="category-card">
              <div className="category-img-wrap">
                <img src="fashionimages\homeimages\home3.jpg" alt="Gift Combo" />
              </div>
              <div className="category-name">Grand Frock</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="category-card">
              <div className="category-img-wrap">
                <img
                  src="/fashionimages/homeimages/home4.jpg"
                  alt="Watches"
                />
              </div>
              <div className="category-name">Watches</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="category-card">
              <div className="category-img-wrap">
                <img
                  src="fashionimages\homeimages\home5.jpg"
                  alt="Dairy & Breakfast"
                />
              </div>
              <div className="category-name">Choker Necksets</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="category-card">
              <div className="category-img-wrap">
                <img
                  src="/fashionimages/homeimages/home6.jpg"
                  alt="Electronics & Accessories"
                />
              </div>
              <div className="category-name">Bangles</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS TITLE */}
      <div className="container text-center my-4 mt-4">
        <h2 className="Happy-title fw-bold">Our Happy Customer</h2>
      </div>

      {/* TESTIMONIALS */}
      <div className="container py-5 mt-4">
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="testimonial-card">
              <img src="fashionimages\homeimages\home7.jpg" alt="Liya" />
              <h5 className="mt-4">Liya</h5>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                Very fast service and products are genuine..Definitely I am
                satisfied!
              </p>
              <div className="d-flex justify-content-center gap-3">
                <span>
                  <i className="bi bi-hand-thumbs-down"></i> 0
                </span>
                <span>
                  <i className="bi bi-hand-thumbs-up"></i> 5
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="testimonial-card">
              <img src="/fashionimages/homeimages/home8.jpg" alt="Moni" />
              <h5 className="mt-4">Moni</h5>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                Amazing products. Reasonable prices. Great customer service.
                Cheers!
              </p>
              <div className="d-flex justify-content-center gap-3">
                <span>
                  <i className="bi bi-hand-thumbs-down"></i> 0
                </span>
                <span>
                  <i className="bi bi-hand-thumbs-up"></i> 5
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="testimonial-card">
              <img src="/fashionimages/homeimages/home9.jpg" alt="Deepa" />
              <h5 className="mt-4">Deepa</h5>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                Great range of products right from marriage essentials. Excellent
                product quality.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <span>
                  <i className="bi bi-hand-thumbs-down"></i> 0
                </span>
                <span>
                  <i className="bi bi-hand-thumbs-up"></i> 5
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="testimonial-card">
              <img src="/fashionimages/homeimages/home10.jpg" alt="Chanu" />
              <h5 className="mt-4">Chanu</h5>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                Great site for women's products. The quality of products and
                services never changes.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <span>
                  <i className="bi bi-hand-thumbs-down"></i> 0
                </span>
                <span>
                  <i className="bi bi-hand-thumbs-up"></i> 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="home-page">
        <div className="faq-wrap">
          <h2 className="faq-title">FAQ</h2>

          {FAQS.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <div
                  className="faq-head"
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => e.key === "Enter" && toggle(idx)}
                >
                  <div>{item.q}</div>

                  <button
                    className="icon-btn"
                    type="button"
                    aria-label="toggle"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(idx);
                    }}
                  >
                    <span className="chev"></span>
                  </button>
                </div>

                <div className="faq-body" style={{ whiteSpace: "pre-line" }}>
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
