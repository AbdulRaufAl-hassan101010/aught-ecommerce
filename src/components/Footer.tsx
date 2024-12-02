import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-blue-500 text-white">
      <div className="container mx-auto px-5 py-10">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex-1">
            <Link href="/" className="font-bold text-lg">
              Aught{" "}
            </Link>

            <div className="">
              <p className="text-md">Your best shop platform...</p>
            </div>

            <div className="mt-3">
              <Link
                className="p-2 rounded-full bg-white inline-block"
                href={""}
              >
                <Facebook fill="#60a5fa" />
              </Link>
              <Link
                className="p-2 rounded-full bg-white inline-block ml-3"
                href={""}
              >
                <Instagram fill="#60a5fa" />
              </Link>
              <Link
                className="p-2 rounded-full bg-white inline-block ml-3"
                href={""}
              >
                <Twitter fill="#60a5fa" />
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-between flex-col md:flex-row">
            <div className="mt-10 md:mt-0">
              <h2 className="font-bold text-lg">Company</h2>
              <ul className="">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h2 className="font-bold text-lg">Careers</h2>
              <ul className="">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
