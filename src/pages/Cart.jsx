import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="mt-6 text-gray-500">Your cart is empty.</p>
      ) : (
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
                <h2 className="text-xl font-semibold">{item.name}</h2>

                <p className="text-gray-500">${item.price}</p>

                {/* Quantity */}
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border font-bold hover:bg-gray-200"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border font-bold hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
