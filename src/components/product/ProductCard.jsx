import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Badge */}
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${
              product.badge === "Sale" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {product.badge}
          </span>

          {/* Wishlist */}
          <button
            className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:bg-red-500 hover:text-white"
            aria-label="Wishlist"
          >
            <FiHeart size={18} />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-5">
          <p className="text-sm text-gray-500">{product.category}</p>

          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium text-gray-700">{product.rating}</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>

            <span className="text-lg text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          </div>

          {/* Add to Cart */}
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">
            <FiShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
