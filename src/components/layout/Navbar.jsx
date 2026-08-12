import React, { useContext, useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  FiSearch,
  FiX,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  // Stop reloading page while searching products
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  // Search Product
  const [searchQuery, setSearchQuery] = useState("");

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
          {/* Desktop Search */}
          <div className="relative hidden xl:block">
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
                }
              }}
              placeholder="Search products..."
              className="h-7 w-64 rounded-full border border-gray-300 bg-white pl-11 pr-16 text-sm text-gray-900 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />

            {/* Clear Desktop Search */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  navigate("/shop");
                }}
                className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700 dark:hover:text-white"
                aria-label="Clear search"
              >
                <FiX size={16} />
              </button>
            )}
          </div>

          {/* Tablet / Mobile Search */}
          <div className="relative xl:hidden">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
                }
              }}
              placeholder="Search..."
              className="h-10 w-40 rounded-full border border-gray-300 bg-white pl-10 pr-10 text-sm text-gray-900 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-52"
            />

            {/* Clear Mobile Search */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  navigate("/shop");
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700 dark:hover:text-white"
                aria-label="Clear search"
              >
                <FiX size={16} />
              </button>
            )}
          </div>

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>

          {/* Wishlist */}
          <Link to="/wishlist" aria-label="Wishlist" className="relative">
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

          {/* Mobile Menu Button */}
          <button
            aria-label="Menu"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-5 font-medium text-gray-700">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Shop
            </NavLink>

            <NavLink
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Categories
            </NavLink>

            <NavLink
              to="/deals"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Deals
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600"
            >
              About
            </NavLink>

            {/* Login */}
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-fit rounded-full border border-blue-600 px-6 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
