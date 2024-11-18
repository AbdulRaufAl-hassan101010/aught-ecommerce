import { Minus, PlusIcon } from "lucide-react";
import React from "react";

type QuantityProps = {
  quantity: number;
  setQuantity: (value: number) => void;
  maxOrder?: number;
};

const Quantity = ({ quantity, maxOrder, setQuantity }: QuantityProps) => {
  return (
    <div className="rounded-sm  bg-gray-200 inline-flex items-center overflow-hidden">
      <button
        className="px-3 py-2 block hover:bg-gray-300 hover:text-white"
        onClick={() => setQuantity(quantity - 1)}
      >
        <Minus />
      </button>
      <input
        type="number"
        className="outline-none bg-gray-200 py-1 text-center w-16"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button
        className="px-3 py-2 block hover:bg-gray-300 hover:text-white"
        onClick={() => setQuantity(quantity + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Quantity;
