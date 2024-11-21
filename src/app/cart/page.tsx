"use client";
import CartItem from "@/components/CartItem";
import { images } from "@/constants/images";
import React from "react";

const Cart = () => {
  return (
    <main className="container mx-auto px-5 mt-5">
      <section className="flex justify-between gap-5 flex-col md:flex-row">
        <div className="w-full md:w-2/3 overflow-hidden">
          <h3 className="text-2xl font-bold">Cart</h3>
          <hr className="mt-3" />

          <CartItem
            name="Product 1"
            price={100}
            inStock={0}
            total={100}
            image={images.laptop}
          />
          <CartItem
            name="Macbook Pro - 16GB RAM, 1TB SSD"
            price={100}
            inStock={6}
            total={100}
            image={images.laptop}
          />
        </div>
        <div className="w-full md:w-1/3">b</div>
      </section>
    </main>
  );
};

export default Cart;
