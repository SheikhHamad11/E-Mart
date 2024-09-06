import React, {createContext, useContext, useState} from 'react';
const WishlistContext = createContext();

export default function WishListProvider({children}) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [liked, setLiked] = useState([]);
  const toggleItemInWishlist = item => {
    // Check if the item is already in the wishlist
    const itemExists = wishlistItems.find(
      wishlistItem => wishlistItem.id === item.id,
    );

    if (itemExists) {
      // Remove the item if it exists
      const updatedWishlist = wishlistItems.filter(
        wishlistItem => wishlistItem.id !== item.id,
      );
      setWishlistItems(updatedWishlist);
      console.log(`${item.name} removed from the wishlist.`);
    } else {
      // Add the item if it doesn't exist
      setWishlistItems([...wishlistItems, item]);
      console.log(`${item.name} added to the wishlist.`);
    }
  };

  return (
    <WishlistContext.Provider
      value={{toggleItemInWishlist, wishlistItems, liked, setLiked}}>
      {children}
    </WishlistContext.Provider>
  );
}

// Custom Hook to use the CartContext
export const useWishlist = () => useContext(WishlistContext);
