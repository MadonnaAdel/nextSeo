"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Mainbtn from "./mainBtn";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    onSwipedRight: () => setIsOpen(true),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll to adjust navbar size
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-3 drop-shadow-md rounded-lg bg-white w-full fixed z-50 transition-all duration-300 ${isScrolled ? "py-2 shadow-lg" : "py-4"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-thin text-primary">
          <Link href="/" className="flex items-center" aria-label="Homepage">
            <Image
              src="/assets/1727485704687znlrq4uq-removebg-preview.png"
              alt="logo"
              width={40}
              height={40}
              className="me-2"
            />
            Marketeer
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-secondary transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-secondary transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-700 hover:text-secondary transition duration-300"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Mainbtn
            text="Let's Talk"
            onClick={() => console.log("Button clicked!")}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          {...swipeHandlers}
          className="md:hidden bg-white text-center transition-transform duration-300 ease-in-out"
          aria-label="Mobile Navigation"
        >
          <ul>
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 transition duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 transition duration-300"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
