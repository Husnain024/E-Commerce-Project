import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  // Subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Form useState
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });
  //   useNavigate
  const navigate = useNavigate();

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.postalCode
    ) {
      alert("Please fill all fields.");
      return;
    }

    navigate("/order-success");
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-bold">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Customer Information */}
        <div>
          <h2 className="text-2xl font-semibold">Customer Information</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            {/* Address */}
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: e.target.value,
                })
              }
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {/* City */}
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    city: e.target.value,
                  })
                }
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
              />

              {/* Postal Code */}
              <input
                type="text"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    postalCode: e.target.value,
                  })
                }
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Place Order
              </button>
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

          {/* Total */}
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
