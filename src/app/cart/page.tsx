"use client";
import Quantity from "@/components/Quantity";
import { images } from "@/constants/images";
import { HeartIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Cart = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <main className="container mx-auto px-5 mt-5">
      <section className="flex justify-between gap-5">
        <div className="w-2/3">
          <h3 className="text-2xl font-bold">Cart</h3>
          <hr className="mt-3" />

          <div className="mt-2">
            <div>
              <div className="flex-1 flex">
                <input type="checkbox" />
                <div className="ml-3 flex items-start gap-5 flex-1">
                  <Image
                    src={images.laptop}
                    alt="product"
                    className="w-28 object-contain bg-gray-100 rounded-sm"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-700">
                        Product name
                      </h4>
                      <div className="font-bold text-xl">$12.90</div>
                    </div>
                    <p className="text-gray-500 font-medium mt-1">
                      <sup>$</sup>12<sup>.90</sup> |{" "}
                      <span className="text-green-500">In Stock</span>
                    </p>
                    <div className="flex justify-between mt-3 items-center">
                      <Quantity quantity={quantity} setQuantity={setQuantity} />

                      <div className="flex gap-5 text-gray-500 font-medium">
                        <button className="flex items-center">
                          <HeartIcon size={20} />{" "}
                          <span className="ml-1">Save </span>
                        </button>
                        |
                        <button className="flex items-center">
                          <Trash2Icon size={20} />
                          <span className="ml-1">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="mt-2">
            <div>
              <div className="flex-1 flex">
                <input type="checkbox" />
                <div className="ml-3 flex items-start gap-5 flex-1">
                  <Image
                    src={images.laptop}
                    alt="product"
                    className="w-28 object-contain bg-gray-100 rounded-sm"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-700">
                        Product name
                      </h4>
                      <div className="font-bold text-xl">$12.90</div>
                    </div>
                    <p className="text-gray-500 font-medium mt-1">
                      <sup>$</sup>12<sup>.90</sup> |{" "}
                      <span className="text-green-500">In Stock</span>
                    </p>
                    <div className="flex justify-between mt-3 items-center">
                      <Quantity quantity={quantity} setQuantity={setQuantity} />

                      <div className="flex gap-5 text-gray-500 font-medium">
                        <button className="flex items-center">
                          <HeartIcon /> <span className="ml-1">save </span>
                        </button>
                        |
                        <button className="flex items-center">
                          <Trash2Icon />
                          <span className="ml-1">remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
          </div>
        </div>
        <div className="w-1/3">b</div>
      </section>
    </main>
  );
};

export default Cart;
