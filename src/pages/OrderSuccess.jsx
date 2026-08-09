function OrderSuccess() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          ✓
        </div>

        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-500">
          Thank you for your purchase. Your order has been received.
        </p>
      </div>
    </div>
  );
}

export default OrderSuccess;
