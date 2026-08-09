import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="mt-6 text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="mt-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 rounded-xl bg-gray-100 p-5"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                {/* Product Details */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">${item.price}</p>

                  {/* Quantity */}
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border font-bold transition hover:bg-gray-200"
                    >
                      -
                    </button>

                    <span className="min-w-6 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border font-bold transition hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-10 max-w-md rounded-2xl bg-gray-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Cart Summary</h2>

            {/* Subtotal */}
            <div className="mt-5 flex justify-between">
              <span className="text-gray-600">Subtotal</span>

              <span className="font-bold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Shipping */}
            <div className="mt-3 flex justify-between">
              <span className="text-gray-600">Shipping</span>

              <span className="font-semibold text-green-600">Free</span>
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-gray-300"></div>

            {/* Total */}
            <div className="flex items-center justify-between text-xl">
              <span className="font-bold text-gray-900">Total</span>

              <span className="font-bold text-blue-600">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <Link
              to="/checkout"
              className="mt-6 block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
