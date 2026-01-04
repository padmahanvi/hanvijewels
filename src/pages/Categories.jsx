import React, { useState } from "react";
import "./Categories.css";

/* ✅ IMPORT IMAGES (Vite bundles them safely) */
import c1 from "/fashionimages/categoriesimages/category1.jpg";
import c2 from "/fashionimages/categoriesimages/category2.jpg";
import c3 from "/fashionimages/categoriesimages/category3.jpg";
import c4 from "/fashionimages/categoriesimages/category4.jpg";
import c5 from "/fashionimages/categoriesimages/category5.jpg";
import c6 from "/fashionimages/categoriesimages/category6.jpg";
import c7 from "/fashionimages/categoriesimages/category7.jpg";
import c8 from "/fashionimages/categoriesimages/category8.jpg";
import c9 from "/fashionimages/categoriesimages/category9.jpg";
import c10 from "/fashionimages/categoriesimages/category10.jpg";
import c11 from "/fashionimages/categoriesimages/category11.jpg";
import c12 from "/fashionimages/categoriesimages/category12.jpg";

import shop1 from "/fashionimages/shopimages/shop1.jpg";
import shop3 from "/fashionimages/shopimages/shop3.jpg";
import home4 from "/fashionimages/homeimages/home4.jpg";
import home5 from "/fashionimages/homeimages/home5.jpg";

const rowsData = [
  {
    heading: "Our Dress Collection",
    items: [
      { id: "c1", title: "Designer Long Gown", img: c1, price: 2000, oldPrice: 2400, rating: 5, reviews: 65 },
      { id: "c2", title: "Elegant Evening Gown", img: c2, price: 1960, oldPrice: 2160, rating: 5, reviews: 65 },
      { id: "c3", title: "Designer Pant-Shirt", img: c3, price: 1350, oldPrice: 1600, rating: 5, reviews: 72 },
      { id: "c4", title: "Classic Half-Saree", img: c4, price: 1500, oldPrice: 1950, rating: 4, reviews: 51 },
    ],
  },
  {
    heading: "Trending Jewellery",
    items: [
      { id: "t1", title: "American Diamond Earrings", img: c5, price: 799, oldPrice: 999, rating: 4, reviews: 34 },
      { id: "t2", title: "Kundan Stone Set", img: c6, price: 1399, oldPrice: 1699, rating: 5, reviews: 58 },
      { id: "t3", title: "Gold Plated Bangles", img: c7, price: 899, oldPrice: 1099, rating: 4, reviews: 41 },
      { id: "t4", title: "Hip Belt", img: c8, price: 650, oldPrice: 850, rating: 4, reviews: 29 },
    ],
  },
  {
    heading: "New Arrivals Watches",
    items: [
      { id: "n1", title: "Premium White Watch", img: c9, price: 1190, oldPrice: 1790, rating: 5, reviews: 88 },
      { id: "n2", title: "Blue Steel Watch", img: c10, price: 990, oldPrice: 1290, rating: 4, reviews: 60 },
      { id: "n3", title: "Gold Plated Watch", img: c11, price: 1190, oldPrice: 1490, rating: 4, reviews: 47 },
      { id: "n4", title: "Leather Watch", img: c12, price: 850, oldPrice: 999, rating: 4, reviews: 33 },
    ],
  },
  {
    heading: "Limited Offers",
    items: [
      { id: "p20", title: "Purple Grand Frock", img: shop1, price: 1799, oldPrice: 2999, rating: 5, reviews: 45 },
      { id: "l2", title: "Stylish Handbag", img: shop3, price: 499, oldPrice: 1299, rating: 4, reviews: 37 },
      { id: "p19", title: "Chocker Necksets", img: home5, price: 999, oldPrice: 1499, rating: 4, reviews: 28 },
      { id: "p2", title: "Gold Strap Watch", img: home4, price: 960, oldPrice: 1160, rating: 5, reviews: 65 },
    ],
  },
];

function renderStars(rating) {
  const full = Math.floor(rating);
  return "★★★★★☆☆☆☆☆".slice(5 - full, 10 - full);
}

export default function Categories() {
  const [wishlist, setWishlist] = useState(new Set());

  const toggleWish = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="container py-5">
      {rowsData.map((row) => (
        <div key={row.heading} className="category-block">
          <div className="text-center mb-4">
            <h2 className="hero-title">{row.heading}</h2>
          </div>

          <div className="row g-4">
            {row.items.map((p) => (
              <div key={p.id} className="col-12 col-sm-6 col-lg-3">
                <div className="product-card h-100">
                  <button
                    className={`wishlist-btn ${wishlist.has(p.id) ? "active" : ""}`}
                    onClick={() => toggleWish(p.id)}
                    type="button"
                  >
                    <i className="bi bi-heart-fill"></i>
                  </button>

                  <img src={p.img} alt={p.title} className="w-100" />

                  <div className="p-3 text-center">
                    <h6 className="fw-bold mb-2">{p.title}</h6>
                    <div className="mb-2">
                      <span className="price-new">₹{p.price}</span>{" "}
                      <span className="price-old">₹{p.oldPrice}</span>
                    </div>
                    <div className="rating-stars">
                      {renderStars(p.rating)}{" "}
                      <span className="text-muted">({p.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-12 col-lg-3 d-flex justify-content-end">
              <button className="viewmore-btn">View More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
