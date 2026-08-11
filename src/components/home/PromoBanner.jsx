function PromoBanner() {
  return (
    <section className="bg-blue-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center text-white md:flex-row md:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-200">
            Limited Time Offer
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Get up to 30% Off
          </h2>

          <p className="mt-2 text-blue-100">
            Upgrade your style with our latest collection.
          </p>
        </div>

        <button className="rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default PromoBanner;
