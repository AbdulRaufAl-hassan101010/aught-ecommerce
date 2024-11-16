import { images } from "@/constants/images";
import SearchInput from "../components/SearchInput";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="container mx-auto mt-3 px-3 md:px-0">
      <header className="bg-blue-200 rounded-sm flex justify-between h-[400px] shadow-sm">
        <div className="flex-1 flex items-center p-5">
          <div className="mb-5">
            <h1 className="text-4xl font-semibold md:font-medium">
              Do All Your Shopping With Us.
            </h1>
            <p className="mt-5 text-gray-600 text-sm">
              Get everything you need on aught, your best shop platform.
            </p>
            <div className="mt-5">
              <SearchInput />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Image
            src={images.hero}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <main className="mt-10">
        {/* categories */}
        <section>
          <h3 className="text-xl font-medium">Categories</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
            <Link
              href="/"
              className="bg-grey text-black p-5  flex flex-col justify-center items-center rounded-sm shadow-sm"
            >
              <Image
                src={images.laptop}
                alt="Laptop"
                width={150}
                height={150}
              />
              <h4 className="font-medium">Laptops</h4>
            </Link>
            <Link
              href="/"
              className="bg-grey text-black p-5  flex flex-col justify-center items-center rounded-sm shadow-sm"
            >
              <Image src={images.phone} alt="Phones" width={150} height={150} />
              <h4 className="font-medium">Phones</h4>
            </Link>
            <Link
              href="/"
              className="bg-grey text-black p-5  flex flex-col justify-center items-center rounded-sm shadow-sm"
            >
              <Image
                src={images.pharmacy}
                alt="Pharmacy"
                width={150}
                height={150}
              />
              <h4 className="font-medium">Pharmacy</h4>
            </Link>
            <Link
              href="/"
              className="bg-grey text-black p-5  flex flex-col justify-center items-center rounded-sm shadow-sm"
            >
              <Image
                src={images.grocery}
                alt="Laptop"
                width={150}
                height={150}
              />
              <h4 className="font-medium">Grocery</h4>
            </Link>
            <Link
              href="/"
              className="bg-grey text-black p-5  flex flex-col justify-center items-center rounded-sm shadow-sm"
            >
              <Image
                src={images.laptop}
                alt="Laptop"
                width={150}
                height={150}
              />
              <h4 className="font-medium">Laptops</h4>
            </Link>
            <Link
              href="/"
              className="bg-grey text-black p-5  flex flex-col justify-center items-center rounded-sm shadow-sm"
            >
              <Image
                src={images.laptop}
                alt="Laptop"
                width={150}
                height={150}
              />
              <h4 className="font-medium">Laptops</h4>
            </Link>
          </div>
        </section>

        {/* Products */}
        <section className="mt-10">
          <h2 className="text-xl font-medium">Popular Products</h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
    </div>
  );
}
