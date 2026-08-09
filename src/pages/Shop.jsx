import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

function Shop() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Our Store
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Shop All Products
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore our premium collection and find something perfect for you.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Top Bar */}
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">All Products</h2>

              <p className="mt-1 text-sm text-gray-500">
                Showing {products.length} products
              </p>
            </div>

            {/* Sort UI */}
            <select className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
