import type { Metadata } from "next";
// import global css
import "../globals.css";
import { Laptop, Package, Settings, User } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your best shop platform",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto px-5 bg-light">
      <div className="mt-5 flex flex-col lg:flex-row">
        <ul className="w-full lg:w-2/12">
          <li className="border rounded-t-md font-medium hover:bg-gray-100">
            <Link href={"/profile"} className="flex items-center gap-x-1 p-5 ">
              <User /> Profile
            </Link>
          </li>
          <li className="border font-medium hover:bg-gray-100">
            <Link
              href={"/profile/account"}
              className="flex items-center gap-x-1 p-5 "
            >
              <Settings /> Account
            </Link>
          </li>
          <li className="border font-medium hover:bg-gray-100">
            <Link href={""} className="flex items-center gap-x-1 p-5 ">
              <Laptop /> Appearance
            </Link>
          </li>
          <li className="border rounded-b-md font-medium hover:bg-gray-100">
            <Link href={""} className="flex items-center gap-x-1 p-5 ">
              <Package /> Orders
            </Link>
          </li>
        </ul>

        <div className="w-full lg:w-10/12 lg:ml-5 mt-10 lg:mt-0">
          {children}
        </div>
      </div>
    </main>
  );
}
