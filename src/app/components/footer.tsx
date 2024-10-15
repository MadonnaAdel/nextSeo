import Link from "next/link";
import React from "react";
import Mainbtn from "./mainBtn";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">GET STARTED</h1>
        <h2 className="text-3xl mb-4">NOW</h2>
        <Mainbtn text="Let's Contact" link="/" />
      </div>

      <p className="text-center mb-8">
        If you would like to work with us or just want to get in touch,
        we&apos;d love to hear from you!
      </p>

      <div className="flex justify-between items-start border-t border-gray-700 pt-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">London</h3>
          <address>
            Baltia Square, Mark Street,
            <br />
            London
          </address>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">New York</h3>
          <address>
            Neruysa Centre, Ella Street,
            <br />
            New York, USA
          </address>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Enter your email</h3>
          <div className="flex items-center border-b border-gray-700">
            <input
              type="email"
              className="bg-primary border-none w-full p-2 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
              aria-label="Email input"
            />
            <button className="ml-2 text-white" aria-label="Submit email">
              <Image
                src="/assets/Vector.png"
                alt="Submit icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-400 border-t border-gray-700 mt-8 pt-8">
        <p>© 2024 - 2025 | All rights reserved by Marketeer</p>
        <div className="space-x-4 flex">
          <Link href="/about" className="hover:text-white px-4 py-2 rounded">
            About Us
          </Link>
          <Link href="/privacy" className="hover:text-white px-4 py-2 rounded">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
