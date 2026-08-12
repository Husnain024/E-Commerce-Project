import { useMemo, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { products } from "../data/products";

import ProductCard from "../components/product/ProductCard";

function Shop() {
  // For Searching products
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  // Category Filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Price Filter
  const [maxPrice, setMaxPrice] = useState("All");

  // Sort Products
  const [sortBy, setSortBy] = useState("featured");

  // Filter Products
  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return products.filter((product) => {
      // Search Filter
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query);

      // Category Filter
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      // Price Filter
      const matchesPrice =
        maxPrice === "All" || product.price <= Number(maxPrice);

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, maxPrice]);

  // Sort Products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    if (sortBy === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [filteredProducts, sortBy]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Page Header */}
      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Our Store
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Shop All Products
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                All Products
              </h2>

              {/* Product Count */}
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {searchQuery
                  ? `Showing ${filteredProducts.length} results for "${searchQuery}"`
                  : `Showing ${filteredProducts.length} products`}
              </p>

              {/* Category Filter */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "All",
                  "Shoes",
                  "Fashion",
                  "Watches",
                  "Electronics",
                  "Furniture",
                  "Accessories",
                ].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <div className="mt-6">
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  <option value="All">All Prices</option>
                  <option value="100">Under $100</option>
                  <option value="200">Under $200</option>
                  <option value="500">Under $500</option>
                  <option value="1000">Under $1000</option>
                </select>
              </div>
            </div>

            {/* Sort UI */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Product Grid / No Results */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                No Products Found
              </h3>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try changing your search, category, or price filter.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Shop;
