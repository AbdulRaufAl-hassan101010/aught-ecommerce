import { HeartIcon, Trash2Icon } from "lucide-react";
import React from "react";
import Quantity from "./ui/Quantity";
import Image, { StaticImageData } from "next/image";

type CartItemProps = {
  name: string;
  price: number;
  inStock: number;
  total: number;
  image: string | StaticImageData;
};

const CartItem = ({ name, price, inStock, total, image }: CartItemProps) => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <>
      {" "}
      <div className="mt-3">
        <div className="flex-1 flex">
          <input type="checkbox" />
          <div className="ml-3 flex items-start gap-5 flex-1">
            <Image
              src={image}
              alt="product"
              className="w-28 object-cover bg-gray-100 rounded-sm"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-700">{name}</h4>
                <div className="font-semibold text-xl">${total}</div>
              </div>
              <p className="text-gray-500 font-medium text-sm mt-1">
                ${price} |{" "}
                {inStock > 0 ? (
                  <span className="text-green-500 text-sm"> In Stock </span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
              <div className="flex justify-between mt-3 items-center">
                {inStock > 0 && (
                  <Quantity quantity={quantity} setQuantity={setQuantity} />
                )}

                <div className="flex gap-5 text-blue-500 font-medium">
                  <button className="flex items-center">
                    <HeartIcon size={20} /> <span className="ml-1">Save </span>
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
    </>
  );
};

export default CartItem;
