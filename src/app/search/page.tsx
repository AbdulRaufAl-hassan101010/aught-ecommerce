"use client";

import ProductCard from "@/components/ProductCard";
import Input from "@/components/ui/Input";
import { Grid, Rows } from "lucide-react";
import React from "react";
import { images } from "@/constants/images";

const Page = () => {
  const [search] = React.useState("T-shirt");

  return (
    <main className="mx-auto container">
      <h1 className="font-medium text-2xl">Search Page</h1>

      <form className="mt-4">
        <Input
          placeholder="Search"
          defaultValue={search}
          //  label="Your Search"
        />
      </form>

      <div className="flex mt-10 gap-x-5 items-start">
        {/* filter */}
        <div className="w-3/12 border-2 p-3 rounded-md">
          <h2 className="font-medium text-lg">Filter</h2>
        </div>

        {/* search results */}
        <div className="w-9/12">
          {/* headers */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-medium text-lg">Search Results</h2>
            <div className="flex justify-between items-center ">
              <div className="bg-gray-200 flex p-1 gap-x-2 rounded-lg">
                <button className="py-2 px-3 bg-white rounded-lg">
                  <Grid size={25} className="text-blue-500" />
                </button>
                <button className="py-2 px-3 rounded-lg">
                  <Rows size={25} className="text-blue-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 gap-y-20">
            <ProductCard
              name={"Macbook Pro 2021"}
              price={0}
              image={images.laptop}
            />
            <ProductCard
              name={"Macbook Pro 2021"}
              price={0}
              image={images.laptop}
            />
            <ProductCard
              name={"Macbook Pro 2021"}
              price={0}
              image={images.laptop}
            />
            <ProductCard
              name={"Iphone 13 Pro"}
              price={1400}
              image={images.phone}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
