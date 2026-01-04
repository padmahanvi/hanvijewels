import React from "react";
import "./Orderconfirmation.css";

/* ✅ Vite image imports (deployment safe) */
import category7 from "/fashionimages/categoriesimages/category7.jpg";
import shop1 from "/fashionimages/shopimages/shop1.jpg";
import category6 from "/fashionimages/categoriesimages/category6.jpg";
import category4 from "/fashionimages/categoriesimages/category4.jpg";

export default function Orderconfirmation() {
  // Dummy data (you can replace with real order data later)
  const order = {
    orderId: "#SJKD456FH",
    paymentMethod: "UPI",
    transactionId: "TF59DHJK",
    deliveryDate: "28 June 2025",
    products: [
      {
        id: 1,
        name: "Gold Plated Bangles",
        price: 899,
        img: category7,
      },
      {
        id: 2,
        name: "Purple Grand Frock",
        price: 1799,
        img: shop1,
      },
      {
        id: 3,
        name: "Kundan Stone Set",
        price: 1399,
        img: category6,
      },
      {
        id: 4,
        name: "Classic Half-Saree",
        price: 1500,
        img: category4,
      },
    ],
    shipping: 0,
    taxes: 672,
    couponDiscount: 0,
    total: 6269,
  };

  const downloadInvoice = () => {
    // Placeholder: later you can generate PDF
    alert("Invoice download feature will be added soon!");
  };

  return (
    <div className="container my-4 mb-5">
      {/* Title */}
      <div className="mb-3">
        <div className="page-title">Order Completed</div>
        <div className="page-subtitle fs-6">
          Thank you. Your order has been received
        </div>
      </div>

      {/* SUMMARY TOP BAR */}
      <div className="gradient-bar p-3 mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-6 col-md-3">
            <div className="label">Order ID</div>
            <div className="value">{order.orderId}</div>
          </div>

          <div className="col-6 col-md-2">
            <div className="label">Payment Method</div>
            <div className="value">{order.paymentMethod}</div>
          </div>

          <div className="col-6 col-md-3">
            <div className="label">Transaction Id</div>
            <div className="value">{order.transactionId}</div>
          </div>

          <div className="col-6 col-md-2">
            <div className="label">Estimate Delivery Date</div>
            <div className="value">{order.deliveryDate}</div>
          </div>

          <div className="col-12 col-md-2 text-md-end">
            <button
              onClick={downloadInvoice}
              className="btn btn-sm btn-light fw-semibold"
              type="button"
            >
              Download Invoice
            </button>
          </div>
        </div>
      </div>

      {/* ORDER DETAILS */}
      <div className="mb-2 fw-semibold fs-5">Order Details</div>
      <div className="section-title">Products</div>

      {/* Products */}
      {order.products.map((p) => (
        <div className="product-row" key={p.id}>
          <div className="product-image-wrapper">
            <img src={p.img} alt={p.name} />
          </div>
          <div className="product-name">{p.name}</div>
          <div className="product-price">Rs.{p.price}</div>
        </div>
      ))}

      {/* Summary rows */}
      <div className="summary-row">
        <span>Shipping</span>
        <span>Rs.{Number(order.shipping).toFixed(1)}</span>
      </div>

      <div className="summary-row">
        <span>Taxes</span>
        <span>Rs.{Number(order.taxes).toFixed(1)}</span>
      </div>

      <div className="summary-row">
        <span>Coupon Discount</span>
        <span>Rs.{order.couponDiscount}</span>
      </div>

      <div className="summary-row total-row">
        <span>Total</span>
        <span>Rs.{order.total}</span>
      </div>
    </div>
  );
}
