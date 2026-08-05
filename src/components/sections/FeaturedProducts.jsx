import React from "react";
import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";

function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Products
          </p>

          <h2 className="mt-3 text-5xl font-bold">Featured Products</h2>

          <p className="mt-5 text-gray-500">
            Discover our best-selling products.
          </p>
        </div>

        {/* Products */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
