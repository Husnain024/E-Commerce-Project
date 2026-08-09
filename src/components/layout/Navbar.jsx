import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          Luxe<span className="text-blue-600">Cart</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-10 text-lg font-medium text-gray-700 lg:flex">
          <li>
            <NavLink to="/" className="transition hover:text-blue-600">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/shop" className="transition hover:text-blue-600">
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categories"
              className="transition hover:text-blue-600"
            >
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink to="/deals" className="transition hover:text-blue-600">
              Deals
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="transition hover:text-blue-600">
              About
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative hidden xl:block">
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="h-7 w-64 rounded-full border border-gray-300 pl-11 pr-4 text-sm outline-none focus:border-blue-600"
            />
          </div>

          {/* Tablet Search */}
          <button aria-label="Search" className="xl:hidden">
            <FiSearch size={24} />
          </button>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative hidden sm:block"
          >
            <FiHeart size={24} className="transition hover:text-red-500" />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {wishlist.length}
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative cursor-pointer">
            <FiShoppingCart
              size={22}
              className="transition hover:text-blue-600"
            />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
              {cart.length}
            </span>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden rounded-full border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white lg:block"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
