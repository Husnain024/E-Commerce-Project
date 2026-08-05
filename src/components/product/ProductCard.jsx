import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      {/* Product Image */}

      <div className="relative">
        <img
          src="https://placehold.co/400x300?text=Product"
          alt={product.name}
          className="h-64 w-full object-cover"
        />

        {/* Wishlist */}

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:bg-red-500 hover:text-white">
          <FiHeart size={20} />
        </button>
      </div>

      {/* Product Details */}

      <div className="p-5">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h3 className="mt-2 text-xl font-semibold text-gray-900">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-yellow-500">
            ⭐ {product.rating}
          </span>

          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
