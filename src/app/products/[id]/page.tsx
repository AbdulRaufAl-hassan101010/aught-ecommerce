"use client";

import ProductCard from "@/components/ProductCard";
import Quantity from "@/components/Quantity";
import Ratings from "@/components/Ratings";
import Button from "@/components/ui/Button";
import { images } from "@/constants/images";
import { Package2Icon, Rat, StarIcon, TruckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductId = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <main className="mt-10 container mx-auto px-3 md:px-0">
      <section className="grid lg:grid-cols-2 gap-5">
        {/* product image */}
        <div className="rounded-sm">
          <div className="bg-gray-100">
            <Image
              src={images.laptop}
              alt="Laptop"
              className="object-contain h-[400px] w-full"
            />
          </div>

          <div className="grid grid-cols-4 gap-x-3 mt-3">
            <div className="bg-gray-200 cursor-pointer hover:border-2 hover:border-blue-500">
              <Image
                src={images.laptop}
                alt="Laptop"
                className="object-contain h-[100px] w-full"
              />
            </div>
            <div className="bg-gray-200 cursor-pointer hover:border-2 hover:border-blue-500">
              <Image
                src={images.laptop}
                alt="Laptop"
                className="object-contain h-[100px] w-full"
              />
            </div>
            <div className="bg-gray-200 cursor-pointer hover:border-2 hover:border-blue-500">
              <Image
                src={images.laptop}
                alt="Laptop"
                className="object-contain h-[100px] w-full"
              />
            </div>
            <div className="bg-gray-200 cursor-pointer hover:border-2 hover:border-blue-500">
              <Image
                src={images.laptop}
                alt="Laptop"
                className="object-contain h-[100px] w-full"
              />
            </div>
          </div>
        </div>

        {/* product details */}
        <div>
          <h1 className="text-3xl font-medium">Macbook Air 16Gb - Grey</h1>
          <p className="mt-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            consequatur soluta aspernatur aliquid dolorem voluptatum doloremque.
            Labore soluta sunt porro adipisci doloribus quisquam dolor velit
            libero iusto est? Voluptas, placeat!
          </p>
          {/* ratings */}
          <div className="mt-3">
            <Ratings rating={4.7} totalReviews={120} />
          </div>

          {/* price */}
          <hr className="mt-5" />
          <div className="mt-3">
            <span className="text-2xl font-medium">
              <sup>$</sup>
              1,400<sup>.00</sup>
            </span>
          </div>
          <hr className="mt-5" />

          {/* quantity handler */}
          <div className="mt-3 flex items-center">
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <span className="ml-3 text-sm font-medium">
              <span className="text-blue-500">400</span> items left!
            </span>
          </div>
          <hr className="mt-5" />

          {/* buttons */}
          <div className="mt-3 flex items-center gap-3">
            <Button>Add to Cart</Button>
            <Button className="!bg-white !text-black border-2 !py-2.5 border-blue-400">
              Buy Now
            </Button>
          </div>
          <hr className="mt-5" />

          {/* delivery date and policy */}
          <div className="mt-3 flex items-start gap-3">
            <TruckIcon className="text-blue-500" size={30} />
            <div>
              <span className="font-semibold text-sm">Delivery Date</span>
              <p className="text-gray-500">
                <span className="text-blue-500">Tomorrow</span> by 12pm.{" "}
                <Link href="/" className="text-blue-500 underline">
                  See more
                </Link>
              </p>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="mt-3 flex items-start gap-3">
            <Package2Icon className="text-blue-500" size={30} />
            <div>
              <span className="font-semibold text-sm">Return Delivery</span>
              <p className="text-gray-500">
                <span className="text-blue-500">Free</span> return within 7
                days.{" "}
                <Link href="/" className="text-blue-500 underline">
                  More details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* comment section */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="lg:border-r-2 lg:pr-5 flex-1 mt-10 lg:mt-3">
            <h3 className="font-semibold text-gray-500">Total Reviews</h3>
            <p className="text-2xl font-bold lg:mt-3">120,000</p>
          </div>
          <div className="lg:border-r-2 lg:pl-5 flex-1 mt-10 lg:mt-3">
            <h3 className="font-semibold text-gray-500">Average rating</h3>
            <div className="flex items-center lg:mt-3 gap-x-2">
              <span className="text-2xl font-bold">4.5</span>
              <Ratings rating={4.7} />
            </div>
          </div>
          <div className="lg:pl-5 flex-1 mt-10 lg:mt-3">
            {/* create 5 progress bar for the 1-5 ratings */}
            <h3 className="font-semibold text-gray-500">Rating Breakdown</h3>
            <div className="mt-3">
              <div className="flex items-center gap-x-3">
                <span>5</span>
                <div className="w-1/5 h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-400 rounded-full"></div>
                </div>
                <span>120</span>
              </div>
              <div className="flex items-center gap-x-3 mt-1">
                <span>4</span>
                <div className="w-3/5 h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-400 rounded-full"></div>
                </div>
                <span>120</span>
              </div>
              <div className="flex items-center gap-x-3 mt-1">
                <span>3</span>
                <div className="w-2/5 h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-400 rounded-full"></div>
                </div>
                <span>120</span>
              </div>
              <div className="flex items-center gap-x-3 mt-1">
                <span>2</span>
                <div className="w-2/5 h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-400 rounded-full"></div>
                </div>
                <span>120</span>
              </div>
              <div className="flex items-center gap-x-3 mt-1">
                <span>1</span>
                <div className="w-1/5 h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-400 rounded-full"></div>
                </div>
                <span>120</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* similiar products */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Similar Products</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10">
          <ProductCard
            name={"Mongo Juice"}
            price={190}
            description={"Best orange juice in the market"}
            rating={4.7}
            totalReviews={120}
            image={images.grocery}
          />
          <ProductCard
            name={"Mongo Juice"}
            price={190}
            description={"Best orange juice in the market"}
            rating={4.7}
            totalReviews={120}
            image={images.grocery}
          />
          <ProductCard
            name={"Mongo Juice"}
            price={190}
            description={"Best orange juice in the market"}
            rating={4.7}
            totalReviews={120}
            image={images.grocery}
          />
          <ProductCard
            name={"Mongo Juice"}
            price={190}
            description={"Best orange juice in the market"}
            rating={4.7}
            totalReviews={120}
            image={images.grocery}
          />
        </div>
      </section>
    </main>
  );
};

export default ProductId;
