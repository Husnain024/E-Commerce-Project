import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import toast from "react-hot-toast";

import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Cart Context
  const { cart, setCart } = useContext(CartContext);

  // Wishlist Context
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const isWishlisted = wishlist.some((item) => item.id === product?.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white py-20 text-center dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Product Image */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-sm dark:bg-gray-800">
              <img
                src={product.image}
                alt={product.name}
                className="h-[400px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[500px]"
              />
            </div>
          </div>

          {/* Right - Product Information */}
          <div>
            {/* Product Title */}
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl">
              {product.name}
            </h1>

            {/* Badge */}
            <span
              className={`mt-5 inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${
                product.badge === "Sale" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {product.badge}
            </span>

            {/* Rating */}
            <p className="mt-5 text-xl text-yellow-500">⭐ {product.rating}</p>

            {/* Price */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price}
              </span>

              <span className="text-xl text-gray-400 line-through">
                ${product.oldPrice}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                Save ${product.oldPrice - product.price}
              </span>
            </div>

            {/* Category */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Category
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {product.category}
              </p>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Description
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Quantity
              </h3>

              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-xl font-bold text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
                >
                  -
                </button>

                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-xl font-bold text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => {
                if (isWishlisted) {
                  setWishlist(
                    wishlist.filter((item) => item.id !== product.id),
                  );

                  toast.success("Removed from wishlist");
                } else {
                  setWishlist([...wishlist, product]);

                  toast.success("Added to wishlist");
                }
              }}
              className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl border py-3 font-semibold transition ${
                isWishlisted
                  ? "border-red-500 bg-red-500 text-white"
                  : "border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500 dark:border-gray-600 dark:text-white"
              }`}
            >
              <FiHeart />
              {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>

            {/* Add to Cart */}
            <button
              onClick={() => {
                const existingProduct = cart.find(
                  (item) => item.id === product.id,
                );

                if (existingProduct) {
                  setCart(
                    cart.map((item) =>
                      item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + quantity,
                          }
                        : item,
                    ),
                  );
                } else {
                  setCart([
                    ...cart,
                    {
                      ...product,
                      quantity: quantity,
                    },
                  ]);
                }

                // Toast Notification
                toast.success(`${product.name} added to cart`);
              }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
