import { FiMail } from "react-icons/fi";

function Newsletter() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-semibold uppercase tracking-[4px] text-blue-600">
          Stay Updated
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
          Get the Latest Deals & Updates
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Subscribe to our newsletter and never miss our latest products,
          special offers, and exclusive deals.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <FiMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="email"
              placeholder="Enter your email address"
              className="h-14 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 outline-none transition focus:border-blue-600"
            />
          </div>

          <button className="h-14 rounded-xl bg-blue-600 px-7 font-semibold text-white transition hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
