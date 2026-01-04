import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

export default function Wishlist() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Leather Watch",
      price: 850,
      date: "02 Jan 2026",
      status: "InStock",
      img: "fashionimages/categoriesimages/category12.jpg",
    },
    {
      id: 2,
      name: "Designer Pant-Shirt",
      price: 1350,
      date: "01 Jan 2026",
      status: "InStock",
      img: "fashionimages/categoriesimages/category3.jpg",
    },
    {
      id: 3,
      name: "Classic Half-Saree",
      price: 1500,
      date: "01 Jan 2026",
      status: "InStock",
      img: "/fashionimages/categoriesimages/category4.jpg",
    },
    {
      id: 4,
      name: "Gold Plated Bangles",
      price: 899,
      date: "01 Jan 2026",
      status: "InStock",
      img: "fashionimages/categoriesimages/category7.jpg",
    },
  ]);

  const shareLink = useMemo(() => {
    return `${window.location.origin}/wishlist`;
  }, []);

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareLink);
    alert("Link copied!");
  };

  const clearWishlist = () => setRows([]);

  const handleAddToCart = () => {
    // later you can add real cart logic here
    navigate("/cart");
  };

  return (
    <div className="wish-page">
      <div className="wish-card">
        <h4 className="wish-title">Wishlist Section</h4>

        <div className="wish-table">
          {/* Header */}
          <div className="wish-head">
            <div className="wh wh-product">Product</div>
            <div className="wh">Price</div>
            <div className="wh">Date Added</div>
            <div className="wh">Stock Status</div>
            <div className="wh wh-action"></div>
          </div>

          {/* Rows */}
          {rows.map((r, idx) => (
            <div
              key={r.id}
              className={`wish-row ${idx % 2 === 1 ? "alt" : ""}`}
            >
              <div className="wc wc-product">
                <img className="wish-img" src={r.img} alt={r.name} />
                <div className="wish-name">{r.name}</div>
              </div>

              <div className="wc">₹ {r.price}</div>
              <div className="wc">{r.date}</div>

              <div className="wc">
                <span className="stock">{r.status}</span>
              </div>

              <div className="wc wc-action">
                <button
                  className="add-btn"
                  type="button"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          {rows.length === 0 && (
            <div className="wish-empty">Your wishlist is empty.</div>
          )}
        </div>

        {/* Bottom */}
        <div className="wish-bottom">
          <input className="wish-link" value={shareLink} readOnly />

          <button className="copy-btn" type="button" onClick={copyLink}>
            Copy link
          </button>

          <button className="clear-btn" type="button" onClick={clearWishlist}>
            clear Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
