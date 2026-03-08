"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartContextType {
  stuff: CartItem[];
  grandTotal: number;
  shoveIn: (item: CartItem) => void;
  yeetOut: (itemID: number) => void;
}

const TheCartThing = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [myStuff, setMyStuff] = useState<CartItem[]>([]);

  const grandTotal = myStuff.reduce((runningTab, eachThing) => runningTab + eachThing.price, 0);

  function shoveIn(item: CartItem) {
    setMyStuff((oldStuff) => [...oldStuff, item]);
  }

  function yeetOut(itemID: number) {
    setMyStuff((oldStuff) => oldStuff.filter((eachThing) => eachThing.id !== itemID));
  }

  return (
    <TheCartThing.Provider value={{ stuff: myStuff, grandTotal, shoveIn, yeetOut }}>
      {children}
    </TheCartThing.Provider>
  );
}

export function useCart() {
  const grabbedContext = useContext(TheCartThing);
  if (!grabbedContext) throw new Error("useCart must be used within a CartProvider");
  return grabbedContext;
}