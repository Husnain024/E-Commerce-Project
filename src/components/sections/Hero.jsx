function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-20 md:flex-row">
        {/* Left Side */}
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase text-blue-600">
            New Collection 2026
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Discover Premium Fashion
            <br />
            For Every Lifestyle
          </h1>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Explore our latest collection with exclusive discounts and fast
            delivery.
          </p>

          <div className="flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              Shop Now
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-200 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-12 flex h-96 w-96 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-gray-800 md:mt-0">
          <h2 className="text-2xl font-bold text-gray-400 dark:text-gray-500">
            Product Image
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
