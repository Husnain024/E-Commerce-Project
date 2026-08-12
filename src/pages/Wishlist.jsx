import { useContext } from "react";

import { WishlistContext } from "../context/WishlistContext";

import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="mx-auto max-w-7xl bg-gray-50 px-6 py-20 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        My Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <p className="mt-6 text-gray-500 dark:text-gray-400">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-gray-800"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              {/* Product Details */}
              <div className="p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.category}
                </p>

                <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h2>

                <p className="mt-3 text-xl font-bold text-blue-600">
                  ${item.price}
                </p>

                {/* Add to Cart */}
                <button
                  onClick={() => {
                    const alreadyInCart = cart.some(
                      (cartItem) => cartItem.id === item.id,
                    );

                    if (!alreadyInCart) {
                      setCart([
                        ...cart,
                        {
                          ...item,
                          quantity: 1,
                        },
                      ]);
                    }

                    removeFromWishlist(item.id);
                  }}
                  className="mt-4 w-full rounded-xl bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
                >
                  Add to Cart
                </button>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-4 w-full rounded-xl bg-red-500 py-2 font-semibold text-white transition hover:bg-red-600"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
