import React, { useState } from "react";
import "./Shop.css";

/* ✅ Import all images (Vite bundles these correctly for deployment) */
import home3 from "/fashionimages/homeimages/home3.jpg";
import home4 from "/fashionimages/homeimages/home4.jpg";
import home5 from "/fashionimages/homeimages/home5.jpg";
import home6 from "/fashionimages/homeimages/home6.jpg";

import category1 from "/fashionimages/categoriesimages/category1.jpg";
import category2 from "/fashionimages/categoriesimages/category2.jpg";
import category3 from "/fashionimages/categoriesimages/category3.jpg";
import category4 from "/fashionimages/categoriesimages/category4.jpg";
import category5 from "/fashionimages/categoriesimages/category5.jpg";
import category7 from "/fashionimages/categoriesimages/category7.jpg";
import category8 from "/fashionimages/categoriesimages/category8.jpg";
import category9 from "/fashionimages/categoriesimages/category9.jpg";
import category10 from "/fashionimages/categoriesimages/category10.jpg";
import category11 from "/fashionimages/categoriesimages/category11.jpg";
import category12 from "/fashionimages/categoriesimages/category12.jpg";

import shop1 from "/fashionimages/shopimages/shop1.jpg";
import shop2 from "/fashionimages/shopimages/shop2.jpg";
import shop3 from "/fashionimages/shopimages/shop3.jpg";

const products = [
  {
    id: "p1",
    title: "Grand Frock",
    img: home3,
    price: 1250,
    oldPrice: 1400,
    rating: 5,
    reviews: 65,
  },
  {
    id: "p2",
    title: "Gold Strap Watch",
    img: home4,
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: "p3",
    title: "American Diamond Earrings",
    img: category5,
    price: 799,
    oldPrice: 999,
    rating: 5,
    reviews: 72,
  },

  {
    id: "l2",
    title: "Stylish Handbag",
    img: shop3,
    price: 499,
    oldPrice: 1299,
    rating: 4,
    reviews: 37,
  },
  {
    id: "c3",
    title: "Designer Pant-Shirt",
    img: category3,
    price: 1350,
    oldPrice: 1600,
    rating: 5,
    reviews: 72,
  },
  {
    id: "n1",
    title: "Premium White Watch",
    img: category9,
    price: 1190,
    oldPrice: 1790,
    rating: 5,
    reviews: 88,
  },

  {
    id: "p9",
    title: "Elegant Evening Gown",
    img: category2,
    price: 1960,
    oldPrice: 2160,
    rating: 5,
    reviews: 88,
  },
  {
    id: "p10",
    title: "Antique Bangles",
    img: home6,
    price: 990,
    oldPrice: 1290,
    rating: 4,
    reviews: 60,
  },
  {
    id: "p11",
    title: "Leather Watch",
    img: category12,
    price: 850,
    oldPrice: 999,
    rating: 4,
    reviews: 47,
  },
  {
    id: "p12",
    title: "Pink Handbag",
    img: shop2,
    price: 450,
    oldPrice: 699,
    rating: 4,
    reviews: 33,
  },
  {
    id: "p13",
    title: "Hip Belt",
    img: category8,
    price: 650,
    oldPrice: 850,
    rating: 5,
    reviews: 70,
  },
  {
    id: "p14",
    title: "Designer Long Gown",
    img: category1,
    price: 2000,
    oldPrice: 2400,
    rating: 4,
    reviews: 55,
  },
  {
    id: "p15",
    title: "Gold Plated Bangles",
    img: category7,
    price: 899,
    oldPrice: 1099,
    rating: 5,
    reviews: 90,
  },
  {
    id: "p16",
    title: "Classic Half-Saree",
    img: category4,
    price: 1500,
    oldPrice: 1950,
    rating: 4,
    reviews: 40,
  },

  {
    id: "n3",
    title: "Gold Plated Watch",
    img: category11,
    price: 1190,
    oldPrice: 1490,
    rating: 4,
    reviews: 47,
  },
  {
    id: "p18",
    title: "Blue Steel Watch",
    img: category10,
    price: 990,
    oldPrice: 1290,
    rating: 4,
    reviews: 37,
  },
  {
    id: "p19",
    title: "Chocker Necksets",
    img: home5,
    price: 999,
    oldPrice: 1499,
    rating: 4,
    reviews: 28,
  },
  {
    id: "p20",
    title: "Purple Grand Frock",
    img: shop1,
    price: 1799,
    oldPrice: 2999,
    rating: 5,
    reviews: 45,
  },
];

function renderStars(rating) {
  const full = Math.floor(rating);
  return "★★★★★☆☆☆☆☆".slice(5 - full, 10 - full);
}

export default function Shop() {
  const [wishlist, setWishlist] = useState(new Set());

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  return (
    <div className="shop-page">
      {/* HERO */}
      <section className="shop-hero">
        <div className="container text-center">
          <h2 className="shop-hero-title fw-bold text-dark">
            Hanvi Collections
          </h2>

          <p className="shop-hero-lead text-dark">
            Discover our collection of premium jewelleries and fashion
            accessories <br />
            crafted with the finest materials and timeless <br />
            designs that complement your lifestyle.
          </p>

          <button className="btn btn-lg mt-3 shop-hero-btn" type="button">
            View Collections
          </button>
        </div>
      </section>

      {/* MAIN */}
      <div className="container py-5">
        <div className="row g-4">
          {/* LEFT FILTERS */}
          <aside className="col-12 col-lg-3">
            <div className="filter-box">
              <h5 className="filter-title">Filters</h5>

              <div className="filter-section">
                <div className="filter-heading">Price</div>
                {["$0 - $50", "$50 - $100", "$100 - $200", "$200 - $500", "$500+"].map(
                  (p) => (
                    <label key={p} className="filter-option">
                      <input type="radio" name="price" />
                      <span>{p}</span>
                    </label>
                  )
                )}
              </div>

              <div className="filter-section">
                <div className="filter-heading">Categories</div>
                {["Bangles", "Watches", "Handbags", "Necklaces", "Grand Frocks"].map(
                  (c) => (
                    <label key={c} className="filter-option">
                      <input type="radio" name="category" />
                      <span>{c}</span>
                    </label>
                  )
                )}
              </div>

              <div className="filter-section">
                <div className="filter-heading">Colors</div>
                {[
                  ["Black", "dot-black"],
                  ["Brown", "dot-brown"],
                  ["Pink", "dot-pink"],
                  ["Blue", "dot-blue"],
                  ["White", "dot-white"],
                ].map(([name, cls]) => (
                  <label key={name} className="filter-option color-option">
                    <input type="radio" name="color" />
                    <span className={`color-dot ${cls}`}></span>
                    <span>{name}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <section className="col-12 col-lg-9">
            <div className="text-center mb-4">
              <h2 className="shop-heading">Our Collections</h2>
            </div>

            <div className="row g-4">
              {products.map((p) => (
                <div key={p.id} className="col-12 col-sm-6 col-lg-4 mt-5">
                  <div className="product-card h-100">
                    {/* WISHLIST TOGGLE */}
                    <button
                      className={`wishlist-btn ${wishlist.has(p.id) ? "active" : ""}`}
                      onClick={() => toggleWishlist(p.id)}
                      type="button"
                      aria-label="Wishlist"
                    >
                      <i className="bi bi-heart-fill"></i>
                    </button>

                    {/* ✅ Image now uses imported asset */}
                    <img src={p.img} alt={p.title} className="w-100" />

                    <div className="p-3 text-center">
                      <h6 className="fw-bold mb-2">{p.title}</h6>

                      <div className="mb-2">
                        <span className="price-new">₹{p.price}</span>{" "}
                        <span className="price-old">₹{p.oldPrice}</span>
                      </div>

                      <div className="rating-stars mb-3">
                        {renderStars(p.rating)}{" "}
                        <span className="text-muted">({p.reviews})</span>
                      </div>

                      <div className="d-flex justify-content-center align-items-center gap-3">
                        <button
                          type="button"
                          className="cart-icon-btn"
                          title="Add to Cart"
                          aria-label="Add to Cart"
                        >
                          <i className="bi bi-cart3"></i>
                        </button>

                        <button className="btn-buy" type="button">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
