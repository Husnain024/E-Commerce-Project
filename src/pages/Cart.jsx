import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        {/* Heading */}
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Your Items
          </p>

          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="mt-12 rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Add some products to your cart and they will appear here.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-5 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full rounded-xl object-cover sm:h-28 sm:w-28"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">{item.category}</p>

                    <h2 className="mt-1 text-xl font-semibold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="mt-2 font-bold text-blue-600">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border font-bold transition hover:bg-gray-200"
                      >
                        -
                      </button>

                      <span className="min-w-6 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border font-bold transition hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    <FiTrash2 size={18} />
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Order Summary
              </h2>

              {/* Subtotal */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>

                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>

                  <span className="font-semibold text-green-600">Free</span>
                </div>

                {/* Divider */}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>

                    <span className="text-blue-600">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout */}
              <Link
                to="/checkout"
                className="mt-6 block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                className="mt-3 block text-center text-sm font-medium text-gray-500 transition hover:text-blue-600"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
