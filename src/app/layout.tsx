import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aught",
  description: "Your best shop platform",
};

const lato = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
