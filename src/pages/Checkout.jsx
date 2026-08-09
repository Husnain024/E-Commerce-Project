import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-bold">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Customer Information */}
        <div>
          <h2 className="text-2xl font-semibold">Customer Information</h2>

          <form className="mt-6 space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="City"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Postal Code"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="rounded-2xl bg-gray-100 p-6">
          <h2 className="text-2xl font-semibold">Order Summary</h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>

                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between border-t pt-5 text-xl">
            <span className="font-bold">Total</span>

            <span className="font-bold text-blue-600">
              ${subtotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
