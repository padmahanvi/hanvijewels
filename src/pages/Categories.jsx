import React, { useMemo, useState } from "react";
import "./Categories.css";

const rowsData = [
    {
        heading: "Our Dress Collection",
        items: [
            { id: "c1", title: "Designer Long Gown", img: "/fashionimages/categoriesimages/category1.jpg", price: 2000, oldPrice: 2400, rating: 5, reviews: 65 },
            { id: "c2", title: "Elegant Evening Gown", img: "/fashionimages/categoriesimages/category2.jpg", price: 1960, oldPrice: 2160, rating: 5, reviews: 65 },
            { id: "c3", title: "Designer Pant-Shirt", img: "/fashionimages/categoriesimages/category3.jpg", price: 1350, oldPrice: 1600, rating: 5, reviews: 72 },
            { id: "c4", title: "Classic Half-Saree", img: "/fashionimages/categoriesimages/category4.jpg", price: 1500, oldPrice: 1950, rating: 4, reviews: 51 },
        ],
    },
    {
        heading: "Trending Jewellery",
        items: [
            { id: "t1", title: "American Diamond Earrings", img: "/fashionimages/categoriesimages/category5.jpg", price: 799, oldPrice: 999, rating: 4, reviews: 34 },
            { id: "t2", title: "Kundan Stone Set", img: "/fashionimages/categoriesimages/category6.jpg", price: 1399, oldPrice: 1699, rating: 5, reviews: 58 },
            { id: "t3", title: "Gold Plated Bangles", img: "/fashionimages/categoriesimages/category7.jpg", price: 899, oldPrice: 1099, rating: 4, reviews: 41 },
            { id: "t4", title: "Hip Belt", img: "/fashionimages/categoriesimages/category8.jpg", price: 650, oldPrice: 850, rating: 4, reviews: 29 },
        ],
    },
    {
        heading: "New Arrivals Watches",
        items: [
            { id: "n1", title: "Premium White Watch", img: "/fashionimages/categoriesimages/category9.jpg", price: 1190, oldPrice: 1790, rating: 5, reviews: 88 },
            { id: "n2", title: "Blue Steel Watch", img: "/fashionimages/categoriesimages/category10.jpg", price: 990, oldPrice: 1290, rating: 4, reviews: 60 },
            { id: "n3", title: "Gold Plated Watch", img: "/fashionimages/categoriesimages/category11.jpg", price: 1190, oldPrice: 1490, rating: 4, reviews: 47 },
            { id: "n4", title: "Leather Watch", img: "/fashionimages/categoriesimages/category12.jpg", price: 850, oldPrice: 999, rating: 4, reviews: 33 },
        ],
    },
    {
        heading: "Limited Offers",
        items: [
            { id: "p20", title: "Purple Grand Frock", img: "/fashionimages/shopimages/shop1.jpg", price: 1799, oldPrice: 2999, rating: 5, reviews: 45 },
            { id: "l2", title: "Stylish Handbag", img: "/fashionimages/shopimages/shop3.jpg", price: 499, oldPrice: 1299, rating: 4, reviews: 37 },
            { id: "p19", title: "Chocker Necksets", img: "/fashionimages/homeimages/home5.jpg", price: 999, oldPrice: 1499, rating: 4, reviews: 28 },
            { id: "p2", title: "Gold Strap Watch", img: "/fashionimages/homeimages/home4.jpg", price: 960, oldPrice: 1160, rating: 5, reviews: 65 },
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
                            <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
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
                                        <div className="d-flex justify-content-center align-items-center gap-3">
                                            <div className="rating-stars">
                                                {renderStars(p.rating)}{" "}
                                                <span className="text-muted">({p.reviews})</span>
                                            </div>
                                            {/* CART ICON */}
                                            <button
                                                type="button"
                                                className="cart-icon-btn"
                                                title="Add to Cart"
                                                aria-label="Add to Cart"
                                            >
                                                <i className="bi bi-cart3"></i>
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* VIEW MORE */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="col-12 d-flex justify-content-end mt-2">
                                <button className="viewmore-btn" type="button">
                                    View More
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
