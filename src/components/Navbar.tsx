"use client";
import React, { useState, useEffect } from "react";
import { GiBee } from "react-icons/gi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { FaCow } from "react-icons/fa6";

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md shadow-[#1f2b2e] ml-0 lg:ml-6 mr-0 lg:mr-6 rounded-sm">
      <nav className="mt-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="flex gap-2 ml-0 lg:-ml-8 items-center text-2xl">
            <FaCow size={35} />
            <Link className="font-bold" href="/">
              Goru bari
            </Link>
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-[24px] focus:outline-none"
            aria-expanded={isMenuOpen}
          >
            <AiOutlineMenuFold size={40} />
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 text-white">
              <li>
                <Link
                  href="about-us"
                  className="block py-2 px-3 text-[20px] w-36 text-black dark:text-white rounded"
                >
                  About us
                </Link>
              </li>
              <li>
                <a
                  href="/menu"
                  className="block py-2 px-3 text-[20px] w-24 text-black dark:text-white rounded"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/review"
                  className="block py-2 px-3 text-[20px] w-24 text-black dark:text-white rounded"
                >
                  Review
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="block py-2 px-3 text-[20px] w-24 text-black dark:text-white rounded"
                >
                  Gallery
                </a>
              </li>
              <li>
                <Link
                  href="contact-us"
                  className="block py-2 px-3 text-[20px] w-36 text-black dark:text-white rounded"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full shadow-lg transition-all duration-300 
            bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:scale-105"
                >
                  {isDarkMode ? (
                    <MdLightMode size={24} />
                  ) : (
                    <MdDarkMode size={24} />
                  )}
                </button>
              </li>
            </ul>
          </div>

          {/* Dark Mode Toggle Button */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
