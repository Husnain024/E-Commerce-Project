import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  // Load wishlist from localStorage and saving app from crashing
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error("Failed to load wishlist:", error);
      return [];
    }
  });
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
