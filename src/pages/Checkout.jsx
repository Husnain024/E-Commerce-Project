import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  // Cart Context
  const { cart, setCart } = useContext(CartContext);

  // Subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  // Error State
  const [errors, setErrors] = useState({});

  // Navigate
  const navigate = useNavigate();

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    // Address Validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    // City Validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    // Postal Code Validation
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required.";
    }

    // Set Errors
    setErrors(newErrors);

    // If there are no errors
    if (Object.keys(newErrors).length === 0) {
      // Clear cart
      setCart([]);

      // Go to order success page
      navigate("/order-success");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Checkout
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Customer Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Customer Information
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Full Name */}
              <div>
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
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
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
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
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
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
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
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 ${
                    errors.address
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />

                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* City */}
                <div>
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
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 ${
                      errors.city
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />

                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                  )}
                </div>

                {/* Postal Code */}
                <div>
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
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 ${
                      errors.postalCode
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />

                  {errors.postalCode && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.postalCode}
                    </p>
                  )}
                </div>
              </div>

              {/* Place Order */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="mt-6 text-gray-500 dark:text-gray-400">
                Your cart is empty.
              </p>
            ) : (
              <div className="mt-6 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-gray-900 dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Total */}
            <div className="mt-6 flex justify-between border-t border-gray-200 pt-5 text-xl dark:border-gray-700">
              <span className="font-bold text-gray-900 dark:text-white">
                Total
              </span>

              <span className="font-bold text-blue-600">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
