import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";

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

  // Add to Cart
  const { cart, setCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="min-h-screen bg-white py-20 text-center dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full rounded-xl object-cover sm:h-96"
        />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white sm:mt-8 sm:text-4xl">
          {product.name}
        </h1>

        <span
          className={`mt-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${
            product.badge === "Sale" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {product.badge}
        </span>

        <p className="mt-5 text-xl text-yellow-500">⭐ {product.rating}</p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-blue-600 sm:text-3xl">
            ${product.price}
          </span>

          <span className="text-xl text-gray-400 line-through">
            ${product.oldPrice}
          </span>
        </div>

        {/* Category */}
        <div className="mt-6">
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

        {/* Add to Cart */}
        <button
          onClick={() => {
            const existingProduct = cart.find((item) => item.id === product.id);

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
          }}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
