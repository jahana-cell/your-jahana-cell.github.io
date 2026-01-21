'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

type CartType = 'Shop' | 'Pre-Booking';

interface CartContextType {
  cartItems: CartItem[];
  cartType: CartType | null;
  itemAdded: boolean;
  addToCart: (product: Product, type: CartType) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartType, setCartType] = useState<CartType | null>(null);
  const [itemAdded, setItemAdded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // This effect runs only on the client, after initial render
    try {
      const savedCart = localStorage.getItem('shoppingCart');
      const savedCartType = localStorage.getItem('shoppingCartType') as CartType | null;
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
        setCartType(savedCartType);
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      localStorage.removeItem('shoppingCart');
      localStorage.removeItem('shoppingCartType');
    }
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    // This effect also runs only on the client
    try {
      if (cartItems.length > 0) {
          localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
          if (cartType) {
              localStorage.setItem('shoppingCartType', cartType);
          }
      } else {
          localStorage.removeItem('shoppingCart');
          localStorage.removeItem('shoppingCartType');
      }
    } catch (error) {
        console.error("Failed to save cart to localStorage", error);
    }
  }, [cartItems, cartType]);
  
  useEffect(() => {
    if (itemAdded) {
      const timer = setTimeout(() => setItemAdded(false), 820); // Corresponds to animation duration
      return () => clearTimeout(timer);
    }
  }, [itemAdded]);


  const addToCart = (product: Product, type: CartType) => {
    if (cartType && cartType !== type) {
        toast({
            title: "Cart Type Conflict",
            description: `You cannot add items from a different category to your cart. Please clear your current cart which contains "${cartType}" items first.`,
            variant: "destructive"
        });
        return;
    }
    
    setCartType(type);
    setItemAdded(true);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== productId);
        if(newItems.length === 0) {
            setCartType(null);
        }
        return newItems;
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCartType(null);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartType,
        itemAdded,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
