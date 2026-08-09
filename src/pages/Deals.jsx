import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

function Deals() {
  const saleProducts = products.filter((product) => product.badge === "Sale");

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-400">
            Limited Offers
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Hot Deals & Special Offers
          </h1>

          <p className="mt-5 text-gray-300">
            Grab your favorite products before these amazing deals disappear.
          </p>
        </div>
      </section>

      {/* Deals */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Today's Best Deals 🔥
            </h2>

            <p className="mt-2 text-gray-500">
              Save more on our selected products.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Deals;
