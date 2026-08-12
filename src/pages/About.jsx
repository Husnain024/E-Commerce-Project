function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            About LuxeCart
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Shopping Made Simple & Stylish
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
            We bring quality products, modern design, and a smooth shopping
            experience together in one place.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[3px] text-blue-600">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Built for modern shoppers
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
              LuxeCart is a modern e-commerce concept created to make online
              shopping simple, enjoyable, and convenient.
            </p>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
              From fashion and footwear to electronics and furniture, our
              collection brings different categories together with a clean and
              premium shopping experience.
            </p>
          </div>

          <div className="flex h-80 items-center justify-center rounded-3xl bg-blue-600">
            <span className="text-5xl font-bold text-white">LuxeCart</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[3px] text-blue-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              What We Stand For
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-gray-800">
              <div className="text-4xl">⭐</div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                Quality Products
              </h3>

              <p className="mt-3 text-gray-500 dark:text-gray-400">
                We focus on products that combine quality, style, and value.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-gray-800">
              <div className="text-4xl">🚚</div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                Fast Delivery
              </h3>

              <p className="mt-3 text-gray-500 dark:text-gray-400">
                A smooth shopping experience from browsing to delivery.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-gray-800">
              <div className="text-4xl">💙</div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                Customer First
              </h3>

              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Everything is designed around a simple and enjoyable customer
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
