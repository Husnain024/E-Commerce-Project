import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Categories
          </p>

          <h2 className="mt-3 text-5xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <br />

          {/* <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Browse our premium collections and discover products from your
            favorite categories.
          </p> */}
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                to={`/category/${category.name.toLowerCase()}`}
                className="group flex cursor-pointer flex-col items-center rounded-2xl bg-white p-8 shadow-md transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 rounded-full bg-blue-100 p-5 text-blue-600 transition duration-300 ease-in-out group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={40} />
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
