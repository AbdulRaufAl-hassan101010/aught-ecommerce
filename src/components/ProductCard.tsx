import { Heart, ShoppingCartIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Ratings from "./Ratings";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  rating: number;
  totalReviews: number;
  image: string | StaticImageData;
}

const ProductCard = ({
  name,
  price,
  description,
  rating,
  totalReviews,
  image,
}: ProductCardProps) => {
  return (
    <div>
      <div className="bg-gray-100 rounded-sm h-[240px] shadow-sm relative">
        <Link href="/product/1">
          <Image
            src={image}
            alt="product"
            className="w-full h-full object-contain"
          />
        </Link>
        <div className="absolute bottom-2 left-0 right-0 w-full px-3 z-10">
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
      <div className="mt-3">
        <div className="flex justify-between font-bold">
          <div>
            <Link href="/product/1">{name}</Link>
          </div>
          <div>
            <sup>$</sup>
            {price}
            <sup>.00</sup>
          </div>
        </div>
        <p className="mt- text-sm text-gray-500">{description}</p>
        <div className="mt-3">
          <Ratings rating={rating} totalReviews={totalReviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
