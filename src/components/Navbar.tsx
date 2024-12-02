import { ShoppingCartIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white container mx-auto py-3 px-5 sticky top-0 h-[90px] z-50">
      <div className="flex justify-between h-full items-center">
        <Link href="/" className="text-2xl font-semibold">
          Aught
        </Link>
        <div className="flex space-x-5 items-center">
          <Link
            href="/profile"
            className="flex items-center hover:text-gray-400"
          >
            <User2Icon />{" "}
            <span className="ml-1 text-sm hidden md:inline-block">Account</span>
          </Link>
          <Link href="/cart" className="flex items-center hover:text-gray-600">
            <ShoppingCartIcon />{" "}
            <span className="ml-1 text-sm hidden md:inline-block">cart</span>
            <sup className="bg-blue-500 text-white rounded-full w-[22px] h-[22px] flex justify-center items-center  ml-0.5">
              9+
            </sup>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
