import { Link } from "react-router-dom";
import { FiCheckCircle, FiShoppingBag } from "react-icons/fi";

function OrderSuccess() {
  // Dynamic Order Number
  const orderNumber = `#LC-${Date.now().toString().slice(-6)}`;

  // Dynamic Order Date
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-900">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-gray-800 sm:p-12">
        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <FiCheckCircle size={48} />
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Order Placed Successfully!
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-500 dark:text-gray-400">
          Thank you for your purchase. Your order has been received.
        </p>

        {/* Order Info */}
        <div className="mt-8 rounded-2xl bg-gray-50 p-5 dark:bg-gray-700">
          {/* Order Number */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Order Number
          </p>

          <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
            {orderNumber}
          </p>

          {/* Order Date */}
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Order Date
          </p>

          <p className="mt-1 font-semibold text-gray-900 dark:text-white">
            {orderDate}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {/* Continue Shopping */}
          <Link
            to="/shop"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FiShoppingBag size={18} />
            Continue Shopping
          </Link>

          {/* Back to Home */}
          <Link
            to="/"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
