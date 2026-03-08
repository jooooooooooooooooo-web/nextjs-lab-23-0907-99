"use client";

import { useCart } from "@/lib/cart-context";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Headphones", price: 199 },
  { id: 3, name: "Keyboard", price: 79 },
];

export default function ShopPage() {
  const { shoveIn, throw, stuff } = useCart();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Shop</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "20px", width: "200px" }}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => shoveIn(product)} style={{ margin: "5px", padding: "8px 16px" }}>
              Add to Cart
            </button>
            <button onClick={() => throw(product.id)} style={{ margin: "5px", padding: "8px 16px" }}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}