import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Luxe<span className="text-blue-500">Cart</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Your modern destination for fashion, electronics, furniture, and
            everyday essentials.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            <button className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-600">
              <FiFacebook size={18} />
            </button>

            <button className="rounded-full bg-gray-800 p-3 transition hover:bg-pink-600">
              <FiInstagram size={18} />
            </button>

            <button className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-500">
              <FiTwitter size={18} />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <ul className="mt-5 space-y-3 text-gray-400">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="transition hover:text-white">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/deals" className="transition hover:text-white">
                Deals
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold">Customer Service</h3>

          <ul className="mt-5 space-y-3 text-gray-400">
            <li>Contact Us</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Stay Updated</h3>

          <p className="mt-5 text-gray-400">
            Subscribe to receive the latest deals and updates.
          </p>

          <div className="mt-5 flex">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-l-xl bg-gray-800 px-4 py-3 text-white outline-none placeholder:text-gray-500"
            />

            <button className="rounded-r-xl bg-blue-600 px-4 transition hover:bg-blue-700">
              <FiMail size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 LuxeCart. All rights reserved.</p>

          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
