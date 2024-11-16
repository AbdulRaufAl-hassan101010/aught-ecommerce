import { images } from "@/constants/images";
import { Heart, ShoppingCartIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="bg-gray-100 rounded-sm h-[240px] shadow-sm relative ">
        <Image
          src={images.grocery}
          alt="product"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-2 left-0 right-0 w-full px-3">
          <div className="flex w-full justify-between">
            <button className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full hover:opacity-80">
              <Heart className="text-blue-400" />
            </button>
            <button className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full hover:opacity-80">
              <ShoppingCartIcon className="text-blue-400" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between font-semibold">
          <div>Mango - 1kg</div>
          <div>
            <sup>$</sup>10.00
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500">Best mango juice in africa</p>
        <div className="mt-3 flex">
          <StarIcon className="text-blue-400" fill="#60a5fa" />
          <StarIcon className="text-blue-400 ml-0.5" fill="#60a5fa" />
          <StarIcon className="text-blue-400 ml-0.5" fill="#60a5fa" />
          <StarIcon className="text-blue-400 ml-0.5" fill="#60a5fa" />
          <StarIcon className="text-blue-400 ml-0.5" fill="#60a5fa" />
          <span className="ml-1 text-gray-500">(122)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
