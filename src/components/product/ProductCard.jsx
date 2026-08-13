import React, { useContext } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { cart, setCart } = useContext(CartContext);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      toast.success("Removed from wishlist");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Added to wishlist");
    }
  };

  // Add to Cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
      {/* Product Image */}
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover"
          />
        </Link>

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
          onClick={handleWishlist}
          className={`absolute right-4 top-4 rounded-full p-2 shadow transition ${
            isWishlisted
              ? "bg-red-500 text-white"
              : "bg-white text-gray-700 hover:bg-red-500 hover:text-white dark:bg-gray-700 dark:text-white"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <FiHeart size={18} />
        </button>
      </div>

      {/* Product Details */}
      <Link to={`/product/${product.id}`}>
        <div className="p-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {product.category}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>

            <span className="font-medium text-gray-700">{product.rating}</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xl font-bold text-blue-600 sm:text-2xl">
              ${product.price}
            </span>

            <span className="text-lg text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            <FiShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
