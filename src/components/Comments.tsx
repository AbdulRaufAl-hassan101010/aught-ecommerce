import React from "react";
import Ratings from "@/components/Ratings";
import { images } from "@/constants/images";
import Image from "next/image";
import { StarIcon } from "lucide-react";

const Comments = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">Reviews</h2>

      {/* reviews stats */}
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
            <div className="flex items-center gap-x-3">
              <span>4</span>
              <div className="w-3/5 h-2 bg-gray-300 rounded-full">
                <div className="h-full bg-blue-400 rounded-full"></div>
              </div>
              <span>120</span>
            </div>
            <div className="flex items-center gap-x-3">
              <span>3</span>
              <div className="w-2/5 h-2 bg-gray-300 rounded-full">
                <div className="h-full bg-blue-400 rounded-full"></div>
              </div>
              <span>120</span>
            </div>
            <div className="flex items-center gap-x-3">
              <span>2</span>
              <div className="w-2/5 h-2 bg-gray-300 rounded-full">
                <div className="h-full bg-blue-400 rounded-full"></div>
              </div>
              <span>120</span>
            </div>
            <div className="flex items-center gap-x-3">
              <span>1</span>
              <div className="w-1/5 h-2 bg-gray-300 rounded-full">
                <div className="h-full bg-blue-400 rounded-full"></div>
              </div>
              <span>120</span>
            </div>
          </div>
        </div>
      </div>

      {/* user reviews */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-10">
        <article className="bg-gray-100 p-5 rounded-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={images.hero}
                alt="user"
                className="rounded-full bg- w-12 h-12 object-contain shadow-sm"
              />
              <h3 className="font-semibold">John Doe</h3>
            </div>

            <div className="flex items-center">
              <StarIcon className="text-blue-400" fill="#60a5fa" size={20} />
              <span className="font-semibold ml-1">4.5</span>
            </div>
          </div>
          <p className="text-gray-500">2024-08-02</p>
          <p className="mt-3 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            doloremque.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Comments;
